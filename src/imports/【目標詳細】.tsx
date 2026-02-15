import svgPaths from "./svg-4gxcxcbmrb";

function Footer() {
  return (
    <div className="absolute bottom-0 h-[34px] left-0 overflow-clip w-[375px]" data-name=" Footer">
      <div className="-translate-x-1/2 absolute bg-[#ccc] bottom-[8px] h-[5px] left-[calc(50%-0.25px)] rounded-[2.5px] w-[138.5px]" data-name="Home Bar" />
    </div>
  );
}

function Group1() {
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

function BorderColor() {
  return (
    <div className="absolute left-[321px] size-[24px] top-[87px]" data-name="border_color">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="border_color">
          <mask height="24" id="mask0_5_2204" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_5_2204)">
            <path d={svgPaths.p2fc07400} fill="var(--fill-0, white)" id="border_color_2" />
          </g>
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
      <BorderColor />
      <StatusBar />
      <div className="absolute bg-white h-[35px] left-[113px] rounded-[17.5px] top-[12px] w-[124px]" data-name="Dynamic Island" />
      <div className="absolute bg-[#67ce67] left-[193px] rounded-[3px] size-[6px] top-[26.5px]" data-name="Camera Indicator" />
      <p className="-translate-x-1/2 absolute font-['Nunito_Sans_7pt_SemiExpanded:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[20px] left-[calc(50%+0.5px)] text-[16px] text-center text-white top-[90px] tracking-[0.064px] w-[194px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wght\' 700" }}>
        読書読書読書
      </p>
    </div>
  );
}

