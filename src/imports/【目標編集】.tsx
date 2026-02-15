import svgPaths from "./svg-wtjwr09w67";

function Footer() {
  return (
    <div className="absolute bottom-0 h-[34px] left-0 overflow-clip w-[375px]" data-name=" Footer">
      <div className="-translate-x-1/2 absolute bg-[#ccc] bottom-[8px] h-[5px] left-[calc(50%-0.25px)] rounded-[2.5px] w-[138.5px]" data-name="Home Bar" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-0 contents left-0">
      <Footer />
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute inset-[38.33%_85.6%_51.1%_8%]" data-name="アイコン">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ã¢ã¤ã³ã³">
          <path clipRule="evenodd" d={svgPaths.p19c59880} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Battery() {
  return (
    <div className="absolute h-[13.5px] left-[310.5px] top-[22.2px] w-[27.164px]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.1641 13.5">
        <g id="Battery">
          <path d={svgPaths.pb23db00} fill="var(--fill-0, white)" id="Battery_2" opacity="0.5" />
          <path d={svgPaths.paf2cf00} fill="var(--fill-0, white)" id="Fill" />
        </g>
      </svg>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="absolute contents left-[36px] top-[19.1px]" data-name="Status Bar">
      <Battery />
      <div className="absolute h-[12px] right-[71.95px] top-[22.9px] w-[16.8px]" data-name="Wifi">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.7998 12">
          <path d={svgPaths.p3dc9d200} fill="var(--fill-0, white)" id="Wifi" />
        </svg>
      </div>
      <div className="absolute h-[12.078px] right-[96px] top-[23px] w-[19.249px]" data-name="Cellular">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.249 12.0781">
          <path d={svgPaths.p12c62400} fill="var(--fill-0, white)" id="Cellular" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Semibold',sans-serif] justify-center leading-[0] left-[51.5px] not-italic text-[17px] text-center text-white top-[29.1px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[20px]">7:11</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute h-[227px] left-0 opacity-90 overflow-clip top-0 w-[375px]" data-name=" Header">
      <div className="absolute h-[328px] left-[-40px] top-0 w-[456px]" data-name="Exclude">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 456 328">
          <path d={svgPaths.p10ee0e00} fill="var(--fill-0, #28858A)" id="Exclude" />
        </svg>
      </div>
      <Component1 />
      <StatusBar />
      <div className="absolute bg-white h-[35px] left-[113px] rounded-[17.5px] top-[12px] w-[124px]" data-name="Dynamic Island" />
      <div className="absolute bg-[#67ce67] left-[193px] rounded-[3px] size-[6px] top-[26.5px]" data-name="Camera Indicator" />
      <p className="-translate-x-1/2 absolute font-['Nunito_Sans_7pt_SemiExpanded:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[20px] left-[calc(50%+0.5px)] text-[16px] text-center text-white top-[90px] tracking-[0.064px] w-[194px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wght\' 700" }}>
        目標を編集
      </p>
    </div>
  );
}

function Flag() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="flag">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="flag">
          <mask height="18" id="mask0_5_1471" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5_1471)">
            <path d={svgPaths.p3f3cab80} fill="var(--fill-0, #3C9095)" id="flag_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 text-[#3c9095]">
      <p className="font-['Nunito_Sans_7pt_SemiExpanded:SemiBold','Noto_Sans_JP:Bold',sans-serif] leading-[20px] relative shrink-0 text-[16px] tracking-[0.016px]" style={{ fontVariationSettings: "\'wght\' 700" }}>
        目標名
      </p>
      <p className="font-['Nunito_Sans_7pt_SemiExpanded:SemiBold','Noto_Sans:SemiBold',sans-serif] leading-none relative shrink-0 text-[10px] tracking-[0.01px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 600" }}>
        ※
      </p>
    </div>
  );
}

function LabelText() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="LabelText">
      <Flag />
      <Frame29 />
    </div>
  );
}

