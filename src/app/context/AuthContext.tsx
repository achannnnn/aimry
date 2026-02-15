import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "../lib/supabaseClient";
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

        const { data, error } = await supabase.auth.signInWithOAuth({
          provider: "google",
          options: {
            redirectTo,
            skipBrowserRedirect: true,
          },
        });
        if (error) throw error;
        if (!data?.url) throw new Error("GoogleログインURLの取得に失敗しました");

        const [{ Browser }, { App }] = await Promise.all([
          import("@capacitor/browser"),
          import("@capacitor/app"),
        ]);

        await new Promise<void>((resolve, reject) => {
          let isDone = false;
          let timeoutId: number | undefined;

          const cleanup = (handle?: { remove: () => Promise<void> | void }) => {
            if (timeoutId) window.clearTimeout(timeoutId);
            void handle?.remove();
          };

          const start = async () => {
            const handle = await App.addListener("appUrlOpen", async ({ url }) => {
              if (isDone) return;
              if (typeof url !== "string") return;
              if (!url.startsWith("aimry://")) return;

              isDone = true;
              cleanup(handle);
              try {
                await Browser.close();
              } catch {
                // ignore
              }

              const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(url);
              if (exchangeError) {
                reject(exchangeError);
                return;
              }
              resolve();
            });

            timeoutId = window.setTimeout(() => {
              if (isDone) return;
              isDone = true;
              cleanup(handle);
              reject(new Error("Googleログインがタイムアウトしました"));
            }, 2 * 60 * 1000);

            await Browser.open({ url: data.url });
          };

          void start().catch((e) => {
            if (isDone) return;
            isDone = true;
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
