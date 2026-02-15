import { useState } from "react";
import { X } from "lucide-react";
import { Goal } from "../types/goal";

interface ProgressModalProps {
  goal: Goal;
  onClose: () => void;
  onUpdate: (goalId: string, newProgress: number) => void;
}

export default function ProgressModal({ goal, onClose, onUpdate }: ProgressModalProps) {
  const [inputValue, setInputValue] = useState(goal.progress.toString());

  const currentProgress = goal.target > 0 ? Math.round((goal.progress / goal.target) * 100) : 0;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // 数字のみ許可
    if (value === "" || /^\d+$/.test(value)) {
      setInputValue(value);
    }
  };

  const handleSave = () => {
    const newProgress = parseInt(inputValue) || 0;
    onUpdate(goal.id, newProgress);
  };

  const calculatedProgress = goal.target > 0
    ? Math.round((parseInt(inputValue || "0") / goal.target) * 100)
    : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-[16px] p-[24px] w-full max-w-[320px] relative animate-in fade-in zoom-in duration-200">
        {/* 閉じるボタン */}
        <button
          onClick={onClose}
          className="absolute right-[16px] top-[16px] text-gray-400 hover:text-gray-600"
        >
          <X className="size-[24px]" />
        </button>

        {/* タイトル */}
        <h2 className="font-['Nunito_Sans_7pt_SemiExpanded:Bold','Noto_Sans_JP:Bold',sans-serif] text-[20px] text-[#238B8A] text-center mb-[24px]">
          進捗を更新
        </h2>

        {/* 目標タイトル */}
        <div className="bg-[#E6F9FD] rounded-[8px] p-[12px] mb-[24px]">
          <p className="font-['Nunito_Sans_7pt_SemiExpanded:Medium','Noto_Sans_JP:Medium',sans-serif] text-[14px] text-[#238B8A] text-center">
            {goal.title}
          </p>
        </div>

        {/* 現在の進捗 */}
        <div className="mb-[16px]">
          <p className="font-['Nunito_Sans_7pt_SemiExpanded:SemiBold','Noto_Sans_JP:Bold',sans-serif] text-[14px] text-gray-600 mb-[8px]">
            現在の進捗: {currentProgress}% ({goal.progress}/{goal.target})
          </p>
        </div>

        {/* 入力フィールド */}
        <div className="mb-[24px]">
          <label className="block font-['Nunito_Sans_7pt_SemiExpanded:SemiBold','Noto_Sans_JP:Bold',sans-serif] text-[14px] text-gray-700 mb-[8px]">
            新しい進捗値
          </label>
          <div className="relative">
            <input
              type="text"
              inputMode="numeric"
              value={inputValue}
              onChange={handleInputChange}
              className="w-full border-2 border-[#238B8A] rounded-[8px] p-[12px] text-[18px] text-center font-['Montserrat:SemiBold',sans-serif] focus:outline-none focus:ring-2 focus:ring-[#238B8A]"
              placeholder="0"
            />
            <span className="absolute right-[12px] top-1/2 -translate-y-1/2 text-gray-400 text-[14px]">
              / {goal.target}
            </span>
          </div>
        </div>

        {/* 計算された進捗率 */}
        <div className="bg-[#F0F0F0] rounded-[8px] p-[12px] mb-[24px]">
          <p className="font-['Montserrat:Bold',sans-serif] text-[24px] text-[#238B8A] text-center">
            {calculatedProgress}%
          </p>
          <p className="font-['Nunito_Sans_7pt_SemiExpanded:Medium','Noto_Sans_JP:Medium',sans-serif] text-[12px] text-gray-600 text-center">
            達成率
          </p>
        </div>

        {/* ボタン */}
        <div className="flex gap-[12px]">
          <button
            onClick={onClose}
            className="flex-1 bg-gray-200 text-gray-700 rounded-[8px] py-[12px] font-['Nunito_Sans_7pt_SemiExpanded:SemiBold','Noto_Sans_JP:Bold',sans-serif] text-[16px] hover:bg-gray-300 transition-colors"
          >
            キャンセル
          </button>
          <button
            onClick={handleSave}
            className="flex-1 bg-[#238B8A] text-white rounded-[8px] py-[12px] font-['Nunito_Sans_7pt_SemiExpanded:SemiBold','Noto_Sans_JP:Bold',sans-serif] text-[16px] hover:bg-[#1a6d72] transition-colors"
          >
            保存
          </button>
        </div>
      </div>
    </div>
  );
}
