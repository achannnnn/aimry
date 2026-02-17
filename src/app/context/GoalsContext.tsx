import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { Goal, ProgressRecord } from "../types/goal";
import { mockGoals } from "../data/mockData";
import { supabase } from "../lib/supabaseClient";
import { useAuth } from "./AuthContext";

interface GoalsContextType {
  goals: Goal[];
  isLoading: boolean;
  addGoal: (goal: Omit<Goal, "id" | "order" | "createdAt">) => Promise<string>;
  updateGoal: (id: string, updates: Partial<Goal>) => Promise<void>;
  deleteGoal: (id: string) => Promise<void>;
  reorderGoals: (reorderedGoals: Goal[]) => Promise<void>;
  updateProgress: (id: string, newProgress: number) => Promise<void>;
}

const GoalsContext = createContext<GoalsContextType | undefined>(undefined);

type GoalRow = {
  id: string;
  user_id: string;
  title: string;
  progress: number;
  target: number;
  unit: string | null;
  motivation: string | null;
  tags: string[] | null;
  deadline: string;
  created_at: string;
  order_index: number;
  year: number;
  progress_history: ProgressRecord[] | null;
};

function toIsoDate(value: string) {
  // Supabaseのdate/timestamptzから YYYY-MM-DD を取り出す
  return value.includes("T") ? value.split("T")[0] : value;
}

function rowToGoal(row: GoalRow): Goal {
  return {
    id: row.id,
    title: row.title,
    progress: row.progress,
    target: row.target,
    unit: row.unit ?? undefined,
    motivation: row.motivation ?? undefined,
    tags: row.tags ?? undefined,
    deadline: toIsoDate(row.deadline),
    createdAt: toIsoDate(row.created_at),
    order: row.order_index,
    year: row.year,
    progressHistory: row.progress_history ?? undefined,
  };
}

function goalToRowPatch(goal: Partial<Goal>): Partial<GoalRow> {
  const patch: Partial<GoalRow> = {};
  if (goal.title !== undefined) patch.title = goal.title;
  if (goal.progress !== undefined) patch.progress = goal.progress;
  if (goal.target !== undefined) patch.target = goal.target;
  if (goal.unit !== undefined) patch.unit = goal.unit ?? null;
  if (goal.motivation !== undefined) patch.motivation = goal.motivation ?? null;
  if (goal.tags !== undefined) patch.tags = goal.tags ?? null;
  if (goal.deadline !== undefined) patch.deadline = goal.deadline;
  if (goal.createdAt !== undefined) patch.created_at = goal.createdAt;
  if (goal.order !== undefined) patch.order_index = goal.order;
  if (goal.year !== undefined) patch.year = goal.year;
  if (goal.progressHistory !== undefined) patch.progress_history = goal.progressHistory ?? null;
  return patch;
}

