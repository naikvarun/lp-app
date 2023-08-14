import { QuestionDifficulty } from '../../questions/data.tsx';
import './difficulty-badge.scss';
const DifficultyBadge: React.FC<{ difficulty: QuestionDifficulty }> = ({
  difficulty,
}) => {
  return <span className={`badge badge-${difficulty}`}> {difficulty}</span>;
};
export default DifficultyBadge;
