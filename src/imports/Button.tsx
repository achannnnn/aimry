import svgPaths from "./svg-zpr0cf35a2";

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

export default function Button() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center justify-center px-[24px] py-[16px] relative rounded-[8px] shadow-[0px_1px_4px_0px_#e6f9fd,0px_1px_4px_0px_#e6f9fd] size-full" data-name="Button">
      <MountainFlag />
      <p className="font-['Hiragino_Kaku_Gothic_Pro:W6',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3c3095] text-[16px] text-center tracking-[0.016px]">目標を設定</p>
      <div className="absolute h-[14px] left-[328px] top-[42px] w-[15px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14">
          <path d={svgPaths.p218d5f00} fill="var(--fill-0, #3C9095)" id="Vector 6" />
        </svg>
      </div>
    </div>
  );
}