function PhysicalTherapy() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="physical_therapy">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="physical_therapy">
          <mask height="20" id="mask0_5_2196" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_5_2196)">
            <path d={svgPaths.p415f400} fill="var(--fill-0, #238B8A)" id="physical_therapy_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center justify-center pt-[2px] relative shrink-0">
      <p className="font-['Nunito_Sans_7pt_SemiExpanded:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[20px] relative shrink-0 text-[#238b8a] text-[16px] text-center tracking-[0.064px]" style={{ fontVariationSettings: "\'wght\' 700" }}>
        目標
      </p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0">
      <PhysicalTherapy />
      <Frame16 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0 w-full">
      <Frame15 />
      <p className="font-['Nunito_Sans_7pt_SemiExpanded:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[0] relative shrink-0 text-[#238b8a] text-[0px] text-center tracking-[0.064px]" style={{ fontVariationSettings: "\'wght\' 700" }}>
        <span className="leading-[20px] text-[16px]">10 / 100</span>
        <span className="leading-[20px] text-[12px]">冊</span>
      </p>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[23.599px] relative w-[60.44px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60.4405 23.5987">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p1c39700} fill="var(--fill-0, #CEF1F8)" id="Vector" />
          </g>
          <path d={svgPaths.p11908d00} fill="var(--fill-0, #CEF1F8)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function E() {
  return (
    <div className="absolute contents left-[90.06px] top-[-4px]" data-name="e1639_1 1">
      <div className="absolute flex h-[23.599px] items-center justify-center left-0 top-0 w-[60.44px]">
        <div className="flex-none rotate-180">
          <Group />
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[90.06px] top-[-4px]">
      <E />
      <p className="absolute font-['Nunito_Sans_7pt_SemiExpanded:SemiBold','Noto_Sans_JP:Bold',sans-serif] leading-[1.4] left-[100.5px] text-[#238b8a] text-[9px] top-[1.5px] tracking-[0.036px]" style={{ fontVariationSettings: "\'wght\' 700" }}>
        あと365日
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-center px-[16px] py-[12px] relative rounded-[8px] shadow-[0px_1px_4px_0px_#e6f9fd,0px_1px_4px_0px_#e6f9fd] shrink-0">
      <Frame9 />
      <Group2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#238b8a] content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[6px] shrink-0">
      <p className="font-['Nunito_Sans_7pt_SemiExpanded:Bold','Noto_Sans_JP:Bold',sans-serif] leading-none relative shrink-0 text-[12px] text-center text-white tracking-[0.048px]" style={{ fontVariationSettings: "\'wght\' 700" }}>
        今週
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#d7f1f4] content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[6px] shrink-0">
      <p className="font-['Nunito_Sans_7pt_SemiExpanded:Bold','Noto_Sans_JP:Bold',sans-serif] leading-none relative shrink-0 text-[#3c9095] text-[12px] text-center tracking-[0.048px]" style={{ fontVariationSettings: "\'wght\' 700" }}>
        今月
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#d7f1f4] content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[6px] shrink-0">
      <p className="font-['Nunito_Sans_7pt_SemiExpanded:Bold','Noto_Sans_JP:Bold',sans-serif] leading-none relative shrink-0 text-[#3c9095] text-[12px] text-center tracking-[0.048px]" style={{ fontVariationSettings: "\'wght\' 700" }}>
        今年
      </p>
    </div>
  );
}

function Component2() {
  return (
    <div className="bg-[#d5f1f4] content-stretch flex gap-[2px] items-center p-[2px] relative rounded-[8px] shadow-[0px_1px_4px_0px_#e6f9fd,0px_1px_4px_0px_#e6f9fd] shrink-0" data-name="タブ">
      <Frame5 />
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Frame() {
  return (
    <div className="col-1 content-stretch flex flex-col font-['Montserrat:Regular',sans-serif] gap-[2px] items-end justify-center leading-[20px] ml-0 mt-0 not-italic relative row-1 text-[#ccc] text-[10px] tracking-[0.04px] w-[20px] whitespace-pre-wrap">
      <p className="relative shrink-0 text-right w-full">100</p>
      <p className="relative shrink-0 text-center w-full">90</p>
      <p className="relative shrink-0 text-center w-full">80</p>
      <p className="relative shrink-0 text-center w-full">70</p>
      <p className="relative shrink-0 text-center w-full">60</p>
      <p className="relative shrink-0 text-center w-full">50</p>
      <p className="relative shrink-0 text-center w-full">40</p>
      <p className="relative shrink-0 text-center w-full">30</p>
      <p className="relative shrink-0 text-center w-full">20</p>
      <p className="relative shrink-0 text-center w-full">10</p>
      <p className="relative shrink-0 text-center w-full">0</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="col-1 content-stretch flex font-['Montserrat:Regular',sans-serif] gap-[8px] items-center leading-[20px] ml-[36px] mt-[234px] not-italic relative row-1 text-[#ccc] text-[10px] text-center tracking-[0.04px] whitespace-pre-wrap">
      <p className="relative shrink-0 w-[30px]">12/16</p>
      <p className="relative shrink-0 w-[30px]">12/17</p>
      <p className="relative shrink-0 w-[30px]">12/18</p>
      <p className="relative shrink-0 w-[30px]">12/19</p>
      <p className="relative shrink-0 w-[30px]">12/20</p>
      <p className="relative shrink-0 w-[30px]">12/21</p>
      <p className="relative shrink-0 w-[30px]">12/22</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="col-1 h-[200px] ml-[27.5px] mt-[10px] relative row-1 w-[270px]">
      <div className="absolute inset-[-0.5%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 270 201">
          <g id="Group 796">
            <line id="Line 3" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="2 2" x2="270" y1="200.5" y2="200.5" />
            <line id="Line 4" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="2 2" x2="270" y1="176.5" y2="176.5" />
            <line id="Line 5" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="2 2" x2="270" y1="154.5" y2="154.5" />
            <line id="Line 6" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="2 2" x2="270" y1="132.5" y2="132.5" />
            <line id="Line 7" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="2 2" x2="270" y1="110.5" y2="110.5" />
            <line id="Line 8" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="2 2" x2="270" y1="88.5" y2="88.5" />
            <line id="Line 9" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="2 2" x2="270" y1="66.5" y2="66.5" />
            <line id="Line 10" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="2 2" x2="270" y1="44.5" y2="44.5" />
            <line id="Line 11" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="2 2" x2="270" y1="22.5" y2="22.5" />
            <line id="Line 12" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="2 2" x2="270" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="col-1 content-stretch flex gap-[18px] items-end ml-[41px] mt-[10px] relative row-1">
      <div className="bg-[#238b8a] h-[21px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#238b8a] h-[98px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#238b8a] h-[120px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#238b8a] h-[145px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#238b8a] h-[165px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#238b8a] h-[186px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#ec7a77] h-[221px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
    </div>
  );
}

function Group3() {
  return (
    <div className="col-1 h-[222px] ml-[26px] mt-[10px] relative row-1 w-[270.992px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 270.992 222">
        <g id="Group 795">
          <line id="Line 1" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="2 2" x1="0.500019" x2="0.50001" y1="2.18557e-08" y2="222" />
          <line id="Line 2" stroke="var(--stroke-0, #CCCCCC)" x1="270.992" x2="0.992188" y1="221.5" y2="221.5" />
        </g>
      </svg>
    </div>
  );
}

function Component3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="棒グラフ">
      <Frame />
      <Frame4 />
      <Group4 />
      <Frame3 />
      <Group3 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full">
      <Component2 />
      <Component3 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-white relative rounded-[8px] shadow-[0px_1px_4px_0px_#e6f9fd,0px_1px_4px_0px_#e6f9fd] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[10px] items-start p-[16px] relative w-full">
        <Frame8 />
        <div className="absolute left-[317px] size-[13px] top-[325px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
            <path d={svgPaths.p3cb9f280} fill="var(--fill-0, #238B8A)" id="Vector 5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-white col-1 content-stretch flex items-start min-h-[80px] min-w-[240px] ml-0 mt-[33px] overflow-clip px-[16px] py-[12px] relative rounded-bl-[6px] rounded-br-[6px] row-1 shadow-[0px_1px_4px_0px_#e6f9fd,0px_1px_4px_0px_#e6f9fd] w-[330px]" data-name="Textarea">
      <div className="flex-[1_0_0] font-['Nunito_Sans_7pt_SemiExpanded:Medium','Noto_Sans_JP:Medium',sans-serif] leading-[23px] min-h-px min-w-px relative text-[#238b8a] text-[14px] tracking-[0.035px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wght\' 500" }}>
        <p className="mb-0">今年は最低でも30冊読みたい📖</p>
        <p>目標は50冊💪</p>
      </div>
    </div>
  );
}

function Taunt() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="taunt">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="taunt">
          <mask height="22" id="mask0_5_2190" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="22" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="22" id="Bounding box" width="22" />
          </mask>
          <g mask="url(#mask0_5_2190)">
            <path d={svgPaths.p7485300} fill="var(--fill-0, #238B8A)" id="taunt_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-center pt-[2px] relative shrink-0">
      <p className="font-['Nunito_Sans_7pt_SemiExpanded:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#238b8a] text-[15px] tracking-[0.0375px]" style={{ fontVariationSettings: "\'wght\' 700" }}>
        目標に向けての意気込み！
      </p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-white col-1 content-stretch flex gap-[4px] items-center justify-center ml-0 mt-0 pt-[8px] px-[12px] relative rounded-tl-[6px] rounded-tr-[6px] row-1 w-[330px]">
      <Taunt />
      <Frame14 />
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Textarea />
      <div className="col-1 ml-[317px] mt-[100px] relative row-1 size-[13px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
          <path d={svgPaths.p3cb9f280} fill="var(--fill-0, #238B8A)" id="Vector 5" />
        </svg>
      </div>
      <Frame12 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex font-['Nunito_Sans_7pt_SemiExpanded:Medium','Noto_Sans_JP:Medium',sans-serif] gap-[10px] items-center justify-center leading-[23px] relative shrink-0 text-[#238b8a] text-[14px] tracking-[0.035px]">
      <p className="relative shrink-0" style={{ fontVariationSettings: "\'wght\' 500" }}>
        # 生活
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "\'wght\' 500" }}>
        # スポーツ
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "\'wght\' 500" }}>
        # お金
      </p>
    </div>
  );
}

