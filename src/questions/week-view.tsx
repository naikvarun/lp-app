import { Question } from '../types.ts';
import QuestionRow from './question-row.tsx';
import './week-view.scss';
const WeekView: React.FC<{ index: number; questions: Question[] }> = ({
  index,
  questions,
}) => {
  return (
    <>
      <details open className="week">
        <summary>
          <span>Week {index}</span>
        </summary>
        <div className="question-list">
          {questions.map((q) => (
            <QuestionRow key={q.link} link={q.link} />
          ))}
        </div>
      </details>
    </>
  );
};

export default WeekView;
