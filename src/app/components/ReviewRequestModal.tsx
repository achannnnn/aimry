import { X } from "lucide-react";

interface ReviewRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLater: () => void;
  onRate: () => void;
}

export default function ReviewRequestModal({ isOpen, onClose, onLater, onRate }: ReviewRequestModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="bg-white rounded-[16px] p-[20px] w-full max-w-[320px] relative animate-in fade-in zoom-in duration-200">
        <button
          onClick={onClose}
          className="absolute right-[12px] top-[12px] text-gray-400 hover:text-gray-600"
          aria-label="閉じる"
        >
          <X className="size-[20px]" />
        </button>

        <p className="font-['Nunito_Sans_7pt_SemiExpanded:Bold','Noto_Sans_JP:Bold',sans-serif] text-[16px] text-[#238B8A] text-center mb-[8px]">
          よければ評価お願いします
        </p>
        <p className="font-['Nunito_Sans_7pt_SemiExpanded:Medium','Noto_Sans_JP:Medium',sans-serif] text-[12px] text-[#7b7b7b] text-center mb-[16px]">
          使ってみて良かったら、App Storeでの評価にご協力ください。
        </p>

        <div className="flex gap-[10px]">
          <button
            type="button"
            onClick={onLater}
            className="flex-1 bg-gray-100 text-gray-700 rounded-[10px] py-[10px] font-['Nunito_Sans_7pt_SemiExpanded:SemiBold','Noto_Sans_JP:Bold',sans-serif] text-[14px] hover:bg-gray-200 transition-colors"
          >
            後で
          </button>
          <button
            type="button"
            onClick={onRate}
            className="flex-1 bg-[#238B8A] text-white rounded-[10px] py-[10px] font-['Nunito_Sans_7pt_SemiExpanded:SemiBold','Noto_Sans_JP:Bold',sans-serif] text-[14px] hover:bg-[#1a6d72] transition-colors"
          >
            評価する
          </button>
        </div>
      </div>
    </div>
  );
}
