import { useAppSelector } from '../store';
import './progress.scss';
const Progress = () => {
  const progress = useAppSelector((state) => state.questions.progress);
  return (
    <>
      <details>
        <summary role="button" className="secondary">
          Progress
        </summary>
        <div className="progress-detail">
          {Object.keys(progress).map((pattern) => (
            <div className="progress-item" key={pattern}>
              <span>
                {pattern}{' '}
                {`( ${progress[pattern].completed} /  ${progress[pattern].total} )`}
              </span>
              <progress
                key={pattern}
                max={progress[pattern].total}
                value={progress[pattern].completed}
              >
                {pattern}
              </progress>
            </div>
          ))}
        </div>
      </details>
    </>
  );
};
export default Progress;
