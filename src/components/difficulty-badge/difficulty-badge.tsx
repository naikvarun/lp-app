import './difficulty-badge.scss';
import { QuestionDifficulty } from '../../types.ts';
const DifficultyBadge: React.FC<{ difficulty: QuestionDifficulty }> = ({
  difficulty,
}) => {
  return <span className={`badge badge-${difficulty}`}> {difficulty}</span>;
};
export default DifficultyBadge;
