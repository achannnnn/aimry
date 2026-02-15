import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";
import { toast } from "sonner";
import { useGoals } from "../context/GoalsContext";
import { useAuth } from "../context/AuthContext";
import svgPaths from "../../imports/svg-7ok64xb6pf";
import accountSvgPaths from "../../imports/svg-d3j7tv267w";
import buttonSvgPaths from "../../imports/svg-u9rb50ca62";

// 午（馬） - 2026
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

export default function AccountInfoPage() {
  const navigate = useNavigate();
  const { goals } = useGoals();
  const { user, signOut } = useAuth();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  // 達成した目標数を計算（全年度）
  const completedGoalsCount = goals.filter((goal) => goal.progress >= goal.target).length;
  const totalGoalsCount = goals.length;

  const userEmail = user?.email ?? "";
  const currentYear = 2026;

  const handleLogout = async () => {
    try {
      await signOut();
      toast.success("ログアウトしました");
      navigate("/login");
    } catch (e) {
      console.error(e);
      toast.error("ログアウトに失敗しました");
    }
  };

  const handleDeleteAccount = () => {
    // TODO: 実際のアカウント削除処理
    console.log("Delete account");
    if (window.confirm("本当にアカウントを削除しますか？この操作は取り消せません。")) {
      alert("アカウント削除機能は実装中です");
    }
  };

  return (
    <div className="min-h-screen bg-[#f6fdff] relative">
      {/* ヘッダー */}
      <div className="absolute h-[227px] left-0 opacity-90 overflow-clip top-0 w-full z-20">
        <div className="absolute h-[328px] left-[-40px] top-0 w-[456px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 456 328">
            <path d={accountSvgPaths.p10ee0e00} fill="#28858A" />
          </svg>
        </div>

        {/* 戻るボタン */}
        <button
          onClick={() => navigate("/")}
          className="absolute left-[32px] top-[90px] z-30"
          aria-label="戻る"
        >
          <ChevronLeft className="size-[24px] text-white" />
        </button>

        <p className="absolute font-['Nunito_Sans_7pt_SemiExpanded:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[20px] left-1/2 -translate-x-1/2 text-[16px] text-center text-white top-[90px] tracking-[0.064px] z-30" style={{ fontVariationSettings: "'wght' 700" }}>
          アカウント情報
        </p>
      </div>

      {/* 達成目標カード */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[210px] w-[343px]">
        <div className="bg-white rounded-[8px] shadow-[0px_1px_4px_0px_#e6f9fd,0px_1px_4px_0px_#e6f9fd] relative overflow-clip pb-[18px] pt-[35px] px-[22px]">
          {/* 干支アバター */}
          <div className="flex flex-col gap-[4px] items-center mb-[11px]">
            <div className="shrink-0">
              <HorseAvatar size={52} />
            </div>
            <p className="font-['Montserrat:Medium',sans-serif] leading-[20px] text-[#3c9095] text-[16px] text-center tracking-[0.064px]">
              {currentYear}
            </p>
          </div>

          {/* 達成数表示 */}
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
                  <span className="leading-none tracking-[-2.656px]">{` `}</span>
                  <span className="leading-none">{totalGoalsCount}</span>
                </p>
              </div>
            </div>
          </div>

          {/* カラフルな装飾の四角形 */}
          <div className="absolute left-[-5.88px] top-[-5.26px] w-[343px] h-[60px] pointer-events-none">
            {/* 赤い四角 - 大 */}
            <div className="absolute flex items-center justify-center left-[62.87px] size-[15.52px] top-[-5.26px]">
              <div className="flex-none rotate-[-41.09deg]">
                <div className="bg-[#ec7a77] size-[11px]" />
              </div>
            </div>
            
            {/* 青い四角 - 中 */}
            <div className="absolute flex items-center justify-center left-[314.38px] size-[13.66px] top-[35.11px]">
              <div className="-rotate-60 flex-none">
                <div className="bg-[#77a2ec] size-[10px]" />
              </div>
            </div>
            
            {/* 赤い四角 - 中 */}
            <div className="absolute flex items-center justify-center left-[127.16px] size-[13.472px] top-[18.02px]">
              <div className="-rotate-15 flex-none">
                <div className="bg-[#ec7a77] size-[11px]" />
              </div>
            </div>
            
            {/* 青い四角 - 中 */}
            <div className="absolute flex items-center justify-center left-[244.9px] size-[13.472px] top-[-2.24px]">
              <div className="flex-none rotate-15">
                <div className="bg-[#77a2ec] size-[11px]" />
              </div>
            </div>
            
            {/* 緑い四角 - 中 */}
            <div className="absolute flex items-center justify-center left-[-5.88px] size-[15.026px] top-[19.99px]">
              <div className="-rotate-30 flex-none">
                <div className="bg-[#3c9095] size-[11px]" />
              </div>
            </div>
            
            {/* 緑い四角 - 小 */}
            <div className="absolute flex items-center justify-center left-[282.12px] size-[10.928px] top-[51.49px]">
              <div className="-rotate-30 flex-none">
                <div className="bg-[#3c9095] size-[8px]" />
              </div>
            </div>
            
            {/* 黄色い四角 - 小 */}
            <div className="absolute flex items-center justify-center left-[295.13px] size-[12.728px] top-[-1px]">
              <div className="flex-none rotate-45">
                <div className="bg-[#ecea77] size-[9px]" />
              </div>
            </div>
            
            {/* 黄色い四角 - 極小 */}
            <div className="absolute flex items-center justify-center left-[104.56px] size-[10.671px] top-[2.42px]">
              <div className="flex-none rotate-[-41.09deg]">
                <div className="bg-[#ecea77] size-[7.563px]" />
              </div>
            </div>
            
            {/* 緑い四角 - 極小 */}
            <div className="absolute flex items-center justify-center left-[334.56px] size-[10.671px] top-[7.42px]">
              <div className="flex-none rotate-[-41.09deg]">
                <div className="bg-[#3c9095] size-[7.563px]" />
              </div>
            </div>
            
            {/* 黄色い四角 - 極小 */}
            <div className="absolute flex items-center justify-center left-[215.84px] size-[9.263px] top-[26.7px]">
              <div className="-rotate-15 flex-none">
                <div className="bg-[#ecea77] size-[7.563px]" />
              </div>
            </div>
            
            {/* 黄色い四角 - 極小 */}
            <div className="absolute flex items-center justify-center left-[103.84px] size-[9.263px] top-[46.7px]">
              <div className="-rotate-15 flex-none">
                <div className="bg-[#ecea77] size-[7.563px]" />
              </div>
            </div>
            
            {/* 青い四角 - 極小 */}
            <div className="absolute flex items-center justify-center left-[149.13px] size-[10.671px] top-[-5px]">
              <div className="flex-none rotate-[-41.09deg]">
                <div className="bg-[#77a2ec] size-[7.563px]" />
              </div>
            </div>
            
            {/* ピンクい四角 - 極小 */}
            <div className="absolute flex items-center justify-center left-[185.84px] size-[9.263px] top-[0.7px]">
              <div className="-rotate-15 flex-none">
                <div className="bg-[#ec778e] size-[7.563px]" />
              </div>
            </div>
            
            {/* シアンい四角 - 極小 */}
            <div className="absolute flex items-center justify-center left-[245.84px] size-[9.263px] top-[40.7px]">
              <div className="-rotate-15 flex-none">
                <div className="bg-[#77dcec] size-[7.563px]" />
              </div>
            </div>
            
            {/* 青い四角 - 極小 */}
            <div className="absolute flex items-center justify-center left-[74.84px] size-[9.263px] top-[35.7px]">
              <div className="-rotate-75 flex-none">
                <div className="bg-[#77a2ec] size-[7.563px]" />
              </div>
            </div>
            
            {/* 赤い四角 - 極小 */}
            <div className="absolute flex items-center justify-center left-[270.13px] size-[10.671px] top-[22px]">
              <div className="flex-none rotate-[-41.09deg]">
                <div className="bg-[#ec7a77] size-[7.563px]" />
              </div>
            </div>
            
            {/* 赤い四角 - 極小 */}
            <div className="absolute flex items-center justify-center left-[40.13px] size-[10.671px] top-[32px]">
              <div className="flex-none rotate-[-41.09deg]">
                <div className="bg-[#ec7a77] size-[7.563px]" />
              </div>
            </div>
            
            {/* シアンい四角 - 小 */}
            <div className="absolute flex items-center justify-center left-[27.14px] size-[12.267px] top-[7.13px]">
              <div className="-rotate-15 flex-none">
                <div className="bg-[#77dcec] size-[10.016px]" />
              </div>
            </div>
          </div>

          {/* 右下の三角形装飾 */}
          <div className="absolute h-[15px] right-[-0.5px] bottom-0 w-[14px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 15">
              <path d={accountSvgPaths.p2b842280} fill="#238B8A" />
            </svg>
          </div>
        </div>
      </div>

      {/* メールアドレスとアカウント削除 */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[448px] w-[343px] flex flex-col gap-[48px]">
        {/* メールアドレスカード */}
        <div className="bg-white rounded-[8px] shadow-[0px_1px_4px_0px_#e6f9fd,0px_1px_4px_0px_#e6f9fd] p-[16px] relative">
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
            
            <div className="h-[35px] flex items-center py-[12px]">
              <p className="font-['Nunito_Sans_7pt_SemiExpanded:Medium',sans-serif] leading-[20px] text-[#3c9095] text-[14px] tracking-[0.014px]" style={{ fontVariationSettings: "'wght' 500" }}>
                {userEmail}
              </p>
            </div>
          </div>
          
          {/* 右下の三角形装飾 */}
          <div className="absolute right-0 bottom-0 size-[13px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
              <path d={accountSvgPaths.p3cb9f280} fill="#238B8A" />
            </svg>
          </div>
        </div>

        {/* ログアウト */}
        <button
          type="button"
          onClick={handleLogout}
          className="relative bg-white rounded-[8px] shadow-[0px_1px_4px_0px_#e6f9fd,0px_1px_4px_0px_#e6f9fd] px-[24px] py-[16px] hover:shadow-lg transition-all"
        >
          <p className="font-['Hiragino_Kaku_Gothic_Pro:W6',sans-serif] leading-[20px] text-[#3c9095] text-[16px] text-center tracking-[0.016px]">
            ログアウト
          </p>

          {/* 右下の三角形装飾 */}
          <div className="absolute h-[14px] right-0 bottom-0 w-[15px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14">
              <path d={accountSvgPaths.p218d5f00} fill="#3C9095" />
            </svg>
          </div>
        </button>

        {/* アカウント削除ボタン */}
        <button
          type="button"
          onClick={handleDeleteAccount}
          className="relative bg-white rounded-[8px] shadow-[0px_1px_4px_0px_#e6f9fd,0px_1px_4px_0px_#e6f9fd] px-[24px] py-[16px] hover:shadow-lg transition-all"
        >
          <p className="font-['Hiragino_Kaku_Gothic_Pro:W6',sans-serif] leading-[20px] text-[#ff1414] text-[16px] text-center tracking-[0.016px]">
            このアカウントを削除する
          </p>
          
          {/* 右下の三角形装飾 */}
          <div className="absolute h-[14px] right-0 bottom-0 w-[15px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14">
              <path d={accountSvgPaths.p218d5f00} fill="#FF1414" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}