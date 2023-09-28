import QuestionRow from './question-row.tsx';
import { useAppSelector } from '../store';

const Questions = () => {
  const questionList = useAppSelector((state) => state.questions.questionList);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Problem</th>
            <th>Pattern</th>
            <th>Difficulty</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {questionList.map((q) => (
            <QuestionRow key={q} link={q} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Questions;
