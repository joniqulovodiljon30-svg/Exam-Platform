
export interface TaskI {
  sentences: { text: string; answer: string }[];
}

export interface TaskII {
  items: { term: string; definition: string; key: string }[];
}

export interface TaskIII {
  items: string[];
}

export interface TaskIV {
  comparisons: { termA: string; termB: string }[];
}

export interface TaskV {
  words: string[];
}

export interface Variant {
  id: number;
  title: string;
  taskI: TaskI;
  taskII: TaskII;
  taskIII: TaskIII;
  taskIV: TaskIV;
  taskV: TaskV;
}

export interface Theme {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: string;
  variants: Variant[];
}

export interface ExamResult {
  themeId: string;
  variantId: number;
  score: number;
  maxScore: number;
  date: string;
  id: string;
  breakdown: {
    taskI: number;
    taskII: number;
    taskIII: number;
    taskIV: number;
    taskV: number;
  };
}

export interface UserState {
  name: string;
  history: ExamResult[];
}
