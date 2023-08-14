import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Progress, ProgressID, Question, QuestionID } from '../types.ts';
const initialState: {
  questionList: QuestionID[];
  questions: Record<QuestionID, Question>;
  progress: Record<ProgressID, Progress>;
} = {
  questionList: [],
  questions: {},
  progress: {},
};
const questionSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    setQuestions: (state, action: PayloadAction<{ questions: Question[] }>) => {
      const list: QuestionID[] = [];
      const questions: Record<QuestionID, Question> = {};
      const progress: Record<ProgressID, Progress> = {};
      action.payload.questions.forEach((q) => {
        const id = q.link;
        list.push(id);
        questions[id] = q;
        const pattern = q.pattern;
        if (!(pattern in progress)) {
          progress[pattern] = { total: 0, completed: 0 };
        }
        progress[pattern].total += 1;
        progress[pattern].completed += q.isCompleted ? 1 : 0;
      });
      state.questionList = list;
      state.questions = questions;
      state.progress = progress;
    },

    markCompleted: (
      state,
      action: PayloadAction<{ id: QuestionID; completed: boolean }>,
    ) => {
      const { id, completed } = action.payload;
      const pattern = state.questions[id].pattern;
      state.questions[id].isCompleted = completed;
      state.progress[pattern].completed += completed ? 1 : -1;
    },
  },
});

export default questionSlice.reducer;
export const questionActions = questionSlice.actions;
