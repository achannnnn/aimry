import { useEffect, useState } from "react";
import { toast } from "sonner";
import { supabase } from "../lib/supabaseClient";

export default function AuthCallbackPage() {
  const [message, setMessage] = useState("ログイン処理中...");

  const toFriendlyAuthCallbackError = (error: unknown): string => {
    if (!(error instanceof Error)) return "ログインに失敗しました";
    const message = error.message.toLowerCase();
    const exchangeFailed =
      message.includes("unable to exchange external code") ||
      message.includes("unexpected_failure") ||
      message.includes("server_error");

    if (exchangeFailed) {
      return "Appleログインのコード交換に失敗しました。SupabaseのApple設定で Client ID（Services ID）/ Secret(JWT) / Return URL を再確認してください";
    }

    return error.message;
  };

  useEffect(() => {
    const run = async () => {
      try {
        if (!supabase) throw new Error("Supabaseが未設定です (.env) を確認してください");

        let code: string | null = null;
        let oauthError: string | null = null;
        let oauthErrorDescription: string | null = null;
        try {
          const parsed = new URL(window.location.href);
          const hashParams = new URLSearchParams(
            parsed.hash.startsWith("#") ? parsed.hash.slice(1) : parsed.hash
          );
          const getParam = (name: string) => parsed.searchParams.get(name) ?? hashParams.get(name);

          code = getParam("code");
          oauthError = getParam("error") ?? getParam("error_code");
          oauthErrorDescription = getParam("error_description");
        } catch {
          code = null;
        }

        if (oauthError) {
          const decodedDescription = oauthErrorDescription
            ? decodeURIComponent(oauthErrorDescription)
            : "OAuth認証でエラーが発生しました";
          throw new Error(`${oauthError}: ${decodedDescription}`);
        }

        if (!code) {
          toast.error("認証コードが見つかりませんでした");
          window.location.replace(`${window.location.origin}/#/login`);
          return;
        }

        const { error } = await supabase.auth.exchangeCodeForSession(code);
        if (error) throw error;

        setMessage("ログインしました。画面を移動します...");

        // Hash Routerに戻す
        window.location.replace(`${window.location.origin}/#/`);
      } catch (e) {
        const text = toFriendlyAuthCallbackError(e);
        setMessage(text);
        // Hash Router側へ戻す（ログイン画面）
        setTimeout(() => {
          window.location.replace(`${window.location.origin}/#/login`);
        }, 1200);
      }
    };

    void run();
  }, []);

  return (
    <div className="min-h-screen bg-[#f6fdff] flex items-center justify-center px-[20px]">
      <p className="text-[#3c9095] text-[14px]">{message}</p>
    </div>
  );
}
