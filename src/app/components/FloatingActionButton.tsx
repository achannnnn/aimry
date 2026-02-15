interface FloatingActionButtonProps {
  onClick: () => void;
}

export default function FloatingActionButton({ onClick }: FloatingActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed right-[24px] bottom-[24px] z-50 size-[63.992px] bg-[#238b8a] rounded-full shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] hover:bg-[#1a6d72] transition-all duration-200 hover:scale-110 flex items-center justify-center"
      aria-label="目標を作成"
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6.66413 16H25.3237" stroke="white" strokeWidth="2.66566" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 6.66416V25.3237" stroke="white" strokeWidth="2.66566" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