export function GoalsProvider({ children }: { children: ReactNode }) {
  const { user, isLoading: authLoading } = useAuth();
  const [goals, setGoals] = useState<Goal[]>(() => {
    const stored = localStorage.getItem("goals");
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        console.error("Failed to parse stored goals:", e);
        return mockGoals;
      }
    }
    return mockGoals;
  });
  const [isLoading, setIsLoading] = useState(false);

  const isOnlineMode = useMemo(() => Boolean(supabase && user), [user]);

  // オンライン未設定時は従来通りlocalStorageを利用
  useEffect(() => {
    if (isOnlineMode) return;
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals, isOnlineMode]);

  useEffect(() => {
    if (authLoading) return;

    if (!supabase || !user) {
      // Supabase未設定 or 未ログイン時はローカルのまま
      return;
    }

    setIsLoading(true);
    setGoals([]);
    supabase
      .from("goals")
      .select(
        "id,user_id,title,progress,target,unit,motivation,tags,deadline,created_at,order_index,year,progress_history"
      )
      .eq("user_id", user.id)
      .order("year", { ascending: false })
      .order("order_index", { ascending: true })
      .then(({ data, error }) => {
        if (error) throw error;
        const loaded = (data as GoalRow[]).map(rowToGoal);
        setGoals(loaded);
      })
      .catch((e) => {
        console.error("Failed to load goals from Supabase:", e);
      })
      .finally(() => setIsLoading(false));
  }, [authLoading, user]);

  const addGoal = async (goalData: Omit<Goal, "id" | "order" | "createdAt">) => {
    const today = new Date().toISOString().split("T")[0];
    const percentage = goalData.target > 0 ? Math.round((goalData.progress / goalData.target) * 100) : 0;

    if (!supabase || !user) {
      const newGoal: Goal = {
        ...goalData,
        id: `goal-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        order: goals.length,
        createdAt: today,
        progressHistory: [{ date: today, value: goalData.progress, percentage }],
      };
      setGoals((prev) => [...prev, newGoal]);
      return newGoal.id;
    }

    const optimisticId = `tmp-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const optimistic: Goal = {
      ...goalData,
      id: optimisticId,
      order: goals.length,
      createdAt: today,
      progressHistory: [{ date: today, value: goalData.progress, percentage }],
    };
    setGoals((prev) => [...prev, optimistic]);

    const insertRow = {
      user_id: user.id,
      title: goalData.title,
      progress: goalData.progress,
      target: goalData.target,
      unit: goalData.unit ?? null,
      motivation: goalData.motivation ?? null,
      tags: goalData.tags ?? null,
      deadline: goalData.deadline,
      order_index: optimistic.order,
      year: goalData.year,
      progress_history: optimistic.progressHistory ?? null,
    };

    const { data, error } = await supabase
      .from("goals")
      .insert(insertRow)
      .select(
        "id,user_id,title,progress,target,unit,motivation,tags,deadline,created_at,order_index,year,progress_history"
      )
      .single();
    if (error) {
      setGoals((prev) => prev.filter((g) => g.id !== optimisticId));
      throw error;
    }

    const saved = rowToGoal(data as GoalRow);
    setGoals((prev) => prev.map((g) => (g.id === optimisticId ? saved : g)));
    return saved.id;
  };

  const updateGoal = async (id: string, updates: Partial<Goal>) => {
    setGoals((prev) =>
      prev.map((goal) => (goal.id === id ? { ...goal, ...updates } : goal))
    );

    if (!supabase || !user || id.startsWith("tmp-")) return;

    const patch = goalToRowPatch(updates);
    const { error } = await supabase
      .from("goals")
      .update(patch)
      .eq("id", id)
      .eq("user_id", user.id);
    if (error) throw error;
  };

  const updateProgress = async (id: string, newProgress: number) => {
    const today = new Date().toISOString().split("T")[0];

    const current = goals.find((g) => g.id === id);
    if (!current) return;

    const percentage = current.target > 0 ? Math.round((newProgress / current.target) * 100) : 0;
    const history = current.progressHistory || [];
    const todayIndex = history.findIndex((record) => record.date === today);

    const updatedHistory = (() => {
      if (todayIndex >= 0) {
        const copy = [...history];
        copy[todayIndex] = { date: today, value: newProgress, percentage };
        return copy;
      }
      return [...history, { date: today, value: newProgress, percentage }];
    })();

    await updateGoal(id, { progress: newProgress, progressHistory: updatedHistory });
  };

  const deleteGoal = async (id: string) => {
    setGoals((prev) => prev.filter((goal) => goal.id !== id));

    if (!supabase || !user || id.startsWith("tmp-")) return;

    const { error } = await supabase
      .from("goals")
      .delete()
      .eq("id", id)
      .eq("user_id", user.id);
    if (error) throw error;
  };

  const reorderGoals = async (reorderedGoals: Goal[]) => {
    const goalsWithUpdatedOrder = reorderedGoals.map((goal, index) => ({
      ...goal,
      order: index,
    }));
    setGoals(goalsWithUpdatedOrder);

    if (!supabase || !user) return;

    const rows = goalsWithUpdatedOrder
      .filter((g) => !g.id.startsWith("tmp-"))
      .map((g) => ({ id: g.id, user_id: user.id, order_index: g.order }));

    // upsertでまとめて更新
    const { error } = await supabase.from("goals").upsert(rows, {
      onConflict: "id",
    });
    if (error) throw error;
  };

  return (
    <GoalsContext.Provider
      value={{ goals, isLoading, addGoal, updateGoal, deleteGoal, reorderGoals, updateProgress }}
    >
      {children}
    </GoalsContext.Provider>
  );
}

export function useGoals() {
  const context = useContext(GoalsContext);
  if (context === undefined) {
    throw new Error("useGoals must be used within a GoalsProvider");
  }
  return context;
}