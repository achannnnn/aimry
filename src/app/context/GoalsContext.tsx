import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Goal } from "../types/goal";
import { mockGoals } from "../data/mockData";
import { calculateGoalProgressPercentage, getGoalDirection, getGoalStartValue } from "../lib/goalProgress";

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

export function GoalsProvider({ children }: { children: ReactNode }) {
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
  const [isLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals]);

  const addGoal = async (goalData: Omit<Goal, "id" | "order" | "createdAt">) => {
    const today = new Date().toISOString().split("T")[0];
    const direction = getGoalDirection(goalData);
    const startValue = getGoalStartValue(goalData);
    const percentage = calculateGoalProgressPercentage({
      direction,
      startValue,
      progress: goalData.progress,
      target: goalData.target,
    });

    const newGoal: Goal = {
      ...goalData,
      direction,
      startValue,
      id: `goal-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`,
      order: goals.length,
      createdAt: today,
      progressHistory: [{ date: today, value: goalData.progress, percentage }],
    };
    setGoals((prev) => [...prev, newGoal]);
    return newGoal.id;
  };

  const updateGoal = async (id: string, updates: Partial<Goal>) => {
    setGoals((prev) =>
      prev.map((goal) => (goal.id === id ? { ...goal, ...updates } : goal))
    );
  };

  const updateProgress = async (id: string, newProgress: number) => {
    const today = new Date().toISOString().split("T")[0];

    const current = goals.find((g) => g.id === id);
    if (!current) return;

    const percentage = calculateGoalProgressPercentage({
      direction: current.direction,
      startValue: current.startValue,
      progress: newProgress,
      target: current.target,
    });
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
  };

  const reorderGoals = async (reorderedGoals: Goal[]) => {
    const goalsWithUpdatedOrder = reorderedGoals.map((goal, index) => ({
      ...goal,
      order: index,
    }));
    setGoals(goalsWithUpdatedOrder);
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