import Frame834 from "../../imports/Frame834";
import ZodiacSlider from "./ZodiacSlider";
import svgPaths from "../../imports/svg-u9xgih3yit";

interface HeaderComponentProps {
  onAccountClick: () => void;
  selectedYear: number;
  onYearChange: (year: number) => void;
  children?: React.ReactNode;
}

export default function HeaderComponent({ onAccountClick, selectedYear, onYearChange, children }: HeaderComponentProps) {
  return (
    <div className="relative h-[234px] w-full overflow-hidden">
      {/* ヘッダー背景のみ - 中央揃え */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[375px] h-full">
        <Frame834 />
      </div>
      
      {/* アカウントアイコン（SVG） */}
      <div className="absolute left-[321px] size-[24px] top-[65px] z-20">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <mask height="24" id="mask0_account" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="#D9D9D9" height="24" width="24" />
          </mask>
          <g mask="url(#mask0_account)">
            <path d={svgPaths.pf70b700} fill="white" />
          </g>
        </svg>
      </div>
      
      {/* アカウントアイコンをクリック可能にするための透明なボタン */}
      <button
        onClick={onAccountClick}
        className="absolute left-[321px] top-[65px] z-20 size-[24px]"
        aria-label="アカウント情報"
      />
      
      {/* 12干支スライダー */}
      <ZodiacSlider selectedYear={selectedYear} onYearChange={onYearChange} />

      {/* その他の子要素 */}
      {children}
    </div>
  );
}