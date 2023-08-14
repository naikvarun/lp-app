export type QuestionDifficulty = 'easy' | 'hard' | 'medium';

export type Question = {
  problem: string;
  pattern: string;
  link: string;
  difficulty: QuestionDifficulty;
  video: string;
  isCompleted?: boolean;
};

export type QuestionID = Question['link'];
export type ProgressID = Question['pattern'];
export type Progress = {
  total: number;
  completed: number;
};