function FormControlLabel() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="FormControlLabel">
      <LabelText />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="flex flex-[1_0_0] flex-col font-['Nunito_Sans_7pt_SemiExpanded:Medium','Noto_Sans_JP:Medium',sans-serif] h-[30px] justify-center leading-[0] min-h-px min-w-px relative text-[#c1c1c1] text-[14px] tracking-[0.014px]" style={{ fontVariationSettings: "\'wght\' 500" }}>
        <p className="leading-[20px] whitespace-pre-wrap">お金貯めたい</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="h-[35px] relative shrink-0 w-full" data-name="Input">
      <div className="content-stretch flex items-center overflow-clip py-[12px] relative rounded-[inherit] size-full">
        <Frame15 />
      </div>
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b-2 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <Input />
      <p className="font-['Nunito_Sans_7pt_SemiExpanded:Light','Noto_Sans:Light','Noto_Sans_JP:Light',sans-serif] leading-[16px] relative shrink-0 text-[#7b7b7b] text-[12px] tracking-[0.06px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 300" }}>
        ※合計20文字まで
      </p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <FormControlLabel />
      <Frame9 />
    </div>
  );
}

function ClockLoader() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="clock_loader_80">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="clock_loader_80">
          <mask height="18" id="mask0_5_1458" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5_1458)">
            <path d={svgPaths.pf096af0} fill="var(--fill-0, #3C9095)" id="clock_loader_80_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 text-[#3c9095]">
      <p className="font-['Nunito_Sans_7pt_SemiExpanded:SemiBold','Noto_Sans_JP:Bold',sans-serif] leading-[20px] relative shrink-0 text-[16px] tracking-[0.016px]" style={{ fontVariationSettings: "\'wght\' 700" }}>
        目標数値
      </p>
      <p className="font-['Nunito_Sans_7pt_SemiExpanded:SemiBold','Noto_Sans:SemiBold',sans-serif] leading-none relative shrink-0 text-[10px] tracking-[0.01px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 600" }}>
        ※
      </p>
    </div>
  );
}

function LabelText1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="LabelText">
      <ClockLoader />
      <Frame30 />
    </div>
  );
}

function FormControlLabel1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="FormControlLabel">
      <LabelText1 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="flex flex-[1_0_0] flex-col font-['Nunito_Sans_7pt_SemiExpanded:Medium',sans-serif] h-[30px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#3c9095] text-[14px] tracking-[0.014px]">
        <p className="leading-[20px] whitespace-pre-wrap">2000000</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="h-[35px] relative shrink-0 w-full" data-name="Input">
      <div className="content-stretch flex items-center overflow-clip py-[12px] relative rounded-[inherit] size-full">
        <Frame16 />
      </div>
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b-2 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <Input1 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <FormControlLabel1 />
      <Frame10 />
      <p className="font-['Nunito_Sans_7pt_SemiExpanded:Light','Noto_Sans:Light','Noto_Sans_JP:Light',sans-serif] leading-[16px] min-w-full relative shrink-0 text-[#7b7b7b] text-[12px] tracking-[0.06px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 300" }}>
        ※単位は9桁まで
      </p>
    </div>
  );
}

function Component1K() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="1k">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="1k">
          <mask height="18" id="mask0_5_1444" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5_1444)">
            <path d={svgPaths.p9df9100} fill="var(--fill-0, #3C9095)" id="1k_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 text-[#3c9095]">
      <p className="font-['Nunito_Sans_7pt_SemiExpanded:SemiBold','Noto_Sans_JP:Bold',sans-serif] leading-[20px] relative shrink-0 text-[16px] tracking-[0.016px]" style={{ fontVariationSettings: "\'wght\' 700" }}>
        目標単位
      </p>
      <p className="font-['Nunito_Sans_7pt_SemiExpanded:SemiBold','Noto_Sans:SemiBold',sans-serif] leading-none relative shrink-0 text-[10px] tracking-[0.01px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 600" }}>
        ※
      </p>
    </div>
  );
}

function LabelText2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="LabelText">
      <Component1K />
      <Frame31 />
    </div>
  );
}

function FormControlLabel2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="FormControlLabel">
      <LabelText2 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="flex flex-[1_0_0] flex-col font-['Nunito_Sans_7pt_SemiExpanded:Medium','Noto_Sans_JP:Medium',sans-serif] h-[30px] justify-center leading-[0] min-h-px min-w-px relative text-[#3c9095] text-[14px] tracking-[0.014px]" style={{ fontVariationSettings: "\'wght\' 500" }}>
        <p className="leading-[20px] whitespace-pre-wrap">円</p>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="h-[35px] relative shrink-0 w-full" data-name="Input">
      <div className="content-stretch flex items-center overflow-clip py-[12px] relative rounded-[inherit] size-full">
        <Frame17 />
      </div>
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b-2 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <Input2 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <FormControlLabel2 />
      <Frame11 />
    </div>
  );
}

