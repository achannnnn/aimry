import frameSvgPaths from "../../imports/svg-yb0hjr0zmj";

type ScaledHeaderBackgroundProps = {
  pathD: string;
  fill?: string;
  viewBox?: string;
  className?: string;
};

export default function ScaledHeaderBackground({
  pathD,
  fill = "#28858A",
  viewBox = "0 0 375 234",
  className = "",
}: ScaledHeaderBackgroundProps) {
  return (
    <div
      aria-hidden
      className={`absolute inset-0 pointer-events-none ${className}`}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={viewBox}>
        <path d={frameSvgPaths.p172fee00 || pathD} fill={fill} />
      </svg>
    </div>
  );
}
