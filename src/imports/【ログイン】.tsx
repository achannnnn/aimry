import svgPaths from "./svg-gsx8rnllhe";

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
        ログイン
      </p>
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

function Frame2() {
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
    <div className="h-[35px] relative shrink-0 w-full" data-name="Input">
      <div className="content-stretch flex items-center overflow-clip py-[12px] relative rounded-[inherit] size-full">
        <Frame2 />
      </div>
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b-2 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <Input />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <FormControlLabel />
      <Frame />
    </div>
  );
}

function Lock() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="lock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="lock">
          <mask height="18" id="mask0_5_3318" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5_3318)">
            <path d={svgPaths.p36776b00} fill="var(--fill-0, #3C9095)" id="lock_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LabelText1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="LabelText">
      <Lock />
      <p className="font-['Nunito_Sans_7pt_SemiExpanded:SemiBold','Noto_Sans_JP:Bold',sans-serif] leading-[20px] relative shrink-0 text-[#3c9095] text-[16px] tracking-[0.016px]" style={{ fontVariationSettings: "\'wght\' 700" }}>
        パスワード
      </p>
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

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="flex flex-[1_0_0] flex-col font-['Nunito_Sans_7pt_SemiExpanded:Medium',sans-serif] h-[30px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#3c9095] text-[14px] tracking-[0.014px]">
        <p className="leading-[20px] whitespace-pre-wrap">amanokenji</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="h-[35px] relative shrink-0 w-full" data-name="Input">
      <div className="content-stretch flex items-center overflow-clip py-[12px] relative rounded-[inherit] size-full">
        <Frame3 />
      </div>
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b-2 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <Input1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <FormControlLabel1 />
      <Frame1 />
      <p className="font-['Nunito_Sans_7pt_SemiExpanded:Light','Noto_Sans:Light','Noto_Sans_JP:Light',sans-serif] leading-[16px] min-w-full relative shrink-0 text-[#7b7b7b] text-[12px] tracking-[0.06px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 300" }}>
        ※一般的なアカウント注意文
      </p>
    </div>
  );
}

function Default() {
  return (
    <div className="bg-white relative rounded-[8px] shadow-[0px_1px_4px_0px_#e6f9fd,0px_1px_4px_0px_#e6f9fd] shrink-0 w-full" data-name="Default">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
        <Frame4 />
        <Frame5 />
        <div className="absolute right-0 size-[13px] top-[181px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
            <path d={svgPaths.p3cb9f280} fill="var(--fill-0, #238B8A)" id="Vector 5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Logout() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="logout">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="logout">
          <mask height="24" id="mask0_5_3534" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_5_3534)">
            <path d={svgPaths.p3befe700} fill="var(--fill-0, #3C9095)" id="logout_2" />
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
          <Logout />
          <p className="font-['Nunito_Sans_7pt_SemiExpanded:SemiBold','Noto_Sans_JP:Bold',sans-serif] leading-[20px] relative shrink-0 text-[#3c9095] text-[16px] text-center tracking-[0.016px]" style={{ fontVariationSettings: "\'wght\' 700" }}>
            ログイン
          </p>
          <div className="absolute h-[14px] left-[329px] top-[42px] w-[15px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14">
              <path d={svgPaths.p218d5f00} fill="var(--fill-0, #3C9095)" id="Vector 6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full">
      <Default />
      <Button />
      <p className="font-['Nunito_Sans_7pt_SemiExpanded:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#3c9095] text-[16px] text-center tracking-[0.016px]" style={{ fontVariationSettings: "\'wght\' 400" }}>
        パスワードを忘れた方
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#f6fdff] col-1 content-stretch flex items-center justify-center ml-[135.46px] mt-0 p-[10px] relative row-1 w-[70.837px]">
      <p className="font-['Nunito_Sans_7pt_SemiExpanded:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#3c9095] text-[12px] text-center tracking-[0.012px]" style={{ fontVariationSettings: "\'wght\' 400" }}>
        または
      </p>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 h-0 ml-0 mt-[20px] relative row-1 w-[343px]">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 343 2">
            <line id="Line 13" stroke="var(--stroke-0, #EAEAEA)" strokeWidth="2" x2="343" y1="1" y2="1" />
          </svg>
        </div>
      </div>
      <Frame7 />
    </div>
  );
}

function GoogleColor() {
  return (
    <div className="absolute left-[14px] size-[14px] top-[13px]" data-name="google-color 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_3330)" id="google-color 1">
          <path d={svgPaths.p3b110000} fill="var(--fill-0, #4285F4)" id="Vector" />
          <path d={svgPaths.p1f8d6680} fill="var(--fill-0, #34A853)" id="Vector_2" />
          <path d={svgPaths.p830c2c0} fill="var(--fill-0, #FBBC05)" id="Vector_3" />
          <path d={svgPaths.p36b3e900} fill="var(--fill-0, #EB4335)" id="Vector_4" />
        </g>
        <defs>
          <clipPath id="clip0_5_3330">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <p className="font-['Nunito_Sans_7pt_SemiExpanded:SemiBold','Noto_Sans_JP:Bold',sans-serif] leading-[20px] relative shrink-0 text-[#9c9c9c] text-[16px] text-center tracking-[0.016px]" style={{ fontVariationSettings: "\'wght\' 700" }}>
            Googleでログイン
          </p>
          <GoogleColor />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Group1 />
      <Frame8 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[16px] top-[210px] w-[344px]">
      <Frame6 />
      <Frame9 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#f6fdff] overflow-clip relative rounded-[54px] size-full" data-name="【ログイン】">
      <Group />
      <Header />
      <Frame10 />
    </div>
  );
}