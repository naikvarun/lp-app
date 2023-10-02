import React from 'react';
import './question-row.scss';
import { QuestionID } from '../types.ts';
import DifficultyBadge from '../components/difficulty-badge/difficulty-badge.tsx';
import { useQuestion } from '../hooks/useQuestion.ts';
import { getTopicDisplayString } from '../services/questions.service.ts';
import useShowTopics from '../hooks/useShowTopics.ts';
const QuestionRow: React.FC<{ link: QuestionID }> = ({ link }) => {
  const { question, toggleCompleted } = useQuestion(link);
  const { showTopics } = useShowTopics();
  const tdClasses = question.isCompleted ? 'question-completed' : '';
  return (
    <div className={`question-row ${tdClasses}`}>
      <div className="question-info">
        <a
          className="question-link"
          href={`https://leetcode.com/problems/${link}`}
          target="_blank"
        >
          {question.problem}
        </a>
        <div className="question-details">
          <DifficultyBadge difficulty={question.difficulty} />
          <small>·</small>

          <small>{question.duration} min</small>
          {showTopics && (
            <>
              <small>·</small>
              <small>{getTopicDisplayString(question.pattern)}</small>
            </>
          )}
        </div>
      </div>
      <button
        onClick={toggleCompleted}
        className={`toggle-button ${
          question.isCompleted ? 'mark-completed' : ''
        }`}
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
          </svg>
        </span>
      </button>
    </div>
  );
};
export default QuestionRow;
