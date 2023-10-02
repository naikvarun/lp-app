export type LocalStorageKeys = 'questions.completed' | 'ui.showTopics';

export type CompletedQuestions = { [key: string]: boolean };

function get<T>(key: LocalStorageKeys): T {
  const saved = localStorage.getItem(key);
  return JSON.parse(saved || '{}');
}
function save<T>(key: LocalStorageKeys, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}
function getCompleted() {
  return get<CompletedQuestions>('questions.completed');
}
function markQuestionCompleted(link: string, completed: boolean) {
  const saved = get<CompletedQuestions>('questions.completed');
  if (completed) {
    saved[link] = true;
  } else {
    delete saved[link];
  }
  save('questions.completed', saved);
}

function setTopicVisibility(visiablity: boolean) {
  save('ui.showTopics', visiablity);
}

function getTopicVisibility() {
  return get<boolean>('ui.showTopics');
}

export const localStore = {
  markQuestionCompleted,
  getCompleted,
  setTopicVisibility,
  getTopicVisibility,
};
