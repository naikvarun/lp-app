import { Question } from '../types.ts';

export default function divideQuestions(
  questions: Question[],
  hoursPerWeek: number,
) {
  const minsPerWeek = hoursPerWeek * 60;
  const weeks = [];
  let currentWeek: Question[] = [];
  let totalMinsInCurrWeek = 0;
  for (const q of questions) {
    if (totalMinsInCurrWeek + q.duration > minsPerWeek) {
      weeks.push(currentWeek);
      currentWeek = [q];
      totalMinsInCurrWeek = q.duration;
    } else {
      currentWeek.push(q);
      totalMinsInCurrWeek += q.duration;
    }
  }
  return weeks;
}

export function getTopicDisplayString(topic: string) {
  return topic
    .split('-')
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join(' ');
}
