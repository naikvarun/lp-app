import { useAppDispatch, useAppSelector } from '../store';
import { markQuestion } from '../store/questions.actions.ts';

export function useQuestion(link: string) {
  const question = useAppSelector((state) => state.questions.questions[link]);
  const dispatch = useAppDispatch();
  const toggleCompleted = () => {
    dispatch(markQuestion(link, !question.isCompleted));
  };
  return { question, toggleCompleted };
}
