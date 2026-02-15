import { useRef } from "react";
import svgPaths from "../../imports/svg-7ok64xb6pf";

// 12干支のコンポーネント配列（子から亥まで順番に）
const zodiacComponents = [
  // 子（ネズミ） - 2020, 2032...
  function Rat({ size = 52 }: { size?: number }) {
    return (
      <div className="relative shrink-0" style={{ width: size, height: size }}>
        <div className="absolute inset-[-1.92%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
            <g>
              <circle cx="27" cy="27" fill="var(--fill-0, #F6FDFF)" r="26" stroke="var(--stroke-0, #4CAEAC)" strokeWidth="2" />
              <g>
                <path d={svgPaths.p15b8280} fill="var(--fill-0, #D6E4E8)" />
                <path d={svgPaths.p2debac00} stroke="var(--stroke-0, #6A3906)" strokeLinecap="round" strokeWidth="0.261972" />
                <path d={svgPaths.p289155c0} stroke="var(--stroke-0, #6A3906)" strokeLinecap="round" strokeWidth="0.261972" />
                <circle cx="21.2068" cy="31.363" fill="var(--fill-0, #6A3906)" r="1.04789" />
                <circle cx="32.9955" cy="31.363" fill="var(--fill-0, #6A3906)" r="1.04789" />
                <circle cx="27.1011" cy="33.9827" fill="var(--fill-0, #FFCACA)" r="0.523944" />
                <ellipse cx="34.6983" cy="33.7862" fill="var(--fill-0, #FFCACA)" rx="1.70282" ry="0.982394" />
                <ellipse cx="18.4561" cy="33.5242" fill="var(--fill-0, #FFCACA)" rx="1.70282" ry="0.982394" />
                <path d={svgPaths.p36ce7b00} fill="var(--stroke-0, #6A3906)" />
                <g>
                  <path d={svgPaths.p2d5d5580} stroke="var(--stroke-0, #6A3906)" strokeLinecap="round" strokeWidth="0.261972" />
                  <path d={svgPaths.p16d74680} stroke="var(--stroke-0, #6A3906)" strokeLinecap="round" strokeWidth="0.261972" />
                  <path d={svgPaths.p224022d0} stroke="var(--stroke-0, #6A3906)" strokeLinecap="round" strokeWidth="0.261972" />
                </g>
                <g>
                  <path d={svgPaths.p3d54c600} stroke="var(--stroke-0, #6A3906)" strokeLinecap="round" strokeWidth="0.261972" />
                  <path d={svgPaths.p28067180} stroke="var(--stroke-0, #6A3906)" strokeLinecap="round" strokeWidth="0.261972" />
                  <path d={svgPaths.p220e9600} stroke="var(--stroke-0, #6A3906)" strokeLinecap="round" strokeWidth="0.261972" />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    );
  },
  
  // 丑（牛） - 2021, 2033...
  function Ox({ size = 52 }: { size?: number }) {
    return (
      <div className="relative shrink-0" style={{ width: size, height: size }}>
        <div className="absolute inset-[-1.92%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
            <g>
              <circle cx="27" cy="27" fill="var(--fill-0, #F6FDFF)" r="26" stroke="var(--stroke-0, #4CAEAC)" strokeWidth="2" />
              <g>
                <path d={svgPaths.p2066980} fill="var(--fill-0, #6A3906)" />
                <path d={svgPaths.p32622c00} fill="var(--fill-0, #6A3906)" />
                <path d={svgPaths.p24642800} fill="var(--fill-0, #727171)" />
                <path d={svgPaths.p1f1d9b00} fill="var(--fill-0, #FFEBCE)" />
                <path d={svgPaths.p3357be00} fill="var(--fill-0, #FFEBCE)" />
                <path d={svgPaths.p3e191380} fill="var(--fill-0, #6A3906)" />
                <path d={svgPaths.p3c4dac00} fill="var(--fill-0, #6A3906)" />
                <circle cx="18.464" cy="26.7383" fill="var(--fill-0, #6A3906)" r="1.515" />
                <ellipse cx="17.9131" cy="29.906" fill="var(--fill-0, #FFCACA)" rx="2.34137" ry="1.10182" />
                <ellipse cx="35.2668" cy="29.906" fill="var(--fill-0, #FFCACA)" rx="2.34137" ry="1.10182" />
                <circle cx="35.2668" cy="26.4628" fill="var(--fill-0, #6A3906)" r="1.515" />
              </g>
            </g>
          </svg>
        </div>
      </div>
    );
  },
  
  // 寅（虎） - 2022, 2034...
  function Tiger({ size = 52 }: { size?: number }) {
    return (
      <div className="relative shrink-0" style={{ width: size, height: size }}>
        <div className="absolute inset-[-1.92%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
            <g>
              <circle cx="27" cy="27" fill="var(--fill-0, #F6FDFF)" r="26" stroke="var(--stroke-0, #4CAEAC)" strokeWidth="2" />
              <g>
                <path d={svgPaths.p29568e40} fill="var(--fill-0, #FFF100)" />
                <path d={svgPaths.p3ce06d00} fill="var(--fill-0, #FFF100)" />
                <path d={svgPaths.p34398400} fill="var(--fill-0, #FFF100)" />
                <path d={svgPaths.p30220a80} fill="var(--fill-0, #FFBBBB)" />
                <path d={svgPaths.p129e2180} fill="var(--fill-0, #FFBBBB)" />
                <path d={svgPaths.p73bb500} fill="var(--fill-0, #6A3906)" />
                <path d={svgPaths.pc856f00} fill="var(--fill-0, #6A3906)" />
                <path d={svgPaths.pa443500} fill="var(--fill-0, #6A3906)" />
                <path d={svgPaths.p1692bd00} fill="var(--fill-0, #6A3906)" />
                <path d={svgPaths.p2323e180} fill="var(--fill-0, #6A3906)" />
                <path d={svgPaths.pa3d6f00} fill="var(--fill-0, #6A3906)" />
                <path d={svgPaths.p2aeacb40} fill="var(--fill-0, #6A3906)" />
                <path d={svgPaths.p1dbbc600} fill="var(--fill-0, #6A3906)" />
                <path d={svgPaths.p32300f00} fill="var(--fill-0, #6A3906)" />
                <circle cx="17.7908" cy="31.6306" fill="var(--fill-0, #6A3906)" r="1.807" />
                <circle cx="35.8609" cy="31.6306" fill="var(--fill-0, #6A3906)" r="1.807" />
                <ellipse cx="38.0786" cy="34.8339" fill="var(--fill-0, #FFBBBB)" rx="2.54623" ry="1.39632" />
                <ellipse cx="16.3124" cy="34.9982" fill="var(--fill-0, #FFBBBB)" rx="2.79264" ry="1.56059" />
                <path d={svgPaths.p13e58580} fill="var(--fill-0, #FFEBCE)" />
                <path d={svgPaths.p3f9e860} stroke="var(--stroke-0, #6A3906)" strokeLinecap="round" strokeWidth="0.328546" />
                <path d={svgPaths.p2bd59300} fill="var(--fill-0, #FFBBBB)" />
              </g>
            </g>
          </svg>
        </div>
      </div>
    );
  },
  
  // 卯（うさぎ） - 2023, 2035...
  function Rabbit({ size = 52 }: { size?: number }) {
    return (
      <div className="relative shrink-0" style={{ width: size, height: size }}>
        <div className="absolute inset-[-1.92%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
            <g>
              <circle cx="27" cy="27" fill="var(--fill-0, #F6FDFF)" r="26" stroke="var(--stroke-0, #4CAEAC)" strokeWidth="2" />
              <g>
                <path d={svgPaths.pf564900} fill="var(--fill-0, #FFEBCE)" />
                <path d={svgPaths.p30d76e00} fill="var(--fill-0, #FDD8CF)" />
                <path d={svgPaths.p9bc6671} fill="var(--fill-0, #FDD8CF)" />
                <circle cx="20.5485" cy="34.308" fill="var(--fill-0, #6A3906)" r="1.05707" />
                <circle cx="31.7799" cy="34.308" fill="var(--fill-0, #6A3906)" r="1.05707" />
                <ellipse cx="26.0981" cy="35.3651" fill="var(--fill-0, #FFCACA)" rx="1.32134" ry="0.792805" />
                <ellipse cx="18.5664" cy="37.215" fill="var(--fill-0, #FFCACA)" rx="1.71774" ry="0.792805" />
                <ellipse cx="33.894" cy="37.215" fill="var(--fill-0, #FFCACA)" rx="1.71774" ry="0.792805" />
                <path d={svgPaths.p31a98380} fill="var(--stroke-0, #6A3906)" />
              </g>
            </g>
          </svg>
        </div>
      </div>
    );
  },
  
  // 辰（龍） - 2024, 2036...
  function Dragon({ size = 52 }: { size?: number }) {
    return (
      <div className="relative shrink-0" style={{ width: size, height: size }}>
        <div className="absolute inset-[-1.92%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
            <g>
              <circle cx="27" cy="27" fill="var(--fill-0, #F6FDFF)" r="26" stroke="var(--stroke-0, #4CAEAC)" strokeWidth="2" />
              <g>
                <path d={svgPaths.p20858e00} fill="var(--fill-0, #FFEBCE)" />
                <path d={svgPaths.p2ef58400} fill="var(--fill-0, #8FC31F)" />
                <path d={svgPaths.p176b4400} fill="var(--fill-0, #A66015)" stroke="var(--stroke-0, #7F5324)" strokeWidth="0.442177" />
                <path d={svgPaths.p3f725700} fill="var(--fill-0, #A66015)" stroke="var(--stroke-0, #7F5324)" strokeWidth="0.442177" />
                <g>
                  <path d={svgPaths.p202d5780} stroke="var(--stroke-0, #00913A)" strokeWidth="0.442177" />
                  <path d={svgPaths.p2e98bd00} stroke="var(--stroke-0, #00913A)" strokeWidth="0.442177" />
                  <path d={svgPaths.p2b7cce00} stroke="var(--stroke-0, #00913A)" strokeWidth="0.442177" />
                </g>
                <path d={svgPaths.p1e6baf00} stroke="var(--stroke-0, #7F5324)" strokeWidth="0.442177" />
                <path d={svgPaths.p1ff7b880} stroke="var(--stroke-0, #7F5324)" strokeWidth="0.442177" />
                <path d={svgPaths.p2aeb1900} stroke="var(--stroke-0, #7F5324)" strokeWidth="0.442177" />
                <path d={svgPaths.p2e199540} stroke="var(--stroke-0, #7F5324)" strokeWidth="0.442177" />
                <path d={svgPaths.pc831680} fill="var(--fill-0, #C9A063)" />
                <path d={svgPaths.p32329f00} fill="var(--fill-0, #C9A063)" />
                <circle cx="19.8239" cy="32.3958" fill="var(--fill-0, #6A3906)" r="1.17914" />
                <ellipse cx="18.2026" cy="34.7541" fill="var(--fill-0, #FFCACA)" rx="1.76871" ry="0.884354" />
                <ellipse cx="36.037" cy="34.7541" fill="var(--fill-0, #FFCACA)" rx="1.76871" ry="0.884354" />
                <circle cx="35.4475" cy="31.9537" fill="var(--fill-0, #6A3906)" r="1.17914" />
              </g>
            </g>
          </svg>
        </div>
      </div>
    );
  },
  
  // 巳（蛇） - 2025, 2037...
  function Snake({ size = 52 }: { size?: number }) {
    return (
      <div className="relative shrink-0" style={{ width: size, height: size }}>
        <div className="absolute inset-[-1.92%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
            <g>
              <circle cx="27" cy="27" fill="var(--fill-0, #F6FDFF)" r="26" stroke="var(--stroke-0, #4CAEAC)" strokeWidth="2" />
              <g>
                <path d={svgPaths.p1bc5b200} fill="var(--fill-0, #E24450)" />
                <path d={svgPaths.p3821500} fill="var(--fill-0, #D4FFAB)" />
                <circle cx="17.6033" cy="30.7903" fill="var(--fill-0, #6A3906)" r="1.65414" />
                <circle cx="36.3503" cy="30.4228" fill="var(--fill-0, #6A3906)" r="1.65414" />
                <ellipse cx="25.1803" cy="39.0106" fill="var(--fill-0, #6A3906)" rx="1.01712" ry="0.678079" transform="rotate(36.988 25.1803 39.0106)" />
                <ellipse cx="15.4897" cy="34.2825" fill="var(--fill-0, #FAD1C6)" rx="1.92983" ry="1.28655" />
                <ellipse cx="38.0963" cy="34.2825" fill="var(--fill-0, #FAD1C6)" rx="1.92983" ry="1.28655" />
                <ellipse cx="1.01712" cy="0.678079" fill="var(--fill-0, #6A3906)" rx="1.01712" ry="0.678079" transform="matrix(-0.798762 0.601647 0.601647 0.798762 28.9692 37.7745)" />
              </g>
            </g>
          </svg>
        </div>
      </div>
    );
  },
  
  // 午（馬） - 2026, 2038...
  function Horse({ size = 52 }: { size?: number }) {
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
  },
  
  // 未（羊） - 2027, 2039...
  function Goat({ size = 52 }: { size?: number }) {
    return (
      <div className="relative shrink-0" style={{ width: size, height: size }}>
        <div className="absolute inset-[-1.92%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
            <g>
              <circle cx="27" cy="27" fill="var(--fill-0, #ECF1F6)" r="26" stroke="var(--stroke-0, #4CAEAC)" strokeWidth="2" />
              <g>
                <path d={svgPaths.p3fe04980} fill="var(--fill-0, white)" />
                <path d={svgPaths.pf55ac00} fill="var(--fill-0, #C9A063)" />
                <path d={svgPaths.p29013100} fill="var(--fill-0, #C9A063)" />
                <path d={svgPaths.p3449ae00} fill="var(--fill-0, #FCF8C5)" />
                <g>
                  <circle cx="21.3105" cy="30.1425" fill="var(--fill-0, #6A3906)" r="0.956017" />
                  <circle cx="32.1852" cy="30.023" fill="var(--fill-0, #6A3906)" r="0.956017" />
                  <ellipse cx="19.8167" cy="32.8911" fill="var(--fill-0, #FFCACA)" rx="1.13527" ry="0.836515" />
                  <ellipse cx="33.44" cy="32.5326" fill="var(--fill-0, #FFCACA)" rx="1.13527" ry="0.836515" />
                </g>
                <g>
                  <path d={svgPaths.p3b4c3600} stroke="var(--stroke-0, #7F5324)" strokeLinecap="round" strokeWidth="0.119502" />
                  <path d={svgPaths.p6943e80} stroke="var(--stroke-0, #7F5324)" strokeLinecap="round" strokeWidth="0.119502" />
                  <path d={svgPaths.pfead800} stroke="var(--stroke-0, #7F5324)" strokeLinecap="round" strokeWidth="0.119502" />
                  <path d={svgPaths.pe1e4f48} stroke="var(--stroke-0, #7F5324)" strokeLinecap="round" strokeWidth="0.119502" />
                  <path d={svgPaths.p1df7fd40} stroke="var(--stroke-0, #7F5324)" strokeLinecap="round" strokeWidth="0.119502" />
                  <path d={svgPaths.p1b1c61a0} stroke="var(--stroke-0, #7F5324)" strokeLinecap="round" strokeWidth="0.119502" />
                  <path d={svgPaths.p14fbd100} stroke="var(--stroke-0, #7F5324)" strokeLinecap="round" strokeWidth="0.119502" />
                  <path d={svgPaths.p1a220980} stroke="var(--stroke-0, #7F5324)" strokeLinecap="round" strokeWidth="0.119502" />
                  <path d={svgPaths.pfe3d280} stroke="var(--stroke-0, #7F5324)" strokeLinecap="round" strokeWidth="0.119502" />
                </g>
                <g>
                  <path d={svgPaths.p3a58fdf0} stroke="var(--stroke-0, #7F5324)" strokeLinecap="round" strokeWidth="0.119502" />
                  <path d={svgPaths.pc3c6c00} stroke="var(--stroke-0, #7F5324)" strokeLinecap="round" strokeWidth="0.119502" />
                  <path d={svgPaths.p25c9e200} stroke="var(--stroke-0, #7F5324)" strokeLinecap="round" strokeWidth="0.119502" />
                  <path d={svgPaths.p15a5a400} stroke="var(--stroke-0, #7F5324)" strokeLinecap="round" strokeWidth="0.119502" />
                  <path d={svgPaths.p3807dc80} stroke="var(--stroke-0, #7F5324)" strokeLinecap="round" strokeWidth="0.119502" />
                  <path d={svgPaths.p3ffcea80} stroke="var(--stroke-0, #7F5324)" strokeLinecap="round" strokeWidth="0.119502" />
                  <path d={svgPaths.p1eea3e00} stroke="var(--stroke-0, #7F5324)" strokeLinecap="round" strokeWidth="0.119502" />
                  <path d={svgPaths.p2307ec80} stroke="var(--stroke-0, #7F5324)" strokeLinecap="round" strokeWidth="0.119502" />
                  <path d={svgPaths.p28276100} stroke="var(--stroke-0, #7F5324)" strokeLinecap="round" strokeWidth="0.119502" />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    );
  },
  
  // 申（猿） - 2028, 2040...
  function Monkey({ size = 52 }: { size?: number }) {
    return (
      <div className="relative shrink-0" style={{ width: size, height: size }}>
        <div className="absolute inset-[-1.92%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
            <g>
              <circle cx="27" cy="27" fill="var(--fill-0, #ECF1F6)" r="26" stroke="var(--stroke-0, #4CAEAC)" strokeWidth="2" />
              <g>
                <path d={svgPaths.p2bcb26f0} fill="var(--fill-0, #6A3906)" />
                <path d={svgPaths.p3cd0e380} fill="var(--fill-0, #FFFEEC)" />
                <ellipse cx="34.4725" cy="33.0234" fill="var(--fill-0, #F8C2BF)" rx="1.45578" ry="1.09184" />
                <ellipse cx="19.4293" cy="34.6006" fill="var(--fill-0, #F8C2BF)" rx="1.45578" ry="1.09184" />
                <g>
                  <path d={svgPaths.p13a03d80} stroke="var(--stroke-0, #7F5324)" strokeWidth="0.24263" />
                  <path d={svgPaths.pa13b600} stroke="var(--stroke-0, #7F5324)" strokeWidth="0.24263" />
                  <path d={svgPaths.p28ce2740} stroke="var(--stroke-0, #F8C2BF)" strokeWidth="0.24263" />
                  <circle cx="21.5523" cy="31.2645" fill="var(--fill-0, #6A3906)" r="1.27381" />
                  <circle cx="32.1068" cy="30.6579" fill="var(--fill-0, #6A3906)" r="1.27381" />
                  <line stroke="var(--stroke-0, #6A3906)" strokeLinecap="round" strokeWidth="0.363946" x1="26.359" x2="26.8296" y1="34.9645" y2="35.435" />
                  <line stroke="var(--stroke-0, #6A3906)" strokeLinecap="round" strokeWidth="0.363946" x1="27.8001" x2="27.4509" y1="35.1006" y2="35.4499" />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    );
  },
  
  // 酉（鳥） - 2029, 2041...
  function Rooster({ size = 52 }: { size?: number }) {
    return (
      <div className="relative shrink-0" style={{ width: size, height: size }}>
        <div className="absolute inset-[-1.92%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
            <circle cx="27" cy="27" fill="var(--fill-0, #F6FDFF)" r="26" stroke="var(--stroke-0, #4CAEAC)" strokeWidth="2" />
            <g transform="translate(8, 5)">
              <path d={svgPaths.p5638a00} fill="var(--fill-0, #FFEBCE)" />
              <path d={svgPaths.p328ad600} fill="var(--fill-0, #F6D700)" />
              <path d={svgPaths.p13a2d100} fill="var(--fill-0, #E60012)" />
              <path d={svgPaths.pe18d00} fill="var(--fill-0, #FFEBCE)" />
              <circle cx="9.77264" cy="18.5532" fill="var(--fill-0, #40220F)" r="1.36309" />
              <circle cx="25.8269" cy="19.159" fill="var(--fill-0, #40220F)" r="1.36309" />
              <ellipse cx="7.50082" cy="23.4755" fill="var(--fill-0, #FFCACA)" rx="2.12037" ry="1.43882" />
              <ellipse cx="27.1899" cy="23.1726" fill="var(--fill-0, #FFCACA)" rx="2.12037" ry="1.43882" />
            </g>
          </svg>
        </div>
      </div>
    );
  },
  
  // 戌（犬） - 2030, 2042...
  function Dog({ size = 52 }: { size?: number }) {
    return (
      <div className="relative shrink-0" style={{ width: size, height: size }}>
        <div className="absolute inset-[-1.92%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
            <g>
              <circle cx="27" cy="27" fill="var(--fill-0, #F6FDFF)" r="26" stroke="var(--stroke-0, #4CAEAC)" strokeWidth="2" />
              <g>
                <path d={svgPaths.p26a7eb00} fill="var(--fill-0, #FCC368)" />
                <path d={svgPaths.p1deb4000} fill="var(--fill-0, #FCC368)" />
                <path d={svgPaths.p1b468300} fill="var(--fill-0, #FFCACA)" />
                <path d={svgPaths.p30621b60} fill="var(--fill-0, #FFEBCE)" />
                <path d={svgPaths.p237668b0} fill="var(--fill-0, #FCC368)" />
                <path d={svgPaths.p2124dc00} fill="var(--fill-0, #FFCACA)" />
                <circle cx="17.85" cy="29.4167" fill="var(--fill-0, #543A2A)" r="1.74033" />
                <circle cx="35.4274" cy="29.5908" fill="var(--fill-0, #543A2A)" r="1.74033" />
                <ellipse cx="20.2865" cy="24.1958" fill="var(--fill-0, #FFEBCE)" rx="2.0884" ry="1.21823" transform="rotate(9.60309 20.2865 24.1958)" />
                <ellipse cx="2.0884" cy="1.21823" fill="var(--fill-0, #FFEBCE)" rx="2.0884" ry="1.21823" transform="matrix(-0.985987 0.166822 0.166822 0.985987 35.5429 22.6295)" />
                <ellipse cx="2.20473" cy="1.28609" fill="var(--fill-0, #FFCACA)" rx="2.20473" ry="1.28609" transform="matrix(-0.993569 0.11323 0.11323 0.993569 40.2073 32.6428)" />
                <ellipse cx="15.8354" cy="33.3807" fill="var(--fill-0, #FFCACA)" rx="2.20473" ry="1.28609" transform="rotate(6.50152 15.8354 33.3807)" />
                <path d={svgPaths.p99e8dc0} fill="var(--fill-0, #73420C)" />
              </g>
            </g>
          </svg>
        </div>
      </div>
    );
  },
  
  // 亥（猪） - 2031, 2043...
  function Boar({ size = 52 }: { size?: number }) {
    return (
      <div className="relative shrink-0" style={{ width: size, height: size }}>
        <div className="absolute inset-[-1.92%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
            <g>
              <circle cx="27" cy="27" fill="var(--fill-0, #F6FDFF)" r="26" stroke="var(--stroke-0, #4CAEAC)" strokeWidth="2" />
              <g>
                <path d={svgPaths.p39687900} fill="var(--fill-0, #C69C6D)" />
                <path d={svgPaths.p2b141a00} fill="var(--fill-0, white)" />
                <path d={svgPaths.p321e0ff0} fill="var(--fill-0, white)" />
                <path d={svgPaths.p29ab4500} fill="var(--fill-0, #FFCACA)" />
                <path d={svgPaths.pa30ea00} stroke="var(--stroke-0, #6A3906)" strokeLinecap="round" strokeWidth="0.343584" />
                <path d={svgPaths.p3ec46900} stroke="var(--stroke-0, #6A3906)" strokeLinecap="round" strokeWidth="0.343584" />
                <path d={svgPaths.p6cbe80} stroke="var(--stroke-0, #6A3906)" strokeLinecap="round" strokeWidth="0.343584" />
                <path d={svgPaths.p1eb86400} stroke="var(--stroke-0, #6A3906)" strokeLinecap="round" strokeWidth="0.343584" />
                <path d={svgPaths.p29f9ff80} stroke="var(--stroke-0, #6A3906)" strokeLinecap="round" strokeWidth="0.343584" />
                <path d={svgPaths.p3f105400} stroke="var(--stroke-0, #6A3906)" strokeLinecap="round" strokeWidth="0.343584" />
                <path d={svgPaths.p3d9a9f00} fill="var(--fill-0, #C69C6D)" />
                <path d={svgPaths.p43b0600} fill="var(--fill-0, #C69C6D)" />
                <circle cx="15.3149" cy="27.2699" fill="var(--fill-0, #6A3906)" r="1.88971" />
                <ellipse cx="14.1982" cy="30.8775" fill="var(--fill-0, #FFCACA)" rx="2.83457" ry="1.37434" />
                <ellipse cx="36.8748" cy="30.1904" fill="var(--fill-0, #FFCACA)" rx="2.83457" ry="1.37434" />
                <circle cx="36.2735" cy="26.5828" fill="var(--fill-0, #6A3906)" r="1.88971" />
              </g>
            </g>
          </svg>
        </div>
      </div>
    );
  },
];

