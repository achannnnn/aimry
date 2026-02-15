import svgPaths from "./svg-d3j7tv267w";

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
      <StatusBar />
      <div className="absolute bg-white h-[35px] left-[113px] rounded-[17.5px] top-[12px] w-[124px]" data-name="Dynamic Island" />
      <div className="absolute bg-[#67ce67] left-[193px] rounded-[3px] size-[6px] top-[26.5px]" data-name="Camera Indicator" />
      <p className="-translate-x-1/2 absolute font-['Nunito_Sans_7pt_SemiExpanded:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[20px] left-[calc(50%+0.5px)] text-[16px] text-center text-white top-[90px] tracking-[0.064px] w-[194px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wght\' 700" }}>
        アカウント情報
      </p>
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[39.061px] relative shrink-0 w-[25.762px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.7617 39.0605">
        <g id="Group 791">
          <path d={svgPaths.pacd3c80} fill="var(--fill-0, #B28247)" id="Vector 1" />
          <g id="Group 789">
            <path d={svgPaths.p274e4a00} fill="var(--fill-0, #1A0B08)" id="Vector 3" />
            <path d={svgPaths.p1c621600} fill="var(--fill-0, #1A0B08)" id="Vector 4" />
            <path d={svgPaths.p15180600} fill="var(--fill-0, #231815)" id="Vector 2" />
            <ellipse cx="5.86817" cy="24.3429" fill="var(--fill-0, #6A3906)" id="Ellipse 3" rx="1.41143" ry="1.56826" />
            <ellipse cx="20.045" cy="24.3432" fill="var(--fill-0, #6A3906)" id="Ellipse 4" rx="1.41174" ry="1.5686" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white content-stretch flex items-center px-[13px] py-[6px] relative rounded-[26px] shrink-0 size-[52px]">
      <div aria-hidden="true" className="absolute border-2 border-[#3c9095] border-solid inset-[-1px] pointer-events-none rounded-[27px]" />
      <Group1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
      <Frame />
      <p className="font-['Montserrat:Medium',sans-serif] h-[21.967px] leading-[20px] not-italic relative shrink-0 text-[#3c9095] text-[16px] text-center tracking-[0.064px] w-[52px] whitespace-pre-wrap">2026</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[7px] relative shrink-0">
      <p className="font-['Nunito_Sans_7pt_SemiExpanded:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#3c9095] text-[31px] tracking-[0.124px]">
        <span className="leading-none">/</span>
        <span className="leading-none tracking-[-2.656px]">{` `}</span>
        <span className="leading-none">36</span>
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[6px] items-end relative shrink-0">
      <p className="font-['Nunito_Sans_7pt_SemiExpanded:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[#ec7a77] text-[61px] tracking-[0.244px]">20</p>
      <Frame8 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[27px] items-center relative shrink-0">
      <div className="font-['Nunito_Sans_7pt_SemiExpanded:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#3c9095] text-[18px] tracking-[0.072px] whitespace-nowrap" style={{ fontVariationSettings: "\'wght\' 700" }}>
        <p className="mb-0">あなたが</p>
        <p>達成した目標数</p>
      </div>
      <Frame7 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[-5.88px] top-[-5.26px]">
      <div className="absolute flex items-center justify-center left-[62.87px] size-[15.52px] top-[-5.26px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-41.09deg]">
          <div className="bg-[#ec7a77] size-[11px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[314.38px] size-[13.66px] top-[35.11px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-60 flex-none">
          <div className="bg-[#77a2ec] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[127.16px] size-[13.472px] top-[18.02px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-15 flex-none">
          <div className="bg-[#ec7a77] size-[11px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[244.9px] size-[13.472px] top-[-2.24px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-15">
          <div className="bg-[#77a2ec] size-[11px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[-5.88px] size-[15.026px] top-[19.99px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-30 flex-none">
          <div className="bg-[#3c9095] size-[11px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[282.12px] size-[10.928px] top-[51.49px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-30 flex-none">
          <div className="bg-[#3c9095] size-[8px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[295.13px] size-[12.728px] top-[-1px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-45">
          <div className="bg-[#ecea77] size-[9px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[104.56px] size-[10.671px] top-[2.42px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-41.09deg]">
          <div className="bg-[#ecea77] size-[7.563px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[334.56px] size-[10.671px] top-[7.42px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-41.09deg]">
          <div className="bg-[#3c9095] size-[7.563px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[215.84px] size-[9.263px] top-[26.7px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-15 flex-none">
          <div className="bg-[#ecea77] size-[7.563px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[103.84px] size-[9.263px] top-[46.7px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-15 flex-none">
          <div className="bg-[#ecea77] size-[7.563px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[149.13px] size-[10.671px] top-[-5px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-41.09deg]">
          <div className="bg-[#77a2ec] size-[7.563px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[185.84px] size-[9.263px] top-[0.7px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-15 flex-none">
          <div className="bg-[#ec778e] size-[7.563px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[245.84px] size-[9.263px] top-[40.7px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-15 flex-none">
          <div className="bg-[#77dcec] size-[7.563px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[74.84px] size-[9.263px] top-[35.7px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-75 flex-none">
          <div className="bg-[#77a2ec] size-[7.563px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[270.13px] size-[10.671px] top-[22px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-41.09deg]">
          <div className="bg-[#ec7a77] size-[7.563px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[40.13px] size-[10.671px] top-[32px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-41.09deg]">
          <div className="bg-[#ec7a77] size-[7.563px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[27.14px] size-[12.267px] top-[7.13px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-15 flex-none">
          <div className="bg-[#77dcec] size-[10.016px]" />
        </div>
      </div>
    </div>
  );
}