function Taunt() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="taunt">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="taunt">
          <mask height="18" id="mask0_5_1467" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5_1467)">
            <path d={svgPaths.p3ac0e400} fill="var(--fill-0, #238B8A)" id="taunt_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LabelText3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="LabelText">
      <Taunt />
      <p className="font-['Nunito_Sans_7pt_SemiExpanded:SemiBold','Noto_Sans_JP:Bold',sans-serif] leading-[20px] relative shrink-0 text-[#3c9095] text-[16px] tracking-[0.016px]" style={{ fontVariationSettings: "\'wght\' 700" }}>
        目標に向けての意気込み！
      </p>
    </div>
  );
}

function FormControlLabel3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="FormControlLabel">
      <LabelText3 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="flex flex-[1_0_0] flex-col font-['Nunito_Sans_7pt_SemiExpanded:Medium','Noto_Sans_JP:Medium',sans-serif] h-[30px] justify-center leading-[0] min-h-px min-w-px relative text-[#3c9095] text-[14px] tracking-[0.014px]" style={{ fontVariationSettings: "\'wght\' 500" }}>
        <p className="leading-[20px] whitespace-pre-wrap">できたら頑張る！</p>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="h-[35px] relative shrink-0 w-full" data-name="Input">
      <div className="content-stretch flex items-center overflow-clip py-[12px] relative rounded-[inherit] size-full">
        <Frame18 />
      </div>
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b-2 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <Input3 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <FormControlLabel3 />
      <Frame12 />
    </div>
  );
}

function HourglassBottom() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="hourglass_bottom">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="hourglass_bottom">
          <mask height="18" id="mask0_5_1440" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5_1440)">
            <path d={svgPaths.p15065500} fill="var(--fill-0, #238B8A)" id="hourglass_bottom_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LabelText4() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="LabelText">
      <HourglassBottom />
      <p className="font-['Nunito_Sans_7pt_SemiExpanded:SemiBold','Noto_Sans_JP:Bold',sans-serif] leading-[20px] relative shrink-0 text-[#3c9095] text-[16px] tracking-[0.016px]" style={{ fontVariationSettings: "\'wght\' 700" }}>
        目標期日
      </p>
    </div>
  );
}

function FormControlLabel4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="FormControlLabel">
      <LabelText4 />
    </div>
  );
}

function CheckBoxOutlineBlank() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="check_box_outline_blank">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="check_box_outline_blank">
          <mask height="18" id="mask0_5_1448" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5_1448)">
            <circle cx="9" cy="9" id="Ellipse 66" r="6.6" stroke="var(--stroke-0, #3C9095)" strokeWidth="1.3" />
            <circle cx="9" cy="9" fill="var(--fill-0, #3C9095)" id="Ellipse 67" r="3.5" stroke="var(--stroke-0, #3C9095)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <CheckBoxOutlineBlank />
      <div className="flex flex-col font-['Nunito_Sans_7pt_SemiExpanded:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#3c9095] text-[14px] tracking-[0.014px] whitespace-nowrap" style={{ fontVariationSettings: "\'wght\' 500" }}>
        <p className="leading-[20px]">1年</p>
      </div>
    </div>
  );
}

function CheckBoxOutlineBlank1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="check_box_outline_blank">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="check_box_outline_blank">
          <mask height="18" id="mask0_5_1436" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5_1436)">
            <circle cx="9" cy="9" id="Ellipse 66" r="6.6" stroke="var(--stroke-0, #3C9095)" strokeWidth="1.3" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <CheckBoxOutlineBlank1 />
      <div className="flex flex-col font-['Nunito_Sans_7pt_SemiExpanded:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#3c9095] text-[14px] tracking-[0.014px] whitespace-nowrap" style={{ fontVariationSettings: "\'wght\' 500" }}>
        <p className="leading-[20px]">半年</p>
      </div>
    </div>
  );
}

