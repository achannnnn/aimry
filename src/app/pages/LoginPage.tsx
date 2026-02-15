import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import headerSvgPaths from "../../imports/svg-gsx8rnllhe";
import buttonSvgPaths from "../../imports/svg-u9rb50ca62";
import { useAuth } from "../context/AuthContext";
import ScaledHeaderBackground from "../components/ScaledHeaderBackground";

type FormData = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const navigate = useNavigate();
  const { user, signInWithPassword, signInWithGoogle } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGoogleSubmitting, setIsGoogleSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await signInWithPassword({ email: data.email, password: data.password });
      navigate("/");
    } catch (e) {
      console.error(e);
      const message = e instanceof Error ? e.message : "ログインに失敗しました";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsGoogleSubmitting(true);
    try {
      await signInWithGoogle();
      // signInWithOAuthは通常ここでリダイレクトするため、navigateは不要
    } catch (e) {
      console.error(e);
      const message = e instanceof Error ? e.message : "Googleログインに失敗しました";
      toast.error(message);
      setIsGoogleSubmitting(false);
    }
  };

  const handleForgotPassword = () => {
    // TODO: パスワードリセット処理
    console.log("Forgot password");
    alert("パスワードリセット機能は実装中です");
  };

  return (
    <div className="min-h-screen bg-[#f6fdff]">
      {/* ヘッダー */}
      <div className="absolute h-[227px] left-0 opacity-90 overflow-clip top-0 w-full z-20">
        <ScaledHeaderBackground pathD={headerSvgPaths.p10ee0e00} />

        <p className="absolute font-['Nunito_Sans_7pt_SemiExpanded:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[20px] left-1/2 -translate-x-1/2 text-[16px] text-center text-white top-[90px] tracking-[0.064px] z-30" style={{ fontVariationSettings: "'wght' 700" }}>
          ログイン
        </p>
      </div>

      {/* メインコンテンツ */}
      <div className="absolute left-[16px] top-[200px] w-[343px]">
        <div className="flex flex-col gap-[20px]">
          {/* フォームカード */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-white rounded-[8px] shadow-[0px_1px_4px_0px_#e6f9fd,0px_1px_4px_0px_#e6f9fd] p-[16px] relative mb-[20px]">
              <div className="flex flex-col gap-[24px]">
                {/* メールアドレス */}
                <div className="flex flex-col gap-[4px]">
                  <div className="flex gap-[6px] items-center">
                    <div className="size-[18px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <mask height="18" id="mask0_mail" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
                          <rect fill="#D9D9D9" height="18" width="18" />
                        </mask>
                        <g mask="url(#mask0_mail)">
                          <path d={buttonSvgPaths.p204a1780} fill="#3C9095" />
                        </g>
                      </svg>
                    </div>
                    <p className="font-['Nunito_Sans_7pt_SemiExpanded:SemiBold','Noto_Sans_JP:Bold',sans-serif] leading-[20px] text-[#3c9095] text-[16px] tracking-[0.016px]" style={{ fontVariationSettings: "'wght' 700" }}>
                      メールアドレス
                    </p>
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      {...register("email", {
                        required: "メールアドレスを入力してください",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "有効なメールアドレスを入力してください",
                        },
                      })}
                      placeholder="メールアドレスを入力してください"
                      className="w-full h-[35px] font-['Nunito_Sans_7pt_SemiExpanded:Medium',sans-serif] text-[#3c9095] text-[14px] tracking-[0.014px] border-b-2 border-[#eaeaea] focus:border-[#3c9095] outline-none transition-colors py-[12px]"
                      style={{ fontVariationSettings: "'wght' 500" }}
                    />
                    {errors.email && (
                      <p className="text-[#ff1414] text-[12px] mt-[4px]">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* パスワード */}
                <div className="flex flex-col gap-[4px]">
                  <div className="flex gap-[6px] items-center">
                    <div className="size-[18px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <mask height="18" id="mask0_lock" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
                          <rect fill="#D9D9D9" height="18" width="18" />
                        </mask>
                        <g mask="url(#mask0_lock)">
                          <path d={buttonSvgPaths.p36776b00} fill="#3C9095" />
                        </g>
                      </svg>
                    </div>
                    <p className="font-['Nunito_Sans_7pt_SemiExpanded:SemiBold','Noto_Sans_JP:Bold',sans-serif] leading-[20px] text-[#3c9095] text-[16px] tracking-[0.016px]" style={{ fontVariationSettings: "'wght' 700" }}>
                      パスワード
                    </p>
                  </div>

                  <div className="relative">
                    <input
                      type="password"
                      {...register("password", {
                        required: "パスワードを入力してください",
                        minLength: {
                          value: 8,
                          message: "パスワードは8文字以上で入力してください",
                        },
                      })}
                      placeholder="パスワードを入力してください"
                      className="w-full h-[35px] font-['Nunito_Sans_7pt_SemiExpanded:Medium',sans-serif] text-[#3c9095] text-[14px] tracking-[0.014px] border-b-2 border-[#eaeaea] focus:border-[#3c9095] outline-none transition-colors py-[12px]"
                      style={{ fontVariationSettings: "'wght' 500" }}
                    />
                    {errors.password && (
                      <p className="text-[#ff1414] text-[12px] mt-[4px]">{errors.password.message}</p>
                    )}
                  </div>

                  <p className="font-['Nunito_Sans_7pt_SemiExpanded:Light','Noto_Sans:Light','Noto_Sans_JP:Light',sans-serif] leading-[16px] text-[#7b7b7b] text-[12px] tracking-[0.06px] mt-[2px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300" }}>
                    ※パスワードは8文字以上で入力してください
                  </p>
                </div>
              </div>

              {/* 右下の三角形装飾 */}
              <div className="absolute right-0 bottom-0 size-[13px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                  <path d={buttonSvgPaths.p3cb9f280} fill="#238B8A" />
                </svg>
              </div>
            </div>

            {/* ログインボタン */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="relative bg-white rounded-[8px] shadow-[0px_1px_4px_0px_#e6f9fd,0px_1px_4px_0px_#e6f9fd] px-[24px] py-[16px] flex items-center justify-center gap-[6px] w-full hover:shadow-lg transition-all disabled:opacity-50"
            >
              <div className="size-[24px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <mask height="24" id="mask0_logout" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
                    <rect fill="#D9D9D9" height="24" width="24" />
                  </mask>
                  <g mask="url(#mask0_logout)">
                    <path d={headerSvgPaths.p3befe700} fill="#3C9095" />
                  </g>
                </svg>
              </div>
              <p className="font-['Nunito_Sans_7pt_SemiExpanded:SemiBold','Noto_Sans_JP:Bold',sans-serif] leading-[20px] text-[#3c9095] text-[16px] text-center tracking-[0.016px]" style={{ fontVariationSettings: "'wght' 700" }}>
                {isSubmitting ? "ログイン中..." : "ログイン"}
              </p>

              {/* 右下の三角形装飾 */}
              <div className="absolute h-[14px] right-0 bottom-0 w-[15px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14">
                  <path d={buttonSvgPaths.p218d5f00} fill="#3C9095" />
                </svg>
              </div>
            </button>
          </form>

          {/* パスワードを忘れた方 */}
          <button
            type="button"
            onClick={handleForgotPassword}
            className="font-['Nunito_Sans_7pt_SemiExpanded:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] text-[#3c9095] text-[16px] text-center tracking-[0.016px] hover:underline"
            style={{ fontVariationSettings: "'wght' 400" }}
          >
            パスワードを忘れた方
          </button>
        </div>

        {/* 区切り線 */}
        <div className="relative mt-[16px] mb-[16px]">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-2 border-[#eaeaea]"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-[#f6fdff] px-[10px] py-[10px] font-['Nunito_Sans_7pt_SemiExpanded:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#3c9095] text-[12px] text-center tracking-[0.012px]" style={{ fontVariationSettings: "'wght' 400" }}>
              または
            </span>
          </div>
        </div>

        {/* Googleログインボタン */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={isGoogleSubmitting}
          className="relative bg-white rounded-[8px] border border-[#e9e9e9] px-[10px] py-[10px] flex items-center justify-center gap-[10px] w-full hover:bg-gray-50 transition-colors"
        >
          <div className="absolute left-[14px] size-[14px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <g clipPath="url(#clip0_google)">
                <path d={buttonSvgPaths.p3b110000} fill="#4285F4" />
                <path d={buttonSvgPaths.p1f8d6680} fill="#34A853" />
                <path d={buttonSvgPaths.p830c2c0} fill="#FBBC05" />
                <path d={buttonSvgPaths.p36b3e900} fill="#EB4335" />
              </g>
              <defs>
                <clipPath id="clip0_google">
                  <rect fill="white" height="14" width="14" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className="font-['Nunito_Sans_7pt_SemiExpanded:SemiBold','Noto_Sans_JP:Bold',sans-serif] leading-[20px] text-[#9c9c9c] text-[16px] text-center tracking-[0.016px]" style={{ fontVariationSettings: "'wght' 700" }}>
            {isGoogleSubmitting ? "Googleに移動中..." : "Googleでログイン"}
          </p>
        </button>
      </div>
    </div>
  );
}
