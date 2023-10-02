import './difficulty-badge.scss';
import { QuestionDifficulty } from '../../types.ts';
const DifficultyBadge: React.FC<{ difficulty: QuestionDifficulty }> = ({
  difficulty,
}) => {
  return <small className={`badge badge-${difficulty}`}> {difficulty}</small>;
};
export default DifficultyBadge;