function CheckBoxOutlineBlank2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="check_box_outline_blank">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="check_box_outline_blank">
          <mask height="18" id="mask0_5_1436" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5_1436)">
            <circle cx="9" cy="9" id="Ellipse 66" r="6.6" stroke="var(--stroke-0, #3C9095)" strokeWidth="1.3" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <CheckBoxOutlineBlank2 />
      <div className="flex flex-col font-['Nunito_Sans_7pt_SemiExpanded:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#3c9095] text-[14px] tracking-[0.014px] whitespace-nowrap" style={{ fontVariationSettings: "\'wght\' 500" }}>
        <p className="leading-[20px]">3ヶ月</p>
      </div>
    </div>
  );
}

function CheckBoxOutlineBlank3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="check_box_outline_blank">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="check_box_outline_blank">
          <mask height="18" id="mask0_5_1436" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5_1436)">
            <circle cx="9" cy="9" id="Ellipse 66" r="6.6" stroke="var(--stroke-0, #3C9095)" strokeWidth="1.3" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <CheckBoxOutlineBlank3 />
      <div className="flex flex-col font-['Nunito_Sans_7pt_SemiExpanded:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#3c9095] text-[14px] tracking-[0.014px] whitespace-nowrap" style={{ fontVariationSettings: "\'wght\' 500" }}>
        <p className="leading-[20px]">１ヶ月</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-center flex flex-wrap gap-[12px_16px] items-center relative shrink-0 w-[311px]">
      <Frame />
      <Frame1 />
      <Frame2 />
      <Frame5 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[311px]">
      <Frame20 />
    </div>
  );
}

function Input4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Input">
      <div className="content-stretch flex items-center overflow-clip py-[12px] relative rounded-[inherit] w-full">
        <Frame19 />
      </div>
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b-2 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <Input4 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <FormControlLabel4 />
      <Frame13 />
    </div>
  );
}

function Sell() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="sell">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="sell">
          <mask height="18" id="mask0_5_1412" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5_1412)">
            <path d={svgPaths.p37dc3700} fill="var(--fill-0, #238B8A)" id="sell_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LabelText5() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="LabelText">
      <Sell />
      <p className="font-['Nunito_Sans_7pt_SemiExpanded:SemiBold','Noto_Sans_JP:Bold',sans-serif] leading-[20px] relative shrink-0 text-[#3c9095] text-[16px] tracking-[0.016px]" style={{ fontVariationSettings: "\'wght\' 700" }}>
        タグ
      </p>
    </div>
  );
}

function FormControlLabel5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="FormControlLabel">
      <LabelText5 />
    </div>
  );
}

function CheckBoxOutlineBlank4() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="check_box_outline_blank">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="check_box_outline_blank">
          <mask height="18" id="mask0_5_1428" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5_1428)">
            <path d={svgPaths.p299b14c0} fill="var(--fill-0, #3C9095)" id="check_box_outline_blank_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <CheckBoxOutlineBlank4 />
      <div className="flex flex-col font-['Nunito_Sans_7pt_SemiExpanded:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#3c9095] text-[14px] tracking-[0.014px] whitespace-nowrap" style={{ fontVariationSettings: "\'wght\' 500" }}>
        <p className="leading-[20px]">生活</p>
      </div>
    </div>
  );
}

function CheckBox() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="check_box">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="check_box">
          <mask height="18" id="mask0_5_1432" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5_1432)">
            <path d={svgPaths.p1eb1ba80} fill="var(--fill-0, #3C9095)" id="check_box_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <CheckBox />
      <div className="flex flex-col font-['Nunito_Sans_7pt_SemiExpanded:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#3c9095] text-[14px] tracking-[0.014px] whitespace-nowrap" style={{ fontVariationSettings: "\'wght\' 500" }}>
        <p className="leading-[20px]">筋トレ</p>
      </div>
    </div>
  );
}

function CheckBoxOutlineBlank5() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="check_box_outline_blank">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="check_box_outline_blank">
          <mask height="18" id="mask0_5_1428" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5_1428)">
            <path d={svgPaths.p299b14c0} fill="var(--fill-0, #3C9095)" id="check_box_outline_blank_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <CheckBoxOutlineBlank5 />
      <div className="flex flex-col font-['Nunito_Sans_7pt_SemiExpanded:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#3c9095] text-[14px] tracking-[0.014px] whitespace-nowrap" style={{ fontVariationSettings: "\'wght\' 500" }}>
        <p className="leading-[20px]">人生</p>
      </div>
    </div>
  );
}

