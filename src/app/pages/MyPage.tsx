import { useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";
import { toast } from "sonner";
import { useGoals } from "../context/GoalsContext";
import svgPaths from "../../imports/svg-7ok64xb6pf";
import accountSvgPaths from "../../imports/svg-d3j7tv267w";
import buttonSvgPaths from "../../imports/svg-u9rb50ca62";
import ScaledHeaderBackground from "../components/ScaledHeaderBackground";
import FloatingActionButton from "../components/FloatingActionButton";
import { isGoalCompleted } from "../lib/goalProgress";

function HorseAvatar({ size = 52 }: { size?: number }) {
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <div className="absolute inset-[-1.92%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
          <g>
            <circle cx="27" cy="27" fill="var(--fill-0, #F6FDFF)" r="26" stroke="var(--stroke-0, #4CAEAC)" strokeWidth="2" />
            <g>
              <path d={svgPaths.p21065480} fill="var(--fill-0, #B28247)" />
              <g>
                <path d={svgPaths.p1f589700} fill="var(--fill-0, #1A0B08)" />
                <path d={svgPaths.p2cc29b00} fill="var(--fill-0, #1A0B08)" />
                <path d={svgPaths.p178c5600} fill="var(--fill-0, #231815)" />
                <ellipse cx="20.1064" cy="31.6717" fill="var(--fill-0, #6A3906)" rx="1.41143" ry="1.56826" />
                <ellipse cx="34.2833" cy="31.672" fill="var(--fill-0, #6A3906)" rx="1.41174" ry="1.5686" />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function MyPage() {
  const navigate = useNavigate();
  const { goals, deleteGoal } = useGoals();

  const completedGoalsCount = goals.filter((goal) => isGoalCompleted(goal)).length;
  const totalGoalsCount = goals.length;
  const currentYear = new Date().getFullYear();

  const handleResetLocalData = async () => {
    if (!window.confirm("保存中の目標データをすべて削除しますか？")) return;

    try {
      await Promise.all(goals.map((goal) => deleteGoal(goal.id)));
      toast.success("目標データをリセットしました");
    } catch (e) {
      console.error(e);
      toast.error("データのリセットに失敗しました");
    }
  };

  return (
    <div className="min-h-screen bg-[#f6fdff] relative">
      <div className="absolute h-[227px] left-0 overflow-clip -top-[41px] w-full z-20">
        <ScaledHeaderBackground pathD={accountSvgPaths.p10ee0e00} />

        <button
          onClick={() => navigate("/")}
          className="absolute left-[32px] top-[120px] z-30"
          aria-label="戻る"
        >
          <ChevronLeft className="size-[24px] text-white" />
        </button>

        <p className="absolute font-['Nunito_Sans_7pt_SemiExpanded:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[20px] left-1/2 -translate-x-1/2 text-[16px] text-center text-white top-[120px] tracking-[0.064px] z-30" style={{ fontVariationSettings: "'wght' 700" }}>
          マイページ
        </p>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 top-[200px] w-[343px]">
        <div className="bg-white rounded-[8px] shadow-[0px_1px_4px_0px_#e6f9fd,0px_1px_4px_0px_#e6f9fd] relative overflow-clip pb-[18px] pt-[35px] px-[22px]">
          <div className="flex flex-col gap-[4px] items-center mb-[11px]">
            <div className="shrink-0">
              <HorseAvatar size={52} />
            </div>
            <p className="font-['Montserrat:Medium',sans-serif] leading-[20px] text-[#3c9095] text-[16px] text-center tracking-[0.064px]">
              {currentYear}
            </p>
          </div>

          <div className="flex gap-[27px] items-center justify-center">
            <div className="font-['Nunito_Sans_7pt_SemiExpanded:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] text-[#3c9095] text-[18px] tracking-[0.072px]" style={{ fontVariationSettings: "'wght' 700" }}>
              <p className="mb-0">あなたが</p>
              <p>達成した目標数</p>
            </div>

            <div className="flex gap-[6px] items-end">
              <p className="font-['Nunito_Sans_7pt_SemiExpanded:Bold',sans-serif] leading-none text-[#ec7a77] text-[61px] tracking-[0.244px]">
                {completedGoalsCount}
              </p>
              <div className="pb-[7px]">
                <p className="font-['Nunito_Sans_7pt_SemiExpanded:Bold',sans-serif] leading-[0] text-[#3c9095] text-[31px] tracking-[0.124px]">
                  <span className="leading-none">/</span>
                  <span className="leading-none tracking-[-2.656px]"> </span>
                  <span className="leading-none">{totalGoalsCount}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="absolute left-[-5.88px] top-[-5.26px] w-[343px] h-[60px] pointer-events-none">
            <div className="absolute flex items-center justify-center left-[62.87px] size-[15.52px] top-[-5.26px]">
              <div className="flex-none rotate-[-41.09deg]">
                <div className="bg-[#ec7a77] size-[11px]" />
              </div>
            </div>

            <div className="absolute flex items-center justify-center left-[314.38px] size-[13.66px] top-[35.11px]">
              <div className="-rotate-60 flex-none">
                <div className="bg-[#77a2ec] size-[10px]" />
              </div>
            </div>

            <div className="absolute flex items-center justify-center left-[127.16px] size-[13.472px] top-[18.02px]">
              <div className="-rotate-15 flex-none">
                <div className="bg-[#ec7a77] size-[11px]" />
              </div>
            </div>

            <div className="absolute flex items-center justify-center left-[244.9px] size-[13.472px] top-[-2.24px]">
              <div className="flex-none rotate-15">
                <div className="bg-[#77a2ec] size-[11px]" />
              </div>
            </div>

            <div className="absolute flex items-center justify-center left-[-5.88px] size-[15.026px] top-[19.99px]">
              <div className="-rotate-30 flex-none">
                <div className="bg-[#3c9095] size-[11px]" />
              </div>
            </div>

            <div className="absolute flex items-center justify-center left-[282.12px] size-[10.928px] top-[51.49px]">
              <div className="-rotate-30 flex-none">
                <div className="bg-[#3c9095] size-[8px]" />
              </div>
            </div>

            <div className="absolute flex items-center justify-center left-[295.13px] size-[12.728px] top-[-1px]">
              <div className="flex-none rotate-45">
                <div className="bg-[#ecea77] size-[9px]" />
              </div>
            </div>
          </div>

          <div className="absolute h-[15px] right-[-0.5px] bottom-0 w-[14px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 15">
              <path d={accountSvgPaths.p2b842280} fill="#238B8A" />
            </svg>
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 top-[438px] w-[343px] flex flex-col gap-[24px]">
        <div className="bg-white rounded-[8px] shadow-[0px_1px_4px_0px_#e6f9fd,0px_1px_4px_0px_#e6f9fd] p-[16px] relative">
          <div className="flex flex-col gap-[4px]">
            <div className="flex gap-[6px] items-center">
              <div className="size-[18px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                  <mask height="18" id="mask0_mode" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
                    <rect fill="#D9D9D9" height="18" width="18" />
                  </mask>
                  <g mask="url(#mask0_mode)">
                    <path d={buttonSvgPaths.p204a1780} fill="#3C9095" />
                  </g>
                </svg>
              </div>
              <p className="font-['Nunito_Sans_7pt_SemiExpanded:SemiBold','Noto_Sans_JP:Bold',sans-serif] leading-[20px] text-[#3c9095] text-[16px] tracking-[0.016px]" style={{ fontVariationSettings: "'wght' 700" }}>
                利用モード
              </p>
            </div>

            <div className="h-[35px] flex items-center py-[12px]">
              <p className="font-['Nunito_Sans_7pt_SemiExpanded:Medium',sans-serif] leading-[20px] text-[#3c9095] text-[14px] tracking-[0.014px]" style={{ fontVariationSettings: "'wght' 500" }}>
                ログイン不要モード（この端末に保存）
              </p>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 size-[13px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
              <path d={accountSvgPaths.p3cb9f280} fill="#238B8A" />
            </svg>
          </div>
        </div>

        <button
          type="button"
          onClick={handleResetLocalData}
          className="relative bg-white rounded-[8px] shadow-[0px_1px_4px_0px_#e6f9fd,0px_1px_4px_0px_#e6f9fd] px-[24px] py-[16px] hover:shadow-lg transition-all"
        >
          <p className="font-['Hiragino_Kaku_Gothic_Pro:W6',sans-serif] leading-[20px] text-[#ff1414] text-[16px] text-center tracking-[0.016px]">
            目標データをリセットする
          </p>

          <div className="absolute h-[14px] right-0 bottom-0 w-[15px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14">
              <path d={accountSvgPaths.p218d5f00} fill="#FF1414" />
            </svg>
          </div>
        </button>

        <a
          href="https://portfolio.a-chan--blog.com/aimry-support/"
          target="_blank"
          rel="noreferrer"
          className="text-center text-[14px] text-[#238b8a] underline underline-offset-4"
        >
          サポート/お問い合わせ
        </a>
      </div>

      <FloatingActionButton onClick={() => navigate("/")} ariaLabel="目標一覧へ">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path
            d="M5.33167 25.3254V13.3291C5.33167 12.907 5.42608 12.5072 5.61491 12.1295C5.80374 11.7518 6.06477 11.4408 6.398 11.1965L14.3955 5.19833C14.862 4.84288 15.3952 4.66516 15.995 4.66516C16.5948 4.66516 17.128 4.84288 17.5945 5.19833L25.592 11.1965C25.9252 11.4408 26.1863 11.7518 26.3751 12.1295C26.5639 12.5072 26.6583 12.907 26.6583 13.3291V25.3254C26.6583 26.0585 26.3973 26.6861 25.8752 27.2081C25.3532 27.7302 24.7256 27.9912 23.9925 27.9912H19.9937C19.6161 27.9912 19.2995 27.8635 19.044 27.608C18.7886 27.3525 18.6608 27.0359 18.6608 26.6583V19.9937C18.6608 19.616 18.5331 19.2995 18.2776 19.044C18.0221 18.7885 17.7056 18.6608 17.3279 18.6608H14.6621C14.2844 18.6608 13.9679 18.7885 13.7124 19.044C13.4569 19.2995 13.3292 19.616 13.3292 19.9937V26.6583C13.3292 27.0359 13.2014 27.3525 12.946 27.608C12.6905 27.8635 12.3739 27.9912 11.9962 27.9912H7.9975C7.26439 27.9912 6.63681 27.7302 6.11475 27.2081C5.59269 26.6861 5.33167 26.0585 5.33167 25.3254Z"
            fill="white"
          />
        </svg>
      </FloatingActionButton>
    </div>
  );
}
