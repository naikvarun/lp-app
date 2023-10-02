import { useAppDispatch, useAppSelector } from '../store';
import divideQuestions from '../services/questions.service.ts';
import WeekView from './week-view.tsx';
import useShowTopics from '../hooks/useShowTopics.ts';
import { useEffect } from 'react';
import { initializeTopicVisibility } from '../store/app-ui.actions.ts';

const Questions = () => {
  const questions = useAppSelector((state) => state.questions.questions);
  const dispatch = useAppDispatch();
  const questionsPerWeek = divideQuestions(Object.values(questions), 8);
  const { showTopics, toggleShowTopics } = useShowTopics();
  useEffect(() => {
    dispatch(initializeTopicVisibility());
  }, [dispatch]);

  return (
    <>
      <fieldset>
        <label>
          <input
            type="checkbox"
            role="switch"
            onClick={toggleShowTopics}
            checked={showTopics}
          />
          Show Topics
        </label>
      </fieldset>
      {questionsPerWeek.map((q, i) => (
        <WeekView key={i} index={i + 1} questions={q} />
      ))}
    </>
  );
};

export default Questions;
