import React from 'react';
import DifficultyBadge from '../components/difficulty-badge/difficulty-badge.tsx';
import VideoButton from '../components/video-button/video-button.tsx';
import './question-row.scss';
import { QuestionID } from '../types.ts';
import { useAppDispatch, useAppSelector } from '../store';
import { markQuestion } from '../store/questions.actions.ts';
const QuestionRow: React.FC<{ link: QuestionID }> = ({ link }) => {
  const question = useAppSelector((state) => state.questions.questions[link]);
  const dispatch = useAppDispatch();

  const toggleCompleted = () => {
    dispatch(markQuestion(link, !question.isCompleted));
  };
  const tdClasses = question.isCompleted ? 'completed' : '';
  return (
    <tr key={question.link}>
      <td className={`row-center ${tdClasses}`}>
        <input
          type="checkbox"
          checked={question.isCompleted}
          onChange={toggleCompleted}
        />
      </td>
      <td className={tdClasses}>
        <a
          href={`https://leetcode.com/problems/${question.link}`}
          target="_blank"
        >
          {question.problem}
        </a>
      </td>
      <td className={tdClasses}>{question.pattern} </td>
      <td className={tdClasses}>
        <DifficultyBadge difficulty={question.difficulty} />{' '}
      </td>
      <td className={`${tdClasses} row-center`}>
        <VideoButton link={question.video} />{' '}
      </td>
    </tr>
  );
};
export default QuestionRow;
