import { useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useGoals } from "../context/GoalsContext";
import { Preferences } from "@capacitor/preferences";
import svgPaths from "../../imports/svg-utb8ssci6z";
import headerSvgPaths from "../../imports/svg-ze7lid83a8";
import buttonSvgPaths from "../../imports/svg-zpr0cf35a2";
import ScaledHeaderBackground from "../components/ScaledHeaderBackground";

interface GoalFormData {
  title: string;
  direction: "increase" | "decrease";
  startValue: string;
  targetValue: string;
  unit: string;
  motivation: string;
  deadline: "thisyear" | "6months" | "3months" | "1month" | "";
  tags: string[];
}

const availableTags = ["生活", "筋トレ", "人生", "趣味"];

export default function GoalCreatePage() {
  const navigate = useNavigate();
  const { addGoal, goals } = useGoals();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isAddTagModalOpen, setIsAddTagModalOpen] = useState(false);
  const [isTargetValueModalOpen, setIsTargetValueModalOpen] = useState(false);
  const [newTag, setNewTag] = useState("");
  const [customTags, setCustomTags] = useState<string[]>([]);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [tempTargetValue, setTempTargetValue] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<GoalFormData>({
    defaultValues: {
      title: "",
      direction: "increase",
      startValue: "",
      targetValue: "",
      unit: "",
      motivation: "",
      deadline: "thisyear",
      tags: [],
    },
  });

  const watchedFields = watch();

  // 入力変更を検知
  const handleInputChange = () => {
    setHasUnsavedChanges(true);
  };

  // タグトグル
  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => {
      const newTags = prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag];
      setValue("tags", newTags);
      handleInputChange();
      return newTags;
    });
  };

  // 期日選択
  const selectDeadline = (deadline: GoalFormData["deadline"]) => {
    setValue("deadline", deadline);
    handleInputChange();
  };

  // タグ追加
  const handleAddTag = () => {
    if (newTag.trim() && !availableTags.includes(newTag) && !customTags.includes(newTag)) {
      setCustomTags((prev) => [...prev, newTag.trim()]);
      toggleTag(newTag.trim());
      setNewTag("");
      setIsAddTagModalOpen(false);
      toast.success("タグを追加しました");
    }
  };

  // 目標数値の設定
  const handleSetTargetValue = () => {
    if (tempTargetValue.trim()) {
      setValue("targetValue", tempTargetValue, { shouldDirty: true, shouldValidate: true });
      handleInputChange();
      setIsTargetValueModalOpen(false);
    }
  };

  // 目標数値モーダルを開く
  const openTargetValueModal = () => {
    setTempTargetValue(watchedFields.targetValue || "");
    setIsTargetValueModalOpen(true);
  };

  // フォーム送信
  const onSubmit = async (data: GoalFormData) => {
    const direction = data.direction;
    const target = Math.round(Number(data.targetValue) || 0);
    const startValueInput = Math.round(Number(data.startValue) || 0);
    const startValue = direction === "decrease" ? startValueInput : 0;

    if (direction === "decrease" && startValue <= target) {
      toast.error("減らす目標では開始値を目標値より大きくしてください");
      return;
    }

    // 期日から実際の日付を計算
    const today = new Date();
    let deadlineDate = new Date();

    switch (data.deadline) {
      case "thisyear":
        // 今年の12月31日に設定
        deadlineDate.setFullYear(today.getFullYear(), 11, 31); // 月は0始まりなので11=12月
        break;
      case "6months":
        deadlineDate.setMonth(today.getMonth() + 6);
        break;
      case "3months":
        deadlineDate.setMonth(today.getMonth() + 3);
        break;
      case "1month":
        deadlineDate.setMonth(today.getMonth() + 1);
        break;
      default:
        // デフォルトは今年の12月31日
        deadlineDate.setFullYear(today.getFullYear(), 11, 31);
    }

    // 年を計算（期日の年）
    const year = deadlineDate.getFullYear();

    // Goalオブジェクトを作成
    const newGoal = {
      title: data.title,
      direction,
      startValue,
      progress: direction === "decrease" ? startValue : 0,
      target,
      unit: data.unit,
      motivation: data.motivation,
      tags: data.tags,
      deadline: deadlineDate.toISOString().split("T")[0], // YYYY-MM-DD形式
      year: year,
    };

    try {
      const createdGoalId = await addGoal(newGoal);
      toast.success("目標を設定しました");
      setHasUnsavedChanges(false);

      // 3つ目標を作成した直後に、レビュー依頼モーダルを1回だけ表示
      const shouldShowReviewRequest = await (async () => {
        const countKey = "aimry_goalCreateCount";
        const cooldownKey = "aimry_reviewPromptCooldownUntil";

        try {
          const currentCountRaw = (await Preferences.get({ key: countKey })).value;
          const currentCount = currentCountRaw ? Number(currentCountRaw) : 0;
          const nextCount = Number.isFinite(currentCount) ? currentCount + 1 : 1;

          await Preferences.set({ key: countKey, value: String(nextCount) });

          const cooldownRaw = (await Preferences.get({ key: cooldownKey })).value;
          const cooldownUntil = cooldownRaw ? Number(cooldownRaw) : 0;
          const now = Date.now();

          if (cooldownUntil && Number.isFinite(cooldownUntil) && now < cooldownUntil) {
            return false;
          }

          if (nextCount >= 3) {
            return true;
          }
        } catch {
          // Preferencesが使えない場合はレビュー依頼をスキップ
        }

        return false;
      })();

      // 作成した目標の年に切り替えるためのクエリパラメータを追加
      // ヒント吹き出し（グラフをタップで進捗を更新）は、作成前に目標が0件の時のみ表示
      const shouldShowHint = goals.length === 0;

      if (shouldShowHint) {
        navigate(`/?year=${year}`, {
          state: {
            progressHintGoalId: createdGoalId,
            ...(shouldShowReviewRequest ? { reviewRequest: true } : {}),
          },
        });
      } else {
        if (shouldShowReviewRequest) {
          navigate(`/?year=${year}`, {
            state: {
              reviewRequest: true,
            },
          });
        } else {
          navigate(`/?year=${year}`);
        }
      }
    } catch (e) {
      console.error(e);
      toast.error("目標の保存に失敗しました");
    }
  };

  // 戻る処理
  const handleBack = () => {
    if (hasUnsavedChanges) {
      if (window.confirm("保存せず戻りますか？")) {
        navigate(-1);
      }
    } else {
      navigate(-1);
    }
  };

  const allTags = [...availableTags, ...customTags];

  return (
    <div className="relative bg-[#f5f5f5] min-h-screen w-full overflow-auto pb-[100px]">
      {/* Header */}
      <div className="absolute h-[227px] left-0 overflow-clip top-0 w-full">
        <ScaledHeaderBackground pathD={headerSvgPaths.p10ee0e00} />

        {/* 戻るボタン */}
        <button
          onClick={handleBack}
          className="absolute left-[32px] top-[90px] z-20"
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

        <p className="absolute font-['Nunito_Sans_7pt_SemiExpanded:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[20px] left-1/2 -translate-x-1/2 text-[16px] text-center text-white top-[90px] tracking-[0.064px]" style={{ fontVariationSettings: "'wght' 700" }}>
          目標を作成
        </p>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit(onSubmit)} className="relative top-[200px] px-[16px] pb-[50px]">
        <div className="bg-white flex flex-col gap-[24px] p-[16px] rounded-[8px] shadow-[0px_1px_4px_0px_#e6f9fd,0px_1px_4px_0px_#e6f9fd] w-full relative">
          {/* 目標名 */}
          <div className="flex flex-col gap-[4px] w-full">
            <div className="flex gap-[6px] items-center">
              <div className="size-[18px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                  <mask height="18" id="mask0_flag" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
                    <rect fill="#D9D9D9" height="18" width="18" />
                  </mask>
                  <g mask="url(#mask0_flag)">
                    <path d={svgPaths.p3f3cab80} fill="#3C9095" />
                  </g>
                </svg>
              </div>
              <div className="flex items-start text-[#3c9095]">
                <p className="font-['Nunito_Sans_7pt_SemiExpanded:SemiBold','Noto_Sans_JP:Bold',sans-serif] leading-[20px] text-[16px] tracking-[0.016px]" style={{ fontVariationSettings: "'wght' 700" }}>
                  目標名
                </p>
                <p className="font-['Nunito_Sans_7pt_SemiExpanded:SemiBold','Noto_Sans:SemiBold',sans-serif] leading-none text-[10px] tracking-[0.01px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 600" }}>
                  ※
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[6px] w-full">
              <div className="h-[35px] relative w-full">
                <div className="flex items-center overflow-clip py-[12px] relative size-full z-10">
                  <input
                    {...register("title", { required: "目標は必須です" })}
                    type="text"
                    maxLength={20}
                    placeholder="お金貯めたい"
                    onChange={handleInputChange}
                    className="flex-1 h-[30px] bg-transparent font-['Nunito_Sans_7pt_SemiExpanded:Medium','Noto_Sans_JP:Medium',sans-serif] text-[14px] text-[#333] placeholder:text-[#c1c1c1] tracking-[0.014px] outline-none border-none relative z-10"
                    style={{ fontVariationSettings: "'wght' 500" }}
                  />
                </div>
                <div aria-hidden="true" className="absolute border-[#eaeaea] border-b-2 border-solid inset-0 pointer-events-none z-0" />
              </div>
              <p className="font-['Nunito_Sans_7pt_SemiExpanded:Light','Noto_Sans:Light','Noto_Sans_JP:Light',sans-serif] leading-[16px] text-[#7b7b7b] text-[12px] tracking-[0.06px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300" }}>
                ※合計20文字まで
              </p>
              {errors.title && (
                <p className="text-red-500 text-[12px]">{errors.title.message}</p>
              )}
            </div>
          </div>

          {/* 目標数値 */}
          <div className="flex flex-col gap-[4px] w-full">
            <div className="flex gap-[6px] items-center">
              <div className="size-[18px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                  <mask height="18" id="mask0_clock" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
                    <rect fill="#D9D9D9" height="18" width="18" />
                  </mask>
                  <g mask="url(#mask0_clock)">
                    <path d={svgPaths.pf096af0} fill="#3C9095" />
                  </g>
                </svg>
              </div>
              <div className="flex items-start text-[#3c9095]">
                <p className="font-['Nunito_Sans_7pt_SemiExpanded:SemiBold','Noto_Sans_JP:Bold',sans-serif] leading-[20px] text-[16px] tracking-[0.016px]" style={{ fontVariationSettings: "'wght' 700" }}>
                  目標数値
                </p>
                <p className="font-['Nunito_Sans_7pt_SemiExpanded:SemiBold','Noto_Sans:SemiBold',sans-serif] leading-none text-[10px] tracking-[0.01px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 600" }}>
                  ※
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[6px] w-full">
              <input
                type="hidden"
                {...register("targetValue", {
                  required: "目標数値は必須です",
                  validate: (value) => {
                    const trimmed = (value ?? "").trim();
                    if (!/^\d{1,9}$/.test(trimmed)) return "目標数値は9桁以内の数字で入力してください";
                    const numeric = Number(trimmed);
                    if (!Number.isFinite(numeric) || numeric <= 0) return "目標数値は1以上で入力してください";
                    return true;
                  },
                })}
              />
              <button
                type="button"
                onClick={openTargetValueModal}
                className="h-[35px] relative w-full cursor-pointer"
              >
                <div className="flex items-center overflow-clip py-[12px] relative size-full z-10">
                  <div className="flex-1 h-[30px] bg-transparent font-['Nunito_Sans_7pt_SemiExpanded:Medium',sans-serif] text-[14px] text-left tracking-[0.014px] relative z-10">
                    {watchedFields.targetValue ? (
                      <span className="text-[#333]">{watchedFields.targetValue}</span>
                    ) : (
                      <span className="text-[#c1c1c1]">2000000</span>
                    )}
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border-[#eaeaea] border-b-2 border-solid inset-0 pointer-events-none z-0" />
              </button>
              <p className="font-['Nunito_Sans_7pt_SemiExpanded:Light','Noto_Sans:Light','Noto_Sans_JP:Light',sans-serif] leading-[16px] text-[#7b7b7b] text-[12px] tracking-[0.06px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300" }}>
                ※数値は9桁まで
              </p>
              {errors.targetValue && (
                <p className="text-red-500 text-[12px]">{errors.targetValue.message}</p>
              )}
            </div>
          </div>

          {/* 目標の方向 */}
          <div className="flex flex-col gap-[4px] w-full">
            <div className="flex gap-[6px] items-center">
              <div className="size-[18px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                  <mask height="18" id="mask0_direction" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
                    <rect fill="#D9D9D9" height="18" width="18" />
                  </mask>
                  <g mask="url(#mask0_direction)">
                    <path d="M6.75 14.25V12.75H8.25C8.0625 11.025 7.325 9.59375 6.0375 8.45625C4.75 7.31875 3.2375 6.75 1.5 6.75V5.25C3.1125 5.25 4.59375 5.675 5.94375 6.525C7.29375 7.375 8.3125 8.525 9 9.975C9.475 8.9625 10.1 8.06563 10.875 7.28438C11.65 6.50313 12.5188 5.825 13.4813 5.25H10.5V3.75H15.75V9H14.25V6.525C13.0875 7.2375 12.0875 8.11875 11.25 9.16875C10.4125 10.2187 9.9125 11.4125 9.75 12.75H11.25V14.25H6.75Z" fill="#3C9095" />
                  </g>
                </svg>
              </div>
              <p className="font-['Nunito_Sans_7pt_SemiExpanded:SemiBold','Noto_Sans_JP:Bold',sans-serif] leading-[20px] text-[16px] text-[#3c9095] tracking-[0.016px]" style={{ fontVariationSettings: "'wght' 700" }}>
                目標の方向
              </p>
            </div>

            <input type="hidden" {...register("direction")} />
            <div className="grid grid-cols-2 gap-[8px]">
              <button
                type="button"
                onClick={() => {
                  setValue("direction", "increase", { shouldDirty: true });
                  setValue("startValue", "", { shouldDirty: true, shouldValidate: true });
                  handleInputChange();
                }}
                className={`rounded-[8px] border px-[12px] py-[10px] text-[14px] ${watchedFields.direction === "increase" ? "border-[#238b8a] bg-[#e6f9fd] text-[#238b8a]" : "border-[#eaeaea] bg-white text-[#7b7b7b]"}`}
              >
                増やす
              </button>
              <button
                type="button"
                onClick={() => {
                  setValue("direction", "decrease", { shouldDirty: true });
                  handleInputChange();
                }}
                className={`rounded-[8px] border px-[12px] py-[10px] text-[14px] ${watchedFields.direction === "decrease" ? "border-[#238b8a] bg-[#e6f9fd] text-[#238b8a]" : "border-[#eaeaea] bg-white text-[#7b7b7b]"}`}
              >
                減らす
              </button>
            </div>
          </div>

          {watchedFields.direction === "decrease" && (
            <div className="flex flex-col gap-[4px] w-full">
              <div className="flex gap-[6px] items-center">
                <p className="font-['Nunito_Sans_7pt_SemiExpanded:SemiBold','Noto_Sans_JP:Bold',sans-serif] leading-[20px] text-[16px] text-[#3c9095] tracking-[0.016px]" style={{ fontVariationSettings: "'wght' 700" }}>
                  現在値（開始値）
                </p>
              </div>
              <div className="h-[35px] relative w-full">
                <div className="flex items-center overflow-clip py-[12px] relative size-full z-10">
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={9}
                    placeholder="70"
                    {...register("startValue", {
                      validate: (value) => {
                        if (watchedFields.direction !== "decrease") return true;
                        const trimmed = (value ?? "").trim();
                        if (!/^\d{1,9}$/.test(trimmed)) return "開始値は9桁以内の数字で入力してください";
                        const numeric = Number(trimmed);
                        const target = Number(watchedFields.targetValue || "0");
                        if (!Number.isFinite(numeric) || numeric <= 0) return "開始値は1以上で入力してください";
                        if (!Number.isFinite(target) || target <= 0) return "先に目標数値を入力してください";
                        if (numeric <= target) return "開始値は目標数値より大きくしてください";
                        return true;
                      },
                    })}
                    onChange={(e) => {
                      e.target.value = e.target.value.replace(/\D/g, "");
                      handleInputChange();
                    }}
                    className="flex-1 h-[30px] bg-transparent font-['Nunito_Sans_7pt_SemiExpanded:Medium','Noto_Sans_JP:Medium',sans-serif] text-[14px] text-[#333] placeholder:text-[#c1c1c1] tracking-[0.014px] outline-none border-none relative z-10"
                    style={{ fontVariationSettings: "'wght' 500" }}
                  />
                </div>
                <div aria-hidden="true" className="absolute border-[#eaeaea] border-b-2 border-solid inset-0 pointer-events-none z-0" />
              </div>
              {errors.startValue && (
                <p className="text-red-500 text-[12px]">{errors.startValue.message}</p>
              )}
            </div>
          )}

          {/* 目標単位 */}
          <div className="flex flex-col gap-[4px] w-full">
            <div className="flex gap-[6px] items-center">
              <div className="size-[18px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                  <mask height="18" id="mask0_1k" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
                    <rect fill="#D9D9D9" height="18" width="18" />
                  </mask>
                  <g mask="url(#mask0_1k)">
                    <path d={svgPaths.p9df9100} fill="#3C9095" />
                  </g>
                </svg>
              </div>
              <div className="flex items-start text-[#3c9095]">
                <p className="font-['Nunito_Sans_7pt_SemiExpanded:SemiBold','Noto_Sans_JP:Bold',sans-serif] leading-[20px] text-[16px] tracking-[0.016px]" style={{ fontVariationSettings: "'wght' 700" }}>
                  目標単位
                </p>
                <p className="font-['Nunito_Sans_7pt_SemiExpanded:SemiBold','Noto_Sans:SemiBold',sans-serif] leading-none text-[10px] tracking-[0.01px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 600" }}>
                  ※
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[6px] w-full">
              <div className="h-[35px] relative w-full">
                <div className="flex items-center overflow-clip py-[12px] relative size-full z-10">
                  <input
                    {...register("unit", {
                      required: "目標単位は必須です",
                      maxLength: {
                        value: 10,
                        message: "目標単位は10文字以内で入力してください",
                      },
                    })}
                    type="text"
                    placeholder="円"
                    onChange={handleInputChange}
                    className="flex-1 h-[30px] bg-transparent font-['Nunito_Sans_7pt_SemiExpanded:Medium','Noto_Sans_JP:Medium',sans-serif] text-[14px] text-[#333] placeholder:text-[#c1c1c1] tracking-[0.014px] outline-none border-none relative z-10"
                    style={{ fontVariationSettings: "'wght' 500" }}
                  />
                </div>
                <div aria-hidden="true" className="absolute border-[#eaeaea] border-b-2 border-solid inset-0 pointer-events-none z-0" />
              </div>
              {errors.unit && (
                <p className="text-red-500 text-[12px]">{errors.unit.message}</p>
              )}
            </div>
          </div>

          {/* 意気込み */}
          <div className="flex flex-col gap-[4px] w-full">
            <div className="flex gap-[6px] items-center">
              <div className="size-[18px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                  <mask height="18" id="mask0_taunt" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
                    <rect fill="#D9D9D9" height="18" width="18" />
                  </mask>
                  <g mask="url(#mask0_taunt)">
                    <path d={svgPaths.p3ac0e400} fill="#238B8A" />
                  </g>
                </svg>
              </div>
              <p className="font-['Nunito_Sans_7pt_SemiExpanded:SemiBold','Noto_Sans_JP:Bold',sans-serif] leading-[20px] text-[#3c9095] text-[16px] tracking-[0.016px]" style={{ fontVariationSettings: "'wght' 700" }}>
                目標に向けての意気込み！
              </p>
            </div>
            <div className="flex flex-col gap-[6px] w-full">
              <div className="h-[35px] relative w-full">
                <div className="flex items-center overflow-clip py-[12px] relative size-full z-10">
                  <input
                    {...register("motivation")}
                    type="text"
                    placeholder="できたら頑張る！"
                    onChange={handleInputChange}
                    className="flex-1 h-[30px] bg-transparent font-['Nunito_Sans_7pt_SemiExpanded:Medium','Noto_Sans_JP:Medium',sans-serif] text-[14px] text-[#333] placeholder:text-[#c1c1c1] tracking-[0.014px] outline-none border-none relative z-10"
                    style={{ fontVariationSettings: "'wght' 500" }}
                  />
                </div>
                <div aria-hidden="true" className="absolute border-[#eaeaea] border-b-2 border-solid inset-0 pointer-events-none z-0" />
              </div>
            </div>
          </div>

          {/* 目標期日 */}
          <div className="flex flex-col gap-[4px] w-full">
            <div className="flex gap-[6px] items-center">
              <div className="size-[18px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                  <mask height="18" id="mask0_hourglass" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
                    <rect fill="#D9D9D9" height="18" width="18" />
                  </mask>
                  <g mask="url(#mask0_hourglass)">
                    <path d={svgPaths.p15065500} fill="#238B8A" />
                  </g>
                </svg>
              </div>
              <p className="font-['Nunito_Sans_7pt_SemiExpanded:SemiBold','Noto_Sans_JP:Bold',sans-serif] leading-[20px] text-[#3c9095] text-[16px] tracking-[0.016px]" style={{ fontVariationSettings: "'wght' 700" }}>
                目標期日
              </p>
            </div>
            <div className="flex flex-col gap-[6px] w-full">
              <div className="relative w-full">
                <div className="flex items-center overflow-clip py-[12px] relative w-full z-10">
                  <div className="flex flex-wrap gap-[12px_16px] items-center w-[311px]">
                    {[
                      { value: "thisyear", label: "今年" },
                      { value: "6months", label: "半年" },
                      { value: "3months", label: "3ヶ月" },
                      { value: "1month", label: "１ヶ月" },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className="flex gap-[4px] items-center cursor-pointer relative z-20"
                        onClick={() => {
                          setValue("deadline", option.value as any);
                          handleInputChange();
                        }}
                      >
                        <input
                          type="radio"
                          {...register("deadline")}
                          value={option.value}
                          className="hidden"
                        />
                        <div className="size-[18px] relative z-20">
                          <svg className="block size-full" viewBox="0 0 18 18">
                            <circle cx="9" cy="9" r="6.6" stroke="#3C9095" strokeWidth="1.3" fill="white" />
                            {watchedFields.deadline === option.value && (
                              <circle cx="9" cy="9" r="4" fill="#3C9095" />
                            )}
                          </svg>
                        </div>
                        <p className="font-['Nunito_Sans_7pt_SemiExpanded:Medium','Noto_Sans_JP:Medium',sans-serif] leading-[20px] text-[#3c9095] text-[14px] tracking-[0.014px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 500" }}>
                          {option.label}
                        </p>
                      </label>
                    ))}
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border-[#eaeaea] border-b-2 border-solid inset-0 pointer-events-none z-0" />
              </div>
            </div>
          </div>

          {/* タグ */}
          <div className="flex flex-col gap-[4px] w-full">
            <div className="flex gap-[6px] items-center">
              <div className="size-[18px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                  <mask height="18" id="mask0_sell" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
                    <rect fill="#D9D9D9" height="18" width="18" />
                  </mask>
                  <g mask="url(#mask0_sell)">
                    <path d={svgPaths.p37dc3700} fill="#238B8A" />
                  </g>
                </svg>
              </div>
              <p className="font-['Nunito_Sans_7pt_SemiExpanded:SemiBold','Noto_Sans_JP:Bold',sans-serif] leading-[20px] text-[#3c9095] text-[16px] tracking-[0.016px]" style={{ fontVariationSettings: "'wght' 700" }}>
                タグ
              </p>
            </div>
            <div className="flex flex-col gap-[6px] w-full">
              <div className="flex items-center overflow-clip py-[12px] relative w-full">
                <div className="flex flex-wrap gap-[12px_16px] items-center w-[311px]">
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => toggleTag(tag)}
                      className="flex gap-[4px] items-center"
                    >
                      <div className="size-[18px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                          <mask height="18" id={`mask_tag_${tag}`} maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
                            <rect fill="#D9D9D9" height="18" width="18" />
                          </mask>
                          <g mask={`url(#mask_tag_${tag})`}>
                            <path
                              d={selectedTags.includes(tag) ? svgPaths.p1eb1ba80 : svgPaths.p299b14c0}
                              fill="#3C9095"
                            />
                          </g>
                        </svg>
                      </div>
                      <p className="font-['Nunito_Sans_7pt_SemiExpanded:Medium','Noto_Sans_JP:Medium',sans-serif] leading-[20px] text-[#3c9095] text-[14px] tracking-[0.014px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 500" }}>
                        {tag}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* タグを追加する */}
              <button
                type="button"
                onClick={() => setIsAddTagModalOpen(true)}
                className="flex gap-[6px] items-center"
              >
                <div className="size-[18px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <mask height="18" id="mask0_add_circle" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
                      <rect fill="#D9D9D9" height="18" width="18" />
                    </mask>
                    <g mask="url(#mask0_add_circle)">
                      <path d={svgPaths.p3743fa00} fill="#3C9095" />
                    </g>
                  </svg>
                </div>
                <p className="font-['Nunito_Sans_7pt_SemiExpanded:SemiBold','Noto_Sans_JP:Bold',sans-serif] leading-[20px] text-[#3c9095] text-[14px] tracking-[0.014px]" style={{ fontVariationSettings: "'wght' 700" }}>
                  タグを追加する
                </p>
              </button>
            </div>
          </div>

          {/* 右下の装飾 */}
          <div className="absolute right-0 bottom-0 size-[13px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
              <path d={svgPaths.p3cb9f280} fill="#238B8A" />
            </svg>
          </div>
        </div>

        {/* 目標を設定ボタン */}
        <div className="flex justify-center mt-[32px]">
          <button
            type="submit"
            className="relative bg-white flex gap-[6px] items-center justify-center px-[24px] py-[16px] rounded-[8px] shadow-[0px_1px_4px_0px_#e6f9fd,0px_1px_4px_0px_#e6f9fd] hover:shadow-lg transition-all w-full max-w-[343px]"
          >
            <div className="size-[24px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <mask height="24" id="mask0_mountain_flag" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
                  <rect fill="#D9D9D9" height="24" width="24" />
                </mask>
                <g mask="url(#mask0_mountain_flag)">
                  <path d={buttonSvgPaths.p6464dc0} fill="#3C9095" />
                </g>
              </svg>
            </div>
            <p className="font-['Hiragino_Kaku_Gothic_Pro:W6',sans-serif] leading-[20px] text-[#3c9095] text-[16px] text-center tracking-[0.016px]">
              目標を設定
            </p>
            <div className="absolute h-[14px] right-0 bottom-0 w-[15px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14">
                <path d={buttonSvgPaths.p218d5f00} fill="#3C9095" />
              </svg>
            </div>
          </button>
        </div>
      </form>

      {/* タグ追加モーダル */}
      {isAddTagModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[12px] p-[24px] w-[300px] shadow-lg">
            <h3 className="font-['Nunito_Sans_7pt_SemiExpanded:Bold','Noto_Sans_JP:Bold',sans-serif] text-[18px] text-[#3c9095] mb-[16px]" style={{ fontVariationSettings: "'wght' 700" }}>
              タグを追加
            </h3>
            <input
              type="text"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              placeholder="新しいタグ名"
              className="w-full h-[40px] px-[12px] border-2 border-[#eaeaea] rounded-[8px] font-['Nunito_Sans_7pt_SemiExpanded:Medium','Noto_Sans_JP:Medium',sans-serif] text-[14px] outline-none focus:border-[#3c9095] mb-[16px]"
              style={{ fontVariationSettings: "'wght' 500" }}
            />
            <div className="flex gap-[12px] justify-end">
              <button
                type="button"
                onClick={() => {
                  setIsAddTagModalOpen(false);
                  setNewTag("");
                }}
                className="px-[16px] py-[8px] bg-[#e0e0e0] rounded-[6px] font-['Nunito_Sans_7pt_SemiExpanded:Medium','Noto_Sans_JP:Medium',sans-serif] text-[14px] hover:bg-[#d0d0d0] transition-colors"
                style={{ fontVariationSettings: "'wght' 500" }}
              >
                キャンセル
              </button>
              <button
                type="button"
                onClick={handleAddTag}
                disabled={!newTag.trim()}
                className="px-[16px] py-[8px] bg-[#3c9095] text-white rounded-[6px] font-['Nunito_Sans_7pt_SemiExpanded:Medium','Noto_Sans_JP:Medium',sans-serif] text-[14px] disabled:opacity-50 hover:bg-[#2d6c70] transition-colors"
                style={{ fontVariationSettings: "'wght' 500" }}
              >
                追加
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 目標数値モーダル */}
      {isTargetValueModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[12px] p-[24px] w-[300px] shadow-lg">
            <h3 className="font-['Nunito_Sans_7pt_SemiExpanded:Bold','Noto_Sans_JP:Bold',sans-serif] text-[18px] text-[#3c9095] mb-[16px]" style={{ fontVariationSettings: "'wght' 700" }}>
              目標数値を設定
            </h3>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={9}
              value={tempTargetValue}
              onChange={(e) => setTempTargetValue(e.target.value.replace(/\D/g, ""))}
              placeholder="目標数値"
              className="w-full h-[40px] px-[12px] border-2 border-[#eaeaea] rounded-[8px] font-['Nunito_Sans_7pt_SemiExpanded:Medium','Noto_Sans_JP:Medium',sans-serif] text-[14px] outline-none focus:border-[#3c9095] mb-[16px]"
              style={{ fontVariationSettings: "'wght' 500" }}
            />
            <div className="flex gap-[12px] justify-end">
              <button
                type="button"
                onClick={() => {
                  setIsTargetValueModalOpen(false);
                  setTempTargetValue("");
                }}
                className="px-[16px] py-[8px] bg-[#e0e0e0] rounded-[6px] font-['Nunito_Sans_7pt_SemiExpanded:Medium','Noto_Sans_JP:Medium',sans-serif] text-[14px] hover:bg-[#d0d0d0] transition-colors"
                style={{ fontVariationSettings: "'wght' 500" }}
              >
                キャンセル
              </button>
              <button
                type="button"
                onClick={handleSetTargetValue}
                disabled={!tempTargetValue.trim()}
                className="px-[16px] py-[8px] bg-[#3c9095] text-white rounded-[6px] font-['Nunito_Sans_7pt_SemiExpanded:Medium','Noto_Sans_JP:Medium',sans-serif] text-[14px] disabled:opacity-50 hover:bg-[#2d6c70] transition-colors"
                style={{ fontVariationSettings: "'wght' 500" }}
              >
                設定
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}