import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useRef,
  type ReactNode,
} from "react";
import type { Session, User } from "@supabase/supabase-js";
import { AUTH_STORAGE_KEY, supabase } from "../lib/supabaseClient";
import { Capacitor } from "@capacitor/core";

type AuthContextValue = {
  session: Session | null;
  user: User | null;
  isLoading: boolean;
  signInWithPassword: (args: { email: string; password: string }) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signUpWithPassword: (args: { email: string; password: string }) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const pendingNativeOAuthRef = useRef<{
    resolve: () => void;
    reject: (e: unknown) => void;
    timeoutId: number;
  } | null>(null);

  useEffect(() => {
    const client = supabase;
    if (!client) return;
    if (!Capacitor.isNativePlatform()) return;

    let removed = false;
    let handle: { remove: () => Promise<void> | void } | undefined;

    const verifierKey = `${AUTH_STORAGE_KEY}-code-verifier`;

    const settlePending = (result: { ok: true } | { ok: false; error: unknown }) => {
      const pending = pendingNativeOAuthRef.current;
      if (!pending) return;
      pendingNativeOAuthRef.current = null;
      window.clearTimeout(pending.timeoutId);
      if (result.ok) pending.resolve();
      else pending.reject(result.error);
    };

    const handleOAuthCallbackUrl = async (url: string) => {
      if (typeof url !== "string") return;
      if (!url.startsWith("aimry://")) return;
      if (!url.startsWith("aimry://auth/callback")) return;

      let code: string | null = null;
      try {
        code = new URL(url).searchParams.get("code");
      } catch {
        code = null;
      }

      if (!code) {
        settlePending({ ok: false, error: new Error("OAuth callbackにcodeが見つかりませんでした") });
        return;
      }

      // デバッグ用（code_verifier が取れているか）
      try {
        const verifier = await (client as any).auth?.storage?.getItem?.(verifierKey);
        const isDev = Boolean((import.meta as any)?.env?.DEV);
        if (isDev) {
          console.log("[OAuth] callback url:", url);
          console.log("[OAuth] auth code length:", code.length);
          console.log("[OAuth] code_verifier exists:", typeof verifier === "string" && verifier.length > 0);
        }
      } catch {
        // ignore
      }

      try {
        const [{ Browser }, { error }] = await Promise.all([
          import("@capacitor/browser"),
          client.auth.exchangeCodeForSession(code),
        ]);

        try {
          await Browser.close();
        } catch {
          // ignore
        }

        if (error) {
          settlePending({ ok: false, error });
          return;
        }
        settlePending({ ok: true });
      } catch (e) {
        settlePending({ ok: false, error: e });
      }
    };

    const start = async () => {
      const { App } = await import("@capacitor/app");

      // cold start の deep link も拾う
      try {
        const launch = await App.getLaunchUrl();
        if (launch?.url) await handleOAuthCallbackUrl(launch.url);
      } catch {
        // ignore
      }

      handle = await App.addListener("appUrlOpen", async ({ url }) => {
        await handleOAuthCallbackUrl(url);
      });
    };

    void start();

    return () => {
      removed = true;
      if (removed) {
        try {
          void handle?.remove();
        } catch {
          // ignore
        }
      }
    };
  }, []);

  useEffect(() => {
    if (!supabase) {
      setIsLoading(false);
      return;
    }

    supabase.auth
      .getSession()
      .then(({ data, error }) => {
        if (error) throw error;
        setSession(data.session);
      })
      .finally(() => setIsLoading(false));

    const { data: subscription } = supabase.auth.onAuthStateChange(
      (_event, newSession) => {
        setSession(newSession);
      }
    );

    return () => subscription.subscription.unsubscribe();
  }, []);

  const value = useMemo<AuthContextValue>(() => {
    const user = session?.user ?? null;

    return {
      session,
      user,
      isLoading,
      signInWithPassword: async ({ email, password }) => {
        if (!supabase) throw new Error("Supabaseが未設定です (.env) を確認してください");
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
      },
      signInWithGoogle: async () => {
        if (!supabase) throw new Error("Supabaseが未設定です (.env) を確認してください");

        // Webは /auth/callback（パス）で受けてからHashへ戻す
        // iOS（Capacitor）は deep link でアプリへ戻し、そこでcode交換する
        const isNative = Capacitor.isNativePlatform();

        if (!isNative) {
          const redirectTo = `${window.location.origin}/auth/callback`;
          const { error } = await supabase.auth.signInWithOAuth({
            provider: "google",
            options: { redirectTo },
          });
          if (error) throw error;
          return;
        }

        // iOS deep link (Info.plistでaimryスキームを登録)
        const redirectTo = `aimry://auth/callback`;

        const verifierKey = `${AUTH_STORAGE_KEY}-code-verifier`;

        // 以前の試行の残骸があると不整合になりやすいので削除
        try {
          await (supabase as any).auth?.storage?.removeItem?.(verifierKey);
        } catch {
          // ignore
        }

        const { data, error } = await supabase.auth.signInWithOAuth({
          provider: "google",
          options: {
            redirectTo,
            skipBrowserRedirect: true,
          },
        });
        if (error) throw error;
        if (!data?.url) throw new Error("GoogleログインURLの取得に失敗しました");

        // PKCE の code_verifier が保存できていないと、このあと必ず invalid flow state になる
        try {
          const verifier = await (supabase as any).auth?.storage?.getItem?.(verifierKey);
          if (typeof verifier !== "string" || verifier.length === 0) {
            throw new Error(
              "PKCEのcode_verifierを保存できませんでした（Preferences/localStorage）。cap sync ios と Preferencesプラグインを確認してください。"
            );
          }
        } catch (e) {
          throw e instanceof Error ? e : new Error("PKCEの準備に失敗しました");
        }

        const [{ Browser }] = await Promise.all([
          import("@capacitor/browser"),
        ]);

        // deep link での code 交換は AuthProvider 側の常駐リスナーが担当
        await new Promise<void>((resolve, reject) => {
          const timeoutId = window.setTimeout(() => {
            pendingNativeOAuthRef.current = null;
            reject(new Error("Googleログインがタイムアウトしました"));
          }, 2 * 60 * 1000);

          pendingNativeOAuthRef.current = { resolve, reject, timeoutId };

          void Browser.open({ url: data.url }).catch((e) => {
            window.clearTimeout(timeoutId);
            pendingNativeOAuthRef.current = null;
            reject(e);
          });
        });
      },
      signUpWithPassword: async ({ email, password }) => {
        if (!supabase) throw new Error("Supabaseが未設定です (.env) を確認してください");
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) throw error;
      },
      signOut: async () => {
        if (!supabase) return;
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
      },
    };
  }, [session, isLoading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}
