import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function AuthCallbackPage() {
  const [message, setMessage] = useState("ログイン処理中...");

  useEffect(() => {
    const run = async () => {
      try {
        if (!supabase) throw new Error("Supabaseが未設定です (.env) を確認してください");

        // Google OAuthのcodeをセッションへ交換
        const { error } = await supabase.auth.exchangeCodeForSession(window.location.href);
        if (error) throw error;

        setMessage("ログインしました。画面を移動します...");

        // Hash Routerに戻す
        window.location.replace(`${window.location.origin}/#/`);
      } catch (e) {
        const text = e instanceof Error ? e.message : "ログインに失敗しました";
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