function CheckBoxOutlineBlank6() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="check_box_outline_blank">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="check_box_outline_blank">
          <mask height="18" id="mask0_5_1428" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5_1428)">
            <path d={svgPaths.p299b14c0} fill="var(--fill-0, #3C9095)" id="check_box_outline_blank_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <CheckBoxOutlineBlank6 />
      <div className="flex flex-col font-['Nunito_Sans_7pt_SemiExpanded:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#3c9095] text-[14px] tracking-[0.014px] whitespace-nowrap" style={{ fontVariationSettings: "\'wght\' 500" }}>
        <p className="leading-[20px]">趣味</p>
      </div>
    </div>
  );
}

function CheckBoxOutlineBlank7() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="check_box_outline_blank">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="check_box_outline_blank">
          <mask height="18" id="mask0_5_1428" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5_1428)">
            <path d={svgPaths.p299b14c0} fill="var(--fill-0, #3C9095)" id="check_box_outline_blank_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <CheckBoxOutlineBlank7 />
      <div className="flex flex-col font-['Nunito_Sans_7pt_SemiExpanded:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#3c9095] text-[14px] tracking-[0.014px] whitespace-nowrap" style={{ fontVariationSettings: "\'wght\' 500" }}>
        <p className="leading-[20px]">趣味</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-center flex flex-wrap gap-[8px_12px] items-center relative shrink-0 w-[311px]">
      <Frame3 />
      <Frame4 />
      <Frame6 />
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Input5() {
  return (
    <div className="content-stretch flex items-center overflow-clip py-[12px] relative shrink-0 w-full" data-name="Input">
      <Frame21 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <Input5 />
    </div>
  );
}

function AddCircle() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="add_circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="add_circle">
          <mask height="18" id="mask0_5_1422" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5_1422)">
            <path d={svgPaths.p3743fa00} fill="var(--fill-0, #3C9095)" id="add_circle_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LabelText6() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="LabelText">
      <AddCircle />
      <p className="font-['Nunito_Sans_7pt_SemiExpanded:SemiBold','Noto_Sans_JP:Bold',sans-serif] leading-[20px] relative shrink-0 text-[#3c9095] text-[14px] tracking-[0.014px]" style={{ fontVariationSettings: "\'wght\' 700" }}>
        タグを追加する
      </p>
    </div>
  );
}

function FormControlLabel6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="FormControlLabel">
      <LabelText6 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <FormControlLabel5 />
      <Frame14 />
      <FormControlLabel6 />
    </div>
  );
}

function Default() {
  return (
    <div className="bg-white relative rounded-[8px] shadow-[0px_1px_4px_0px_#e6f9fd,0px_1px_4px_0px_#e6f9fd] shrink-0 w-full" data-name="Default">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
        <Frame22 />
        <Frame23 />
        <Frame24 />
        <Frame26 />
        <Frame27 />
        <div className="absolute right-0 size-[13px] top-[605px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
            <path d={svgPaths.p3cb9f280} fill="var(--fill-0, #238B8A)" id="Vector 5" />
          </svg>
        </div>
        <Frame28 />
      </div>
    </div>
  );
}

function MountainFlag() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="mountain_flag">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mountain_flag">
          <mask height="24" id="mask0_5_1418" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_5_1418)">
            <path d={svgPaths.p6464dc0} fill="var(--fill-0, #3C9095)" id="mountain_flag_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white relative rounded-[8px] shadow-[0px_1px_4px_0px_#e6f9fd,0px_1px_4px_0px_#e6f9fd] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[24px] py-[16px] relative w-full">
          <MountainFlag />
          <p className="font-['Hiragino_Kaku_Gothic_Pro:W6',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3c9095] text-[16px] text-center tracking-[0.016px]">目標を更新</p>
          <div className="absolute h-[14px] left-[328px] top-[42px] w-[15px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14">
              <path d={svgPaths.p218d5f00} fill="var(--fill-0, #3C9095)" id="Vector 6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[20px] items-center left-1/2 top-[210px] w-[343px]">
      <Default />
      <Button />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#f6fdff] overflow-clip relative rounded-[54px] size-full" data-name="【目標編集】">
      <Group />
      <Header />
      <Frame25 />
    </div>
  );
}