export type QuestionDifficulty = 'easy' | 'hard' | 'medium';

export interface Question {
  problem: string;
  pattern: string;
  link: string;
  difficulty: QuestionDifficulty;
  video: string;
  isCompleted?: boolean;
  duration: number;
}

export type QuestionID = Question['link'];
export type ProgressID = Question['pattern'];
export type Progress = {
  total: number;
  completed: number;
};
