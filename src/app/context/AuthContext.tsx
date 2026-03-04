import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useRef,
  type ReactNode,
} from "react";
import type { EmailOtpType, Session, User } from "@supabase/supabase-js";
import { AUTH_STORAGE_KEY, supabase } from "../lib/supabaseClient";
import { Capacitor } from "@capacitor/core";

type AuthContextValue = {
  session: Session | null;
  user: User | null;
  isLoading: boolean;
  signInWithPassword: (args: { email: string; password: string }) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signInWithApple: () => Promise<void>;
  signUpWithPassword: (args: { email: string; password: string }) => Promise<void>;
  resendSignUpConfirmation: (args: { email: string }) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

function getSupabaseProjectRef(): string | null {
  const rawUrl = import.meta.env.VITE_SUPABASE_URL;
  if (typeof rawUrl !== "string" || rawUrl.length === 0) return null;

  try {
    const hostname = new URL(rawUrl).hostname;
    const [projectRef] = hostname.split(".");
    return projectRef || null;
  } catch {
    return null;
  }
}

function toFriendlyOAuthError(error: unknown, providerLabel: string): Error {
  if (!(error instanceof Error)) {
    return new Error(`${providerLabel}ログインに失敗しました`);
  }

  const message = error.message.toLowerCase();
  const unsupportedProvider =
    message.includes("unsupported provider") ||
    message.includes("provider is not enabled");
  const exchangeFailed =
    message.includes("unable to exchange external code") ||
    message.includes("unexpected_failure");

  if (unsupportedProvider) {
    const projectRef = getSupabaseProjectRef();
    const projectText = projectRef
      ? `（project ref: ${projectRef}）`
      : "";

    return new Error(
      `${providerLabel}ログインが未有効です。Supabaseの Authentication > Providers > ${providerLabel} を有効化し、Client ID / Secret を保存してください ${projectText}`.trim()
    );
  }

  if (exchangeFailed) {
    const projectRef = getSupabaseProjectRef();
    const projectText = projectRef
      ? `（project ref: ${projectRef}）`
      : "";

    return new Error(
      `${providerLabel}ログインのコード交換に失敗しました。Supabaseの${providerLabel}設定で Client ID（Services ID）/ Secret(JWT) / Return URL を再確認してください ${projectText}`.trim()
    );
  }

  return error;
}

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
      const isAimryScheme = url.startsWith("aimry://auth/callback") || url.startsWith("aimry-app://auth/callback");
      if (!isAimryScheme) return;

      let parsed: URL | null = null;
      try {
        parsed = new URL(url);
      } catch {
        parsed = null;
      }

      if (!parsed) {
        settlePending({ ok: false, error: new Error("認証コールバックURLの解析に失敗しました") });
        return;
      }

      const hashParams = new URLSearchParams(parsed.hash.startsWith("#") ? parsed.hash.slice(1) : parsed.hash);
      const getParam = (name: string): string | null => {
        return parsed.searchParams.get(name) ?? hashParams.get(name);
      };

      const oauthError = getParam("error") ?? getParam("error_code");
      const oauthErrorDescription = getParam("error_description");
      if (oauthError) {
        const decodedDescription = oauthErrorDescription
          ? decodeURIComponent(oauthErrorDescription)
          : "OAuth認証でエラーが発生しました";
        settlePending({
          ok: false,
          error: new Error(`${oauthError}: ${decodedDescription}`),
        });
        return;
      }

      const accessToken = hashParams.get("access_token");
      const refreshToken = hashParams.get("refresh_token");
      if (accessToken && refreshToken) {
        try {
          const [{ Browser }, { error }] = await Promise.all([
            import("@capacitor/browser"),
            client.auth.setSession({ access_token: accessToken, refresh_token: refreshToken }),
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
          return;
        } catch (e) {
          settlePending({ ok: false, error: e });
          return;
        }
      }

      const tokenHash = getParam("token_hash");
      const typeParam = getParam("type");
      if (tokenHash && typeParam) {
        try {
          const otpType = typeParam as EmailOtpType;
          const [{ Browser }, { error }] = await Promise.all([
            import("@capacitor/browser"),
            client.auth.verifyOtp({ token_hash: tokenHash, type: otpType }),
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
          return;
        } catch (e) {
          settlePending({ ok: false, error: e });
          return;
        }
      }

      let code: string | null = null;
      try {
        code = getParam("code");
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
    const signInWithOAuthProvider = async (
      provider: "google" | "apple",
      providerLabel: string
    ) => {
      if (!supabase) throw new Error("Supabaseが未設定です (.env) を確認してください");

      const isNative = Capacitor.isNativePlatform();

      if (!isNative) {
        const redirectTo = `${window.location.origin}/auth/callback`;
        const { error } = await supabase.auth.signInWithOAuth({
          provider,
          options: { redirectTo },
        });
        if (error) throw toFriendlyOAuthError(error, providerLabel);
        return;
      }

      const redirectTo = `aimry://auth/callback`;
      const verifierKey = `${AUTH_STORAGE_KEY}-code-verifier`;

      try {
        await (supabase as any).auth?.storage?.removeItem?.(verifierKey);
      } catch {
        // ignore
      }

      const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo,
          skipBrowserRedirect: true,
        },
      });
      if (error) throw toFriendlyOAuthError(error, providerLabel);
      if (!data?.url) throw new Error(`${providerLabel}ログインURLの取得に失敗しました`);

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

      try {
        await new Promise<void>((resolve, reject) => {
          const timeoutId = window.setTimeout(() => {
            pendingNativeOAuthRef.current = null;
            reject(new Error(`${providerLabel}ログインがタイムアウトしました`));
          }, 2 * 60 * 1000);

          pendingNativeOAuthRef.current = { resolve, reject, timeoutId };

          void Browser.open({ url: data.url }).catch((e) => {
            window.clearTimeout(timeoutId);
            pendingNativeOAuthRef.current = null;
            reject(e);
          });
        });
      } catch (e) {
        throw toFriendlyOAuthError(e, providerLabel);
      }
    };

    return {
      session,
      user,
      isLoading,
      signInWithPassword: async ({ email, password }) => {
        if (!supabase) throw new Error("Supabaseが未設定です (.env) を確認してください");
        const normalizedEmail = email.trim().toLowerCase();
        if (!normalizedEmail) throw new Error("メールアドレスを入力してください");
        const { error } = await supabase.auth.signInWithPassword({
          email: normalizedEmail,
          password,
        });
        if (error) throw error;
      },
      signInWithGoogle: async () => {
        await signInWithOAuthProvider("google", "Google");
      },
      signInWithApple: async () => {
        await signInWithOAuthProvider("apple", "Apple");
      },
      signUpWithPassword: async ({ email, password }) => {
        if (!supabase) throw new Error("Supabaseが未設定です (.env) を確認してください");
        const normalizedEmail = email.trim().toLowerCase();
        if (!normalizedEmail) throw new Error("メールアドレスを入力してください");
        const redirectTo = Capacitor.isNativePlatform()
          ? "aimry://auth/callback"
          : `${window.location.origin}/auth/callback`;
        const { error } = await supabase.auth.signUp({
          email: normalizedEmail,
          password,
          options: {
            emailRedirectTo: redirectTo,
          },
        });
        if (error) throw error;
      },
      resendSignUpConfirmation: async ({ email }) => {
        if (!supabase) throw new Error("Supabaseが未設定です (.env) を確認してください");
        const normalizedEmail = email.trim().toLowerCase();
        if (!normalizedEmail) throw new Error("メールアドレスを入力してください");
        const emailRedirectTo = Capacitor.isNativePlatform()
          ? "aimry://auth/callback"
          : `${window.location.origin}/auth/callback`;
        const { error } = await supabase.auth.resend({
          type: "signup",
          email: normalizedEmail,
          options: {
            emailRedirectTo,
          },
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
