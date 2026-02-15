import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { Goal } from "../types/goal";

interface GoalCardProps {
  goal: Goal;
  index: number;
  progressPercentage: number;
  isCompleted: boolean;
  isOverdue: boolean;
  daysUntilDeadline: number;
  onCardClick: (goalId: string) => void;
  onProgressClick: (e: React.MouseEvent, goal: Goal) => void;
  moveGoal: (dragIndex: number, hoverIndex: number) => void;
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}

export default function GoalCard({
  goal,
  index,
  progressPercentage,
  isCompleted,
  isOverdue,
  daysUntilDeadline,
  onCardClick,
  onProgressClick,
  moveGoal,
}: GoalCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [{ handlerId }, drop] = useDrop({
    accept: "goal-card",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = (clientOffset?.y || 0) - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveGoal(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "goal-card",
    item: () => {
      return { id: goal.id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  const cardBgColor = isCompleted ? "bg-[#FFF7F7]" : "bg-[#E6F9FD]";
  const progressColor = isCompleted ? "#EC7A77" : "#238B8A";
  const textColor = isCompleted ? "text-[#EC7A77]" : "text-[#238B8A]";
  const bubbleBgColor = isCompleted ? "bg-[#FFF2F2]" : "bg-[#CEF1F8]";
  const bubbleMessage = isCompleted ? "あなたの勝ちです" : isOverdue ? "またがんばろ" : `残り${daysUntilDeadline}日`;

  // 円グラフのSVG生成
  const circleRadius = 55;
  const circleCircumference = 2 * Math.PI * circleRadius;
  // 表示数値は100%以上も出しつつ、円グラフの描画だけは100%で頭打ち
  const ringPercentage = Math.min(progressPercentage, 100);
  const strokeDashoffset = circleCircumference - (ringPercentage / 100) * circleCircumference;

  return (
    <div
      ref={ref}
      data-handler-id={handlerId}
      onClick={() => onCardClick(goal.id)}
      className={`${cardBgColor} rounded-[8px] p-[16px] shadow-md cursor-pointer transition-all duration-200 w-full ${ 
        isDragging ? "opacity-50 scale-95" : "opacity-100 scale-100 hover:scale-[1.02]"
      }`}
      style={{
        boxShadow: isDragging ? "0px 8px 16px rgba(0, 0, 0, 0.2)" : "0px 1px 4px rgba(230, 249, 253, 0.5)",
      }}
    >
      {/* 円グラフ */}
      <div
        onClick={(e) => onProgressClick(e, goal)}
        className="relative w-[130px] h-[130px] mx-auto mb-[16px] cursor-pointer hover:scale-105 transition-transform duration-200"
      >
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 130 130">
          {/* 背景の円 */}
          <circle
            cx="65"
            cy="65"
            r={circleRadius}
            fill="white"
            stroke={progressColor}
            strokeWidth="20"
            opacity="0.2"
          />
          {/* 進捗の円 */}
          <circle
            cx="65"
            cy="65"
            r={circleRadius}
            fill="none"
            stroke={progressColor}
            strokeWidth="20"
            strokeDasharray={circleCircumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{
              transition: "stroke-dashoffset 0.5s ease",
            }}
          />
        </svg>
        
        {/* パーセンテージ表示 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p className={`font-['Montserrat:Regular',sans-serif] ${textColor}`}>
            <span className="text-[22px] leading-[20px]">{progressPercentage}</span>
            <span className="text-[15px] leading-[20px]">%</span>
          </p>
        </div>
      </div>

      {/* 目標タイトル */}
      <div className="relative mb-[12px]">
        <div className={`bg-white rounded-[4px] p-[10px] min-h-[48px] flex items-center justify-center relative`}>
          <p className={`font-['Nunito_Sans_7pt_SemiExpanded:Medium','Noto_Sans_JP:Medium',sans-serif] ${textColor} text-center leading-[1.4] tracking-[0.064px] break-words line-clamp-2`}
             style={{ fontSize: goal.title.length >= 7 ? '10px' : '16px' }}>
            {goal.title}
          </p>
          {/* 右下の小さな三角形 */}
          <div className="absolute right-0 bottom-0">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M10 0V6C10 8.20914 8.20914 10 6 10H0L10 0Z" fill={progressColor} />
            </svg>
          </div>
        </div>
      </div>

      {/* 吹き出し */}
      <div className="relative">
        <div className={`${bubbleBgColor} rounded-[8px] py-[6px] px-[12px] relative`}>
          <p className={`font-['Nunito_Sans_7pt_SemiExpanded:SemiBold','Noto_Sans_JP:Bold',sans-serif] ${textColor} text-[10px] text-center`}>
            {bubbleMessage}
          </p>
          {/* 吹き出しの三角形 */}
          <div className="absolute left-[16px] top-[-6px]">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M6 0L12 8H0L6 0Z" fill={isCompleted ? "#FFF2F2" : "#CEF1F8"} />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}