import { X } from "lucide-react";

interface DeleteConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  goalTitle: string;
}

export default function DeleteConfirmModal({ 
  isOpen, 
  onClose, 
  onConfirm, 
  goalTitle 
}: DeleteConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-[16px] w-full max-w-[320px] relative animate-in fade-in zoom-in duration-200">
        {/* ヘッダー */}
        <div className="flex items-center justify-between p-[20px] border-b border-gray-200">
          <h2 className="font-['Nunito_Sans_7pt_SemiExpanded:Bold','Noto_Sans_JP:Bold',sans-serif] text-[18px] text-[#238B8A]">
            目標を削除
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="size-[24px]" />
          </button>
        </div>

        {/* メッセージ */}
        <div className="p-[20px]">
          <p className="font-['Nunito_Sans_7pt_SemiExpanded:Medium','Noto_Sans_JP:Medium',sans-serif] text-[16px] text-gray-700 text-center mb-[4px]">
            本当にこの目標を削除しますか？
          </p>
          <p className="font-['Nunito_Sans_7pt_SemiExpanded:Bold','Noto_Sans_JP:Bold',sans-serif] text-[14px] text-[#238B8A] text-center">
            「{goalTitle}」
          </p>
        </div>

        {/* ボタン */}
        <div className="p-[20px] pt-0 flex gap-[12px]">
          <button
            onClick={onClose}
            className="flex-1 bg-gray-200 text-gray-700 py-[12px] rounded-[8px] font-['Nunito_Sans_7pt_SemiExpanded:Bold','Noto_Sans_JP:Bold',sans-serif] text-[16px] hover:bg-gray-300 transition-colors"
          >
            いいえ
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 bg-[#FF1414] text-white py-[12px] rounded-[8px] font-['Nunito_Sans_7pt_SemiExpanded:Bold','Noto_Sans_JP:Bold',sans-serif] text-[16px] hover:bg-[#dd0000] transition-colors"
          >
            はい
          </button>
        </div>
      </div>
    </div>
  );
}
