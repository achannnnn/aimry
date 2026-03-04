import { Goal, GoalDirection } from "../types/goal";

function clampPercentage(value: number) {
  if (!Number.isFinite(value)) return 0;
  if (value < 0) return 0;
  return Math.round(value);
}

export function getGoalDirection(goal: Pick<Goal, "direction">): GoalDirection {
  return goal.direction === "decrease" ? "decrease" : "increase";
}

export function getGoalStartValue(goal: Pick<Goal, "direction" | "startValue" | "progress" | "target">): number {
  if (getGoalDirection(goal) === "increase") return 0;

  if (typeof goal.startValue === "number" && Number.isFinite(goal.startValue)) {
    return goal.startValue;
  }

  return Math.max(goal.progress, goal.target);
}

export function calculateGoalProgressPercentage(
  goal: Pick<Goal, "direction" | "startValue" | "progress" | "target">
): number {
  const direction = getGoalDirection(goal);
  const progress = Number(goal.progress);
  const target = Number(goal.target);

  if (!Number.isFinite(progress) || !Number.isFinite(target)) return 0;

  if (direction === "increase") {
    if (target <= 0) return 0;
    return clampPercentage((progress / target) * 100);
  }

  const startValue = getGoalStartValue(goal);
  const distance = startValue - target;
  if (distance <= 0) {
    return progress <= target ? 100 : 0;
  }

  return clampPercentage(((startValue - progress) / distance) * 100);
}

export function isGoalCompleted(goal: Pick<Goal, "direction" | "progress" | "target">): boolean {
  const direction = getGoalDirection(goal);
  if (direction === "decrease") {
    return goal.progress <= goal.target;
  }
  return goal.progress >= goal.target;
}
