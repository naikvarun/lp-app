import { AppDispatch } from './index.ts';
import { uiSliceActions } from './app-ui.slice.ts';
import { localStore } from '../services/local-storage.ts';

export function setTopicVisibility(visibility: boolean) {
  return (dispatch: AppDispatch) => {
    localStore.setTopicVisibility(visibility);
    dispatch(uiSliceActions.setTopicVisibility(visibility));
  };
}

export function initializeTopicVisibility() {
  return (dispatch: AppDispatch) => {
    const visible = localStore.getTopicVisibility();
    dispatch(uiSliceActions.setTopicVisibility(visible));
  };
}
