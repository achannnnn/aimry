export interface ProgressRecord {
  date: string; // YYYY-MM-DD形式
  value: number; // その日の進捗値
  percentage: number; // 達成率（%）
}

export interface Goal {
  id: string;
  title: string;
  progress: number; // 現在の進捗値
  target: number; // 目標値
  unit?: string; // 目標単位（オプショナル）
  motivation?: string; // 意気込み（オプショナル）
  tags?: string[]; // タグ（オプショナル）
  deadline: string; // 期限日（ISO形式）
  createdAt: string; // 登録日（ISO形式）
  order: number; // 並び順
  year: number; // 年
  progressHistory?: ProgressRecord[]; // 進捗履歴（オプショナル）
}

export type SortOption = 
  | "newest" // 登録順（新しい順）
  | "oldest" // 登録逆順（古い順）
  | "progressHigh" // 達成率が高い順
  | "progressLow"; // 達成率が低い順