function Default() {
  return (
    <div className="-translate-x-1/2 absolute bg-white content-stretch flex flex-col gap-[11px] items-center justify-center left-[calc(50%+0.5px)] overflow-clip pb-[18px] pt-[35px] px-[22px] rounded-[8px] shadow-[0px_1px_4px_0px_#e6f9fd,0px_1px_4px_0px_#e6f9fd] top-[210px]" data-name="Default">
      <div className="absolute h-[15px] right-[-0.5px] top-[188px] w-[14px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 15">
          <path d={svgPaths.p2b842280} fill="var(--fill-0, #238B8A)" id="Vector 5" />
        </svg>
      </div>
      <Frame2 />
      <Frame1 />
      <Group2 />
    </div>
  );
}

function Mail() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="mail">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="mail">
          <mask height="18" id="mask0_5_3322" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5_3322)">
            <path d={svgPaths.p204a1780} fill="var(--fill-0, #3C9095)" id="mail_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LabelText() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="LabelText">
      <Mail />
      <p className="font-['Nunito_Sans_7pt_SemiExpanded:SemiBold','Noto_Sans_JP:Bold',sans-serif] leading-[20px] relative shrink-0 text-[#3c9095] text-[16px] tracking-[0.016px]" style={{ fontVariationSettings: "\'wght\' 700" }}>
        メールアドレス
      </p>
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

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="flex flex-[1_0_0] flex-col font-['Nunito_Sans_7pt_SemiExpanded:Medium',sans-serif] h-[30px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#3c9095] text-[14px] tracking-[0.014px]">
        <p className="leading-[20px] whitespace-pre-wrap">amanokenji83@gmail.com</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="content-stretch flex h-[35px] items-center overflow-clip py-[12px] relative shadow-[0px_1px_4px_0px_#e6f9fd,0px_1px_4px_0px_#e6f9fd] shrink-0 w-full" data-name="Input">
      <Frame4 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <Input />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <FormControlLabel />
      <Frame3 />
    </div>
  );
}

function Default1() {
  return (
    <div className="bg-white relative rounded-[8px] shadow-[0px_1px_4px_0px_#e6f9fd,0px_1px_4px_0px_#e6f9fd] shrink-0 w-full" data-name="Default">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
        <Frame6 />
        <div className="absolute right-0 size-[13px] top-[78px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
            <path d={svgPaths.p3cb9f280} fill="var(--fill-0, #238B8A)" id="Vector 5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white relative rounded-[8px] shadow-[0px_1px_4px_0px_#e6f9fd,0px_1px_4px_0px_#e6f9fd] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[24px] py-[16px] relative w-full">
          <p className="font-['Hiragino_Kaku_Gothic_Pro:W6',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#ff1414] text-[16px] text-center tracking-[0.016px]">このアカウントを削除する</p>
          <div className="absolute h-[14px] left-[328px] top-[38px] w-[15px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14">
              <path d={svgPaths.p218d5f00} fill="var(--fill-0, #FF1414)" id="Vector 6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[48px] items-center left-[calc(50%+0.5px)] top-[448px] w-[343px]">
      <Default1 />
      <Button />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#f6fdff] overflow-clip relative rounded-[54px] size-full" data-name="【アカウント情報】">
      <Group />
      <Header />
      <Default />
      <Frame5 />
    </div>
  );
}