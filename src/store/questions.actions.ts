import { AppDispatch } from './index.ts';
import { questionActions } from './questions.slice.ts';
import { ALL_QUESTIONS } from '../questions/data.tsx';
import { localStore } from '../services/local-storage.ts';
import { QuestionID } from '../types.ts';

export function initializeQuestions() {
  return (dispatch: AppDispatch) => {
    const completed = localStore.getCompleted();
    const allQuestions = ALL_QUESTIONS.map((q) => ({
      ...q,
      isCompleted: q.link in completed,
    }));
    dispatch(questionActions.setQuestions({ questions: allQuestions }));
  };
}

export function markQuestion(link: QuestionID, completed: boolean) {
  return (dispatch: AppDispatch) => {
    localStore.markQuestionCompleted(link, completed);
    dispatch(questionActions.markCompleted({ completed, id: link }));
  };
}
