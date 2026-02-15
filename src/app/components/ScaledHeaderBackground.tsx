import { useLayoutEffect, useRef, useState } from "react";

type ScaledHeaderBackgroundProps = {
  pathD: string;
  fill?: string;
  baseWidth?: number;
  svgWidth?: number;
  svgHeight?: number;
  viewBox?: string;
  className?: string;
};

export default function ScaledHeaderBackground({
  pathD,
  fill = "#28858A",
  baseWidth = 375,
  svgWidth = 456,
  svgHeight = 328,
  viewBox = "0 0 456 328",
  className = "",
}: ScaledHeaderBackgroundProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      const width = el.getBoundingClientRect().width;
      if (!width || !Number.isFinite(width)) return;
      setScale(width / baseWidth);
    };

    update();
    const ro = new ResizeObserver(() => update());
    ro.observe(el);

    return () => ro.disconnect();
  }, [baseWidth]);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className={`absolute inset-0 pointer-events-none ${className}`}
    >
      <div
        className="absolute top-0 left-1/2"
        style={{
          width: svgWidth,
          height: svgHeight,
          transform: `translateX(-50%) scale(${scale})`,
          transformOrigin: "top center",
        }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={viewBox}>
          <path d={pathD} fill={fill} />
        </svg>
      </div>
    </div>
  );
}
