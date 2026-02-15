import { X } from "lucide-react";

interface FilterModalProps {
  isOpen: boolean;
  selectedTags: string[];
  availableTags: string[];
  onClose: () => void;
  onTagToggle: (tag: string) => void;
  onClearFilter: () => void;
}

export default function FilterModal({ 
  isOpen, 
  selectedTags, 
  availableTags,
  onClose, 
  onTagToggle,
  onClearFilter
}: FilterModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-[16px] w-full max-w-[320px] relative animate-in fade-in zoom-in duration-200">
        {/* ヘッダー */}
        <div className="flex items-center justify-between p-[20px] border-b border-gray-200">
          <h2 className="font-['Nunito_Sans_7pt_SemiExpanded:Bold','Noto_Sans_JP:Bold',sans-serif] text-[18px] text-[#238B8A]">
            タグで絞り込み
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="size-[24px]" />
          </button>
        </div>

        {/* タグリスト */}
        <div className="p-[20px]">
          {/* すべて表示オプション */}
          <button
            onClick={onClearFilter}
            className={`w-full text-left p-[16px] rounded-[8px] font-['Nunito_Sans_7pt_SemiExpanded:Medium','Noto_Sans_JP:Medium',sans-serif] text-[16px] transition-colors mb-[8px] ${
              selectedTags.length === 0
                ? "bg-[#E6F9FD] text-[#238B8A] font-bold"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <div className="flex items-center justify-between">
              <span>すべて表示</span>
              {selectedTags.length === 0 && (
                <span className="text-[#238B8A]">✓</span>
              )}
            </div>
          </button>

          {/* タグオプション */}
          <div className="space-y-[8px]">
            {availableTags.map((tag) => (
              <button
                key={tag}
                onClick={() => onTagToggle(tag)}
                className={`w-full text-left p-[16px] rounded-[8px] font-['Nunito_Sans_7pt_SemiExpanded:Medium','Noto_Sans_JP:Medium',sans-serif] text-[16px] transition-colors ${
                  selectedTags.includes(tag)
                    ? "bg-[#E6F9FD] text-[#238B8A] font-bold"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{tag}</span>
                  {selectedTags.includes(tag) && (
                    <span className="text-[#238B8A]">✓</span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* フッター */}
        <div className="p-[20px] border-t border-gray-200">
          <button
            onClick={onClose}
            className="w-full bg-[#238B8A] text-white py-[12px] rounded-[8px] font-['Nunito_Sans_7pt_SemiExpanded:Bold','Noto_Sans_JP:Bold',sans-serif] text-[16px] hover:bg-[#1a6b6a] transition-colors"
          >
            適用
          </button>
        </div>
      </div>
    </div>
  );
}
