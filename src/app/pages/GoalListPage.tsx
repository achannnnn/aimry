import { useState, useEffect, useMemo } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Goal, SortOption } from "../types/goal";
import { useGoals } from "../context/GoalsContext";
import GoalCard from "../components/GoalCard";
import ProgressModal from "../components/ProgressModal";
import SortModal from "../components/SortModal";
import FilterModal from "../components/FilterModal";
import FloatingActionButton from "../components/FloatingActionButton";
import HeaderComponent from "../components/HeaderComponent";
import ReviewRequestModal from "../components/ReviewRequestModal";
import FormatLineSpacing from "../../imports/FormatLineSpacing";
import FilterAlt from "../../imports/FilterAlt";
import { requestAppReview } from "../lib/review";
import { toast } from "sonner";

export default function GoalListPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const { goals, updateProgress, reorderGoals } = useGoals();
  const [selectedYear, setSelectedYear] = useState(2026);
  const [sortOption, setSortOption] = useState<SortOption>("newest");
  const [isSortModalOpen, setIsSortModalOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [selectedFilterTags, setSelectedFilterTags] = useState<string[]>([]);
  const [progressModalGoal, setProgressModalGoal] = useState<Goal | null>(null);
  const [progressHintGoalId, setProgressHintGoalId] = useState<string | null>(null);
  const [isProgressHintFading, setIsProgressHintFading] = useState(false);
  const [detailHintGoalId, setDetailHintGoalId] = useState<string | null>(null);
  const [isDetailHintFading, setIsDetailHintFading] = useState(false);
  const [isReviewRequestOpen, setIsReviewRequestOpen] = useState(false);

  useEffect(() => {
    const state = location.state as unknown as {
      progressHintGoalId?: unknown;
      reviewRequest?: unknown;
    } | null;

    const hintGoalId = typeof state?.progressHintGoalId === "string" ? state.progressHintGoalId : null;
    const shouldOpenReview = state?.reviewRequest === true;

    if (!hintGoalId && !shouldOpenReview) return;

    if (hintGoalId) setProgressHintGoalId(hintGoalId);
    if (shouldOpenReview) setIsReviewRequestOpen(true);

    // 同じ履歴エントリで戻ってきた時に再表示されないようstateを消す
    navigate(`${location.pathname}${location.search}`, { replace: true, state: null });
  }, [location.key, location.pathname, location.search, location.state, navigate]);

  useEffect(() => {
    if (!progressHintGoalId) return;
    setIsProgressHintFading(false);

    const totalMs = 4000;
    const fadeMs = 1600;

    const fadeTimeoutId = window.setTimeout(() => setIsProgressHintFading(true), totalMs - fadeMs);
    const clearTimeoutId = window.setTimeout(() => {
      setProgressHintGoalId(null);
      setIsProgressHintFading(false);
    }, totalMs);

    return () => {
      window.clearTimeout(fadeTimeoutId);
      window.clearTimeout(clearTimeoutId);
    };
  }, [progressHintGoalId]);

  useEffect(() => {
    if (!detailHintGoalId) return;
    setIsDetailHintFading(false);

    const totalMs = 4000;
    const fadeMs = 1600;

    const fadeTimeoutId = window.setTimeout(() => setIsDetailHintFading(true), totalMs - fadeMs);
    const clearTimeoutId = window.setTimeout(() => {
      setDetailHintGoalId(null);
      setIsDetailHintFading(false);
    }, totalMs);

    return () => {
      window.clearTimeout(fadeTimeoutId);
      window.clearTimeout(clearTimeoutId);
    };
  }, [detailHintGoalId]);

  // 全目標から使用されているタグを抽出
  const availableTags = useMemo(() => {
    const tagsSet = new Set<string>();
    goals.forEach(goal => {
      goal.tags?.forEach(tag => tagsSet.add(tag));
    });
    return Array.from(tagsSet).sort();
  }, [goals]);

  // URLパラメータから年を取得
  useEffect(() => {
    const yearParam = searchParams.get("year");
    if (yearParam) {
      const year = parseInt(yearParam);
      if (!isNaN(year)) {
        setSelectedYear(year);
      }
    }
  }, [searchParams]);

  // 期限切れかどうかを判定
  const isOverdue = (deadline: string) => {
    const today = new Date(); // 実際の現在日時を使用
    const deadlineDate = new Date(deadline);
    return deadlineDate < today;
  };

  // 達成率を計算
  const calculateProgress = (progress: number, target: number) => {
    return Math.round((progress / target) * 100);
  };

  // 並び替え処理
  const sortGoals = (goalsToSort: Goal[], option: SortOption) => {
    const sorted = [...goalsToSort];
    switch (option) {
      case "newest":
        return sorted.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      case "oldest":
        return sorted.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
      case "progressHigh":
        return sorted.sort((a, b) => calculateProgress(b.progress, b.target) - calculateProgress(a.progress, a.target));
      case "progressLow":
        return sorted.sort((a, b) => calculateProgress(a.progress, a.target) - calculateProgress(b.progress, b.target));
      default:
        return sorted;
    }
  };

  // 年でフィルタリングして並び替え
  const filteredAndSortedGoals = sortGoals(
    goals.filter((goal) => goal.year === selectedYear && (selectedFilterTags.length === 0 || goal.tags?.some(tag => selectedFilterTags.includes(tag)))),
    sortOption
  );

  // 並び替えオプション変更
  const handleSortChange = (option: SortOption) => {
    setSortOption(option);
    setIsSortModalOpen(false);
  };

  // ドラッグ＆ドロップでの並び替え
  const moveGoal = (dragIndex: number, hoverIndex: number) => {
    const dragGoal = filteredAndSortedGoals[dragIndex];
    const newGoals = [...filteredAndSortedGoals];
    newGoals.splice(dragIndex, 1);
    newGoals.splice(hoverIndex, 0, dragGoal);

    // orderを更新
    const updatedGoals = newGoals.map((goal, index) => ({ ...goal, order: index }));

    // 全体のgoalsを更新
    const otherYearGoals = goals.filter(g => g.year !== selectedYear);
    void reorderGoals([...otherYearGoals, ...updatedGoals]);
  };

  // 進捗更新
  const handleProgressUpdate = async (goalId: string, newProgress: number) => {
    await updateProgress(goalId, newProgress);
    setProgressModalGoal(null);

    // 初めて進捗を更新したタイミングで、詳細導線のヒントを表示（初回のみ）
    const storageKey = "aimry_hasUpdatedProgressOnce";
    const hasShown = localStorage.getItem(storageKey) === "1";
    if (!hasShown) {
      localStorage.setItem(storageKey, "1");
      // もし作成直後ヒントが出ているなら、こちらに切り替える
      setProgressHintGoalId(null);
      setIsProgressHintFading(false);
      setDetailHintGoalId(goalId);
    }
  };

  // カードクリックで詳細画面へ
  const handleCardClick = (goalId: string) => {
    navigate(`/goal/${goalId}`);
  };

  // 円グラフクリックで進捗更新モーダルを開く
  const handleProgressClick = (e: React.MouseEvent, goal: Goal) => {
    e.stopPropagation();
    setProgressModalGoal(goal);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-[#f6fdff] pb-24">
        {/* ヘッダー */}
        <HeaderComponent
          onAccountClick={() => navigate("/account")}
          selectedYear={selectedYear}
          onYearChange={setSelectedYear}
        />

        {/* メインコンテンツ */}
        <div className="relative z-10 mt-0 px-[16px]">
          {/* タイトルと並び替えボタン */}
          <div className="mb-[24px]">
            {/* タイトル */}
            <div className="flex items-center justify-center mb-[16px]">
              <div className="bg-[#f6fdff] px-[20px] py-[10px] rounded-[16px]">
                <h1 className="font-['Nunito_Sans_7pt_SemiExpanded:Bold','Noto_Sans_JP:Bold',sans-serif] font-black text-[16px] text-[#238b8a] text-center leading-[20px] tracking-[0.064px]">
                  ぼちぼちやろか
                </h1>
              </div>
            </div>

            {/* 並び替え・絞り込みボタン */}
            <div className="flex items-center justify-end gap-[7px]">
              <button
                onClick={() => setIsSortModalOpen(true)}
                className="bg-white flex items-center justify-center gap-[4px] px-[6px] py-[6px] rounded-[8px] w-[89px]"
              >
                <div className="w-[16px] h-[16px]">
                  <FormatLineSpacing />
                </div>
                <span className="font-['Nunito_Sans_7pt_SemiExpanded:Bold','Noto_Sans_JP:Bold',sans-serif] text-[12px] text-[#238b8a] leading-[20px] tracking-[0.048px]">
                  並び替え
                </span>
              </button>

              <button
                onClick={() => setIsFilterModalOpen(true)}
                className="bg-white flex items-center justify-center gap-[4px] px-[6px] py-[6px] rounded-[8px] w-[89px]"
              >
                <div className="w-[16px] h-[16px]">
                  <FilterAlt />
                </div>
                <span className="font-['Nunito_Sans_7pt_SemiExpanded:Bold','Noto_Sans_JP:Bold',sans-serif] text-[12px] text-[#238b8a] leading-[20px] tracking-[0.048px]">
                  絞り込み
                </span>
              </button>
            </div>
          </div>

          {/* 目標カード一覧 */}
          <div className="grid grid-cols-2 gap-[20px]">
            {filteredAndSortedGoals.map((goal, index) => {
              const progressPercentage = calculateProgress(goal.progress, goal.target);
              const isCompleted = progressPercentage >= 100;
              const overdue = isOverdue(goal.deadline);
              const daysUntilDeadline = Math.ceil(
                (new Date(goal.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
              );

              return (
                <GoalCard
                  key={goal.id}
                  goal={goal}
                  index={index}
                  progressPercentage={progressPercentage}
                  isCompleted={isCompleted}
                  isOverdue={overdue}
                  daysUntilDeadline={daysUntilDeadline}
                  showProgressHint={goal.id === progressHintGoalId}
                  isProgressHintFading={goal.id === progressHintGoalId ? isProgressHintFading : false}
                  showDetailHint={goal.id === detailHintGoalId}
                  isDetailHintFading={goal.id === detailHintGoalId ? isDetailHintFading : false}
                  onCardClick={handleCardClick}
                  onProgressClick={handleProgressClick}
                  moveGoal={moveGoal}
                />
              );
            })}
          </div>
        </div>

        {/* FAB（目標作成ボタン） */}
        <FloatingActionButton onClick={() => navigate("/goal/create")} />

        {/* 並び替えモーダル */}
        <SortModal
          isOpen={isSortModalOpen}
          currentSort={sortOption}
          onClose={() => setIsSortModalOpen(false)}
          onSortChange={handleSortChange}
        />

        {/* 絞り込みモーダル */}
        <FilterModal
          isOpen={isFilterModalOpen}
          availableTags={availableTags}
          selectedTags={selectedFilterTags}
          onClose={() => setIsFilterModalOpen(false)}
          onTagToggle={(tag) => {
            setSelectedFilterTags((prev) =>
              prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
            );
          }}
          onClearFilter={() => setSelectedFilterTags([])}
        />

        {/* 進捗更新モーダル */}
        {progressModalGoal && (
          <ProgressModal
            goal={progressModalGoal}
            onClose={() => setProgressModalGoal(null)}
            onUpdate={handleProgressUpdate}
          />
        )}

        <ReviewRequestModal
          isOpen={isReviewRequestOpen}
          onClose={() => setIsReviewRequestOpen(false)}
          onLater={() => setIsReviewRequestOpen(false)}
          onRate={async () => {
            const result = await requestAppReview();
            if (result === "missing_url") {
              toast.message("レビュー設定が未設定です（VITE_APP_STORE_REVIEW_URL または VITE_APP_STORE_APP_ID）");
            } else if (result === "blocked") {
              toast.message("ポップアップがブロックされました。許可してもう一度お試しください。");
            }
            setIsReviewRequestOpen(false);
          }}
        />
      </div>
    </DndProvider>
  );
}