// 干支の名前（表示用）
const zodiacNames = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];

interface ZodiacSliderProps {
  selectedYear: number;
  onYearChange: (year: number) => void;
}

export default function ZodiacSlider({ selectedYear, onYearChange }: ZodiacSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);

  // 年から干支のインデックスを計算（2020年=子年を基準）
  // 負の数にも対応
  const getZodiacIndex = (year: number) => {
    const index = (year - 2020) % 12;
    return index >= 0 ? index : index + 12;
  };

  const currentZodiacIndex = getZodiacIndex(selectedYear);

  // スワイプ検知
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    // 50px以上のスワイプで反応
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // 左にスワイプ = 未来へ（年を増やす）
        onYearChange(selectedYear + 1);
      } else {
        // 右にスワイプ = 過去へ（年を減らす）
        onYearChange(selectedYear - 1);
      }
    }
  };

  // 表示する5つの干支を取得（中央±2）
  const getVisibleZodiacs = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      const year = selectedYear + i;
      const index = getZodiacIndex(year);
      const ZodiacComponent = zodiacComponents[index];
      
      if (!ZodiacComponent) {
        console.error(`Zodiac component not found for index ${index}, year ${year}`);
        continue;
      }
      
      const size = i === 0 ? 52 : Math.abs(i) === 1 ? 44 : 34;
      const opacity = Math.abs(i) === 2 ? 0.6 : 1;

      visible.push({
        year,
        index,
        component: ZodiacComponent,
        size,
        opacity,
        isCurrent: i === 0,
      });
    }
    return visible;
  };

  const visibleZodiacs = getVisibleZodiacs();

  return (
    <div className="absolute left-1/2 top-[95.5px] -translate-x-1/2 z-10">
      <div
        ref={sliderRef}
        className="flex gap-[22px] items-center cursor-pointer select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {visibleZodiacs.map(({ year, component: ZodiacComponent, size, opacity, isCurrent }, idx) => (
          <div
            key={`zodiac-${year}-${idx}`}
            onClick={() => onYearChange(year)}
            className="transition-all duration-300 ease-out"
            style={{
              opacity,
              transform: isCurrent ? "scale(1)" : "scale(0.95)",
            }}
          >
            <ZodiacComponent size={size} />
          </div>
        ))}
      </div>
      
      {/* 年表示 */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[60px] pointer-events-none">
        <p className="font-['Montserrat:Medium',sans-serif] text-[16px] leading-[20px] text-center text-white tracking-[0.064px] whitespace-nowrap">
          {selectedYear}
        </p>
      </div>
      
      {/* Aimryタイトル */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[-30px] pointer-events-none">
        <p className="font-['Montserrat:Medium',sans-serif] text-[16px] leading-[20px] text-center text-white tracking-[0.064px] whitespace-nowrap">
          Aimry
        </p>
      </div>
    </div>
  );
}