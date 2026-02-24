export default function EmptyGoalsState() {
  return (
    <div className="flex flex-col items-center justify-center text-center select-none">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="110"
          height="110"
          viewBox="0 0 110 110"
          fill="none"
          aria-hidden="true"
        >
          <mask
            id="mask0_116_483"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="110"
            height="110"
          >
            <rect width="110" height="110" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_116_483)">
            <path
              d="M39.8751 59.2396L46.1772 63.4792L52.9376 60.0417C53.5487 59.6597 54.2362 59.4687 55.0001 59.4687C55.764 59.4687 56.4515 59.6597 57.0626 60.0417L63.823 63.4792L69.8959 59.4687L65.3126 50.4167H44.2293L39.8751 59.2396ZM23.948 91.6667H85.9376L74.0209 67.7187L66.6876 72.6458C66.0001 73.1042 65.2553 73.3524 64.4532 73.3906C63.6512 73.4288 62.8682 73.2569 62.1043 72.875L55.0001 69.3229L47.8959 72.875C47.1321 73.2569 46.3491 73.4097 45.547 73.3333C44.7449 73.2569 44.0001 72.9896 43.3126 72.5312L35.7501 67.6042L23.948 91.6667ZM16.5001 100.833C14.7432 100.833 13.4255 100.108 12.547 98.6562C11.6685 97.2048 11.6112 95.7153 12.3751 94.1875L35.9793 46.4062C36.7432 44.8785 37.8699 43.6371 39.3595 42.6823C40.8491 41.7274 42.4723 41.25 44.2293 41.25H50.4168V13.75C50.4168 12.4514 50.856 11.3628 51.7345 10.4844C52.613 9.60589 53.7015 9.16666 55.0001 9.16666H78.8334C79.6737 9.16666 80.323 9.5295 80.7814 10.2552C81.2397 10.9809 81.2779 11.7257 80.8959 12.4896L78.3751 17.3021C78.2223 17.684 78.1459 18.0278 78.1459 18.3333C78.1459 18.6389 78.2223 18.9826 78.3751 19.3646L80.8959 24.1771C81.2779 24.941 81.2397 25.6858 80.7814 26.4114C80.323 27.1371 79.6737 27.5 78.8334 27.5H59.5834V41.25H65.3126C67.0696 41.25 68.6737 41.7083 70.1251 42.625C71.5765 43.5417 72.7223 44.7639 73.5626 46.2917L97.5105 94.1875C98.2744 95.7153 98.2171 97.2048 97.3387 98.6562C96.4602 100.108 95.1425 100.833 93.3855 100.833H16.5001Z"
              fill="#73BDBC"
            />
          </g>
        </svg>
      </div>

      <div className="mt-[12px] flex items-center gap-[10px] text-[#79c7c4]">
        <span className="font-['Nunito_Sans_7pt_SemiExpanded:Bold','Noto_Sans_JP:Bold',sans-serif] font-black text-[22px] leading-[28px] tracking-[0.1px]">
          右下の
        </span>
        <span
          className="inline-flex items-center justify-center size-[44px] rounded-full bg-[#79c7c4] text-white text-[30px] leading-none"
          aria-hidden="true"
        >
          +
        </span>
        <span className="font-['Nunito_Sans_7pt_SemiExpanded:Bold','Noto_Sans_JP:Bold',sans-serif] font-black text-[22px] leading-[28px] tracking-[0.1px]">
          から
        </span>
      </div>

      <p className="mt-[8px] font-['Nunito_Sans_7pt_SemiExpanded:Bold','Noto_Sans_JP:Bold',sans-serif] font-black text-[22px] leading-[30px] tracking-[0.1px] text-[#79c7c4]">
        目標を追加してみて！！
      </p>
    </div>
  );
}