function Textarea1() {
  return (
    <div className="bg-white col-1 content-stretch flex items-start min-w-[240px] ml-0 mt-[33px] overflow-clip px-[16px] py-[12px] relative rounded-bl-[6px] rounded-br-[6px] row-1 shadow-[0px_1px_4px_0px_#e6f9fd,0px_1px_4px_0px_#e6f9fd] w-[330px]" data-name="Textarea">
      <Frame1 />
    </div>
  );
}

function Sell() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="sell">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="sell">
          <mask height="22" id="mask0_5_2184" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="22" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="22" id="Bounding box" width="22" />
          </mask>
          <g mask="url(#mask0_5_2184)">
            <path d={svgPaths.p354f0d00} fill="var(--fill-0, #238B8A)" id="sell_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-center justify-center pt-[2px] relative shrink-0">
      <p className="font-['Nunito_Sans_7pt_SemiExpanded:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#238b8a] text-[15px] tracking-[0.0375px]" style={{ fontVariationSettings: "\'wght\' 700" }}>
        タグ
      </p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-white col-1 content-stretch flex gap-[4px] items-center justify-center ml-0 mt-0 pt-[8px] px-[12px] relative rounded-tl-[6px] rounded-tr-[6px] row-1 w-[330px]">
      <Sell />
      <Frame17 />
    </div>
  );
}

function Group6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Textarea1 />
      <div className="col-1 ml-[317px] mt-[67px] relative row-1 size-[13px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
          <path d={svgPaths.p3cb9f280} fill="var(--fill-0, #238B8A)" id="Vector 5" />
        </svg>
      </div>
      <Frame13 />
    </div>
  );
}

function Component4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="アイコン">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ã¢ã¤ã³ã³">
          <mask height="24" id="mask0_5_2180" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_5_2180)">
            <path d={svgPaths.pa683700} fill="var(--fill-0, #FF1414)" id="delete" />
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
          <Component4 />
          <p className="font-['Hiragino_Kaku_Gothic_Pro:W6',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#ff1414] text-[16px] text-center tracking-[0.016px]">この目標を削除する</p>
          <div className="absolute h-[14px] left-[315px] top-[42px] w-[15px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14">
              <path d={svgPaths.p218d5f00} fill="var(--fill-0, #FF1414)" id="Vector 6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-center left-[20px] top-[161px] w-[330px]">
      <Frame2 />
      <Frame10 />
      <Group5 />
      <Group6 />
      <Button />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#f6fdff] overflow-clip relative rounded-[54px] size-full" data-name="【目標詳細】">
      <Group1 />
      <Header />
      <Frame11 />
    </div>
  );
}