import { X } from "lucide-react";
import { SortOption } from "../types/goal";

interface SortModalProps {
  isOpen: boolean;
  currentSort: SortOption;
  onClose: () => void;
  onSortChange: (option: SortOption) => void;
}

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "newest", label: "登録順（新しい順）" },
  { value: "oldest", label: "登録逆順（古い順）" },
  { value: "progressHigh", label: "達成率が高い順" },
  { value: "progressLow", label: "達成率が低い順" },
];

export default function SortModal({ isOpen, currentSort, onClose, onSortChange }: SortModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-[16px] w-full max-w-[320px] relative animate-in fade-in zoom-in duration-200">
        {/* ヘッダー */}
        <div className="flex items-center justify-between p-[20px] border-b border-gray-200">
          <h2 className="font-['Nunito_Sans_7pt_SemiExpanded:Bold','Noto_Sans_JP:Bold',sans-serif] text-[18px] text-[#238B8A]">
            並び替え
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="size-[24px]" />
          </button>
        </div>

        {/* オプションリスト */}
        <div className="p-[8px]">
          {sortOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => onSortChange(option.value)}
              className={`w-full text-left p-[16px] rounded-[8px] font-['Nunito_Sans_7pt_SemiExpanded:Medium','Noto_Sans_JP:Medium',sans-serif] text-[16px] transition-colors ${
                currentSort === option.value
                  ? "bg-[#E6F9FD] text-[#238B8A] font-bold"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{option.label}</span>
                {currentSort === option.value && (
                  <span className="text-[#238B8A]">✓</span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
