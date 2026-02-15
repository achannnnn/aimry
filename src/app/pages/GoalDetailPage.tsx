import { useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router";
import { ChevronLeft, Trash2 } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from "recharts";
import { useGoals } from "../context/GoalsContext";
import DeleteConfirmModal from "../components/DeleteConfirmModal";
import PhysicalTherapy from "../../imports/PhysicalTherapy";
import Taunt from "../../imports/Taunt";
import Sell from "../../imports/Sell";
import BorderColor from "../../imports/BorderColor";
import ScaledHeaderBackground from "../components/ScaledHeaderBackground";
import headerSvgPaths from "../../imports/svg-ze7lid83a8";
import triangleSvgPaths from "../../imports/svg-4gxcxcbmrb";

type PeriodTab = "week" | "month" | "year";

export default function GoalDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { goals, deleteGoal, isLoading } = useGoals();
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodTab>("week");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // 目標を取得
  const goal = goals.find((g) => g.id === id);

  // 期間別のグラフデータを生成（実際の進捗履歴から）
  const getChartData = () => {
    if (!goal) return [];

    const history = goal.progressHistory || [];
    const today = new Date();
    const todayStr = today.toISOString().split("T")[0];
    const currentPercentage = Math.round((goal.progress / goal.target) * 100);

    if (selectedPeriod === "week") {
      // 今週：月〜日7間
      return Array.from({ length: 7 }, (_, i) => {
        const date = new Date(today);
        const dayOfWeek = today.getDay();
        const diff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek; // 月曜日を起点に
        date.setDate(today.getDate() + diff + i);

        const dateStr = date.toISOString().split("T")[0];
        const record = history.find(h => h.date === dateStr);

        // 今日の日付なら現在の進捗率を使用、履歴があればそれを使用
        const percentage = dateStr === todayStr
          ? (record ? record.percentage : currentPercentage)
          : (record ? record.percentage : 0);

        return {
          label: `${date.getMonth() + 1}/${date.getDate()}`,
          value: percentage,
          isComplete: percentage >= 100,
        };
      });
    } else if (selectedPeriod === "month") {
      // 今月：週ごとの平均
      const year = today.getFullYear();
      const month = today.getMonth();
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);

      // 今日の日付（ローカルタイム）
      const todayDate = today.getDate();

      const weeks: { label: string; value: number; isComplete: boolean }[] = [];
      let weekNum = 1;
      let weekStartDate = 1;

      while (weekStartDate <= lastDay.getDate()) {
        const weekEndDate = Math.min(weekStartDate + 6, lastDay.getDate());

        // 今日がこの週に含まれるかチェック
        const isCurrentWeek = todayDate >= weekStartDate && todayDate <= weekEndDate;

        // この週の記録を集計（日付文字列で比較）
        const weekStart = new Date(year, month, weekStartDate);
        const weekEnd = new Date(year, month, weekEndDate);
        const weekStartStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(weekStartDate).padStart(2, '0')}`;
        const weekEndStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(weekEndDate).padStart(2, '0')}`;

        const weekRecords = history.filter(h => {
          return h.date >= weekStartStr && h.date <= weekEndStr;
        });

        let avgPercentage = 0;
        if (isCurrentWeek) {
          // 現在の週の場合、今日の記録があればそれを使用、なければ現在の進捗率を使用
          const todayRecord = history.find(h => h.date === todayStr);
          if (todayRecord) {
            avgPercentage = todayRecord.percentage;
          } else {
            avgPercentage = currentPercentage;
          }
        } else {
          // 過去の週の場合、履歴のみ使用
          avgPercentage = weekRecords.length > 0
            ? Math.round(weekRecords.reduce((sum, r) => sum + r.percentage, 0) / weekRecords.length)
            : 0;
        }

        weeks.push({
          label: `第${weekNum}週`,
          value: avgPercentage,
          isComplete: avgPercentage >= 100,
        });

        weekStartDate += 7;
        weekNum++;
      }

      return weeks;
    } else {
      // 今年：月ごとの平均
      const year = today.getFullYear();
      const currentMonth = today.getMonth();

      return Array.from({ length: 12 }, (_, i) => {
        const isCurrentMonth = i === currentMonth;

        const monthRecords = history.filter(h => {
          const recordDate = new Date(h.date);
          return recordDate.getFullYear() === year && recordDate.getMonth() === i;
        });

        let avgPercentage = 0;
        if (isCurrentMonth) {
          // 現在の月の場合、履歴があればそれを使用、なければ現在の進捗率を使用
          avgPercentage = monthRecords.length > 0
            ? Math.round(monthRecords.reduce((sum, r) => sum + r.percentage, 0) / monthRecords.length)
            : currentPercentage;
        } else {
          // 過去の月の場合、履歴のみ使用
          avgPercentage = monthRecords.length > 0
            ? Math.round(monthRecords.reduce((sum, r) => sum + r.percentage, 0) / monthRecords.length)
            : 0;
        }

        return {
          label: `${i + 1}月`,
          value: avgPercentage,
          isComplete: avgPercentage >= 100,
        };
      });
    }
  };

  const chartData = useMemo(() => getChartData(), [selectedPeriod, goal?.progressHistory]);

  // Y軸の目盛りを生成（0〜100%、10%刻み）
  const yAxisTicks = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  if (isLoading) return null;

  // 目標が見つからない場合は一覧に戻る
  if (!goal) {
    navigate("/");
    return null;
  }

  // 達成率を計算
  const progressPercentage = goal.target > 0 ? Math.round((goal.progress / goal.target) * 100) : 0;

  const isCompleted = goal.target > 0 && goal.progress >= goal.target;

  const formatMonthDayFromYmd = (ymd: string) => {
    const [year, month, day] = ymd.split("-").map((v) => Number(v));
    if (!year || !month || !day) return "";
    return `${month}/${day}`;
  };

  const achievedDateText = (() => {
    if (!isCompleted) return "";

    const firstAchievedYmd = (goal.progressHistory ?? [])
      .filter((record) => record.value >= goal.target || record.percentage >= 100)
      .map((record) => record.date)
      .sort()[0];

    if (firstAchievedYmd) {
      const text = formatMonthDayFromYmd(firstAchievedYmd);
      if (text) return text;
    }

    const now = new Date();
    return `${now.getMonth() + 1}/${now.getDate()}`;
  })();

  // 残り日数を計算
  const daysUntilDeadline = Math.ceil(
    (new Date(goal.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  );

  // 削除処理
  const handleDelete = () => {
    void deleteGoal(goal.id);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#f6fdff]">
      {/* ヘッダー */}
      <div className="absolute h-[227px] left-0 opacity-90 overflow-clip top-0 w-full z-20">
        <ScaledHeaderBackground pathD={headerSvgPaths.p10ee0e00} />

        {/* 戻るボタン */}
        <button
          onClick={() => navigate("/")}
          className="absolute left-[32px] top-[90px] z-30"
          aria-label="戻る"
        >
          <div className="size-[24px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path
                clipRule="evenodd"
                d={headerSvgPaths.p19c59880}
                fill="white"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </button>

        {/* 編集ボタン */}
        <button
          onClick={() => navigate(`/goal/edit/${goal.id}`)}
          className="absolute right-[32px] top-[90px] z-30"
          aria-label="編集"
        >
          <div className="size-[24px]">
            <BorderColor />
          </div>
        </button>

        <p className="absolute font-['Nunito_Sans_7pt_SemiExpanded:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[20px] left-1/2 -translate-x-1/2 text-[16px] text-center text-white top-[90px] tracking-[0.064px] z-30" style={{ fontVariationSettings: "'wght' 700" }}>
          {goal.title}
        </p>
      </div>

      {/* メインコンテンツ */}
      <div className="px-[20px] pt-[220px] pb-[40px] relative z-10">
        {/* 目標情報カード */}
        <div className="bg-white rounded-[8px] shadow-[0px_1px_4px_0px_#e6f9fd] px-[24px] py-[16px] mb-[20px] w-fit mx-auto">
          {/* 目標アイコンとラベル */}
          <div className="flex items-center justify-center gap-[2px] mb-[6px]">
            <div className="size-[20px]">
              <PhysicalTherapy />
            </div>
            <p className="font-['Nunito_Sans_7pt_SemiExpanded:Bold','Noto_Sans_JP:Bold',sans-serif] text-[16px] text-[#238b8a] tracking-[0.064px]">
              目標
            </p>
          </div>

          {/* 進捗表示 */}
          <p className="font-['Nunito_Sans_7pt_SemiExpanded:Bold','Noto_Sans_JP:Bold',sans-serif] text-center text-[#238b8a] mb-[16px]">
            <span className="text-[16px]">{goal.progress} / {goal.target}</span>
            <span className="text-[12px]">{goal.unit || ""}</span>
          </p>

          {/* 残り日数 */}
          <div className="relative flex items-center justify-center">
            <div className={`${isCompleted ? "bg-[#fff7f7]" : "bg-[#CEF1F8]"} rounded-[12px] px-[16px] py-[6px] -mt-[8px]`}>
              <p className={`${isCompleted ? "text-[#EC7A77]" : "text-[#238b8a]"} font-['Nunito_Sans_7pt_SemiExpanded:SemiBold','Noto_Sans_JP:Bold',sans-serif] text-[9px] tracking-[0.036px]`}>
                {isCompleted ? achievedDateText : `残り${daysUntilDeadline}日`}
              </p>
            </div>
          </div>
        </div>

        {/* グラフカード */}
        <div className="bg-white rounded-[8px] shadow-[0px_1px_4px_0px_#e6f9fd] p-[16px] mb-[20px] relative">
          {/* タブ */}
          <div className="bg-[#d5f1f4] flex gap-[2px] p-[2px] rounded-[8px] shadow-[0px_1px_4px_0px_#e6f9fd,0px_1px_4px_0px_#e6f9fd] mb-[12px]">
            <button
              onClick={() => setSelectedPeriod("week")}
              className={`flex-1 px-[24px] py-[12px] rounded-[6px] font-['Nunito_Sans_7pt_SemiExpanded:Bold','Noto_Sans_JP:Bold',sans-serif] text-[12px] leading-none text-center tracking-[0.048px] transition-colors ${selectedPeriod === "week"
                  ? "bg-[#238b8a] text-white"
                  : "bg-[#d7f1f4] text-[#3c9095]"
                }`}
              style={{ fontVariationSettings: "'wght' 700" }}
            >
              今週
            </button>
            <button
              onClick={() => setSelectedPeriod("month")}
              className={`flex-1 px-[24px] py-[12px] rounded-[6px] font-['Nunito_Sans_7pt_SemiExpanded:Bold','Noto_Sans_JP:Bold',sans-serif] text-[12px] leading-none text-center tracking-[0.048px] transition-colors ${selectedPeriod === "month"
                  ? "bg-[#238b8a] text-white"
                  : "bg-[#d7f1f4] text-[#3c9095]"
                }`}
              style={{ fontVariationSettings: "'wght' 700" }}
            >
              今月
            </button>
            <button
              onClick={() => setSelectedPeriod("year")}
              className={`flex-1 px-[24px] py-[12px] rounded-[6px] font-['Nunito_Sans_7pt_SemiExpanded:Bold','Noto_Sans_JP:Bold',sans-serif] text-[12px] leading-none text-center tracking-[0.048px] transition-colors ${selectedPeriod === "year"
                  ? "bg-[#238b8a] text-white"
                  : "bg-[#d7f1f4] text-[#3c9095]"
                }`}
              style={{ fontVariationSettings: "'wght' 700" }}
            >
              今年
            </button>
          </div>

          {/* グラフ */}
          <div className="h-[250px] w-full min-h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="2 2" stroke="#CCCCCC" vertical={false} />
                <XAxis
                  dataKey="label"
                  tick={{ fill: "#CCCCCC", fontSize: 10, fontFamily: "Montserrat" }}
                  axisLine={{ stroke: "#CCCCCC" }}
                  tickLine={false}
                  interval={0}
                />
                <YAxis
                  ticks={yAxisTicks}
                  tick={{ fill: "#CCCCCC", fontSize: 10, fontFamily: "Montserrat" }}
                  axisLine={{ stroke: "#CCCCCC" }}
                  tickLine={false}
                  tickFormatter={(value) => value === 0 ? '0%' : value}
                  domain={[0, 100]}
                  width={30}
                />
                <Bar dataKey="value" radius={[2, 2, 0, 0]} barSize={20}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.isComplete ? "#ec7a77" : "#238b8a"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* 緑の三角形 */}
          <div className="absolute right-0 bottom-0 size-[13px] overflow-hidden rounded-br-[8px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
              <path d={triangleSvgPaths.p3cb9f280} fill="#238B8A" />
            </svg>
          </div>
        </div>

        {/* 意気込みセクション */}
        {goal.motivation && (
          <div className="mb-[20px] relative overflow-hidden rounded-[6px]">
            <div className="bg-white rounded-tl-[6px] rounded-tr-[6px] shadow-[0px_1px_4px_0px_#e6f9fd] flex gap-[4px] items-center justify-center pt-[8px] px-[12px]">
              <div className="size-[22px]">
                <Taunt />
              </div>
              <p className="font-['Nunito_Sans_7pt_SemiExpanded:Bold','Noto_Sans_JP:Bold',sans-serif] text-[15px] text-[#238b8a] tracking-[0.0375px]">
                目標に向けての意気込み！
              </p>
            </div>
            <div className="bg-white rounded-bl-[6px] rounded-br-[6px] shadow-[0px_1px_4px_0px_#e6f9fd] px-[16px] py-[12px]">
              <p className="font-['Nunito_Sans_7pt_SemiExpanded:Medium','Noto_Sans_JP:Medium',sans-serif] text-[14px] text-[#238b8a] tracking-[0.035px] whitespace-pre-wrap">
                {goal.motivation}
              </p>
            </div>

            {/* 緑の三角形 */}
            <div className="absolute right-0 bottom-0 size-[13px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                <path d={triangleSvgPaths.p3cb9f280} fill="#238B8A" />
              </svg>
            </div>
          </div>
        )}

        {/* タグセクション */}
        {goal.tags && goal.tags.length > 0 && (
          <div className="mb-[20px] relative overflow-hidden rounded-[6px]">
            <div className="bg-white rounded-tl-[6px] rounded-tr-[6px] shadow-[0px_1px_4px_0px_#e6f9fd] flex gap-[4px] items-center justify-center pt-[8px] px-[12px]">
              <div className="size-[22px]">
                <Sell />
              </div>
              <p className="font-['Nunito_Sans_7pt_SemiExpanded:Bold','Noto_Sans_JP:Bold',sans-serif] text-[15px] text-[#238b8a] tracking-[0.0375px]">
                タグ
              </p>
            </div>
            <div className="bg-white rounded-bl-[6px] rounded-br-[6px] shadow-[0px_1px_4px_0px_#e6f9fd] px-[16px] py-[12px]">
              <div className="flex flex-wrap gap-[10px] items-center justify-start">
                {goal.tags.map((tag, index) => (
                  <p
                    key={index}
                    className="font-['Nunito_Sans_7pt_SemiExpanded:Medium','Noto_Sans_JP:Medium',sans-serif] text-[14px] text-[#238b8a] tracking-[0.035px]"
                  >
                    # {tag}
                  </p>
                ))}
              </div>
            </div>

            {/* 緑の三角形 */}
            <div className="absolute right-0 bottom-0 size-[13px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                <path d={triangleSvgPaths.p3cb9f280} fill="#238B8A" />
              </svg>
            </div>
          </div>
        )}

        {/* 削除ボタン */}
        <button
          onClick={() => setIsDeleteModalOpen(true)}
          className="bg-white w-full rounded-[8px] shadow-[0px_1px_4px_0px_#e6f9fd] px-[24px] py-[16px] flex items-center justify-center gap-[6px] relative overflow-hidden"
        >
          <Trash2 className="size-[24px] text-[#FF1414]" />
          <p className="font-['Hiragino_Kaku_Gothic_Pro:W6',sans-serif] text-[16px] text-[#ff1414] tracking-[0.016px]">
            この目標を削除する
          </p>

          {/* 赤い三角形 */}
          <div className="absolute right-0 bottom-0 size-[13px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
              <path d={triangleSvgPaths.p3cb9f280} fill="#FF1414" />
            </svg>
          </div>
        </button>
      </div>

      {/* 削除確認モーダル */}
      <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
        goalTitle={goal.title}
      />
    </div>
  );
}