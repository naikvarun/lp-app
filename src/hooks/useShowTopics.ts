import { useAppDispatch, useAppSelector } from '../store';
import { setTopicVisibility } from '../store/app-ui.actions.ts';

export default function useShowTopics() {
  const showTopics = useAppSelector((state) => state.appUI.showTopics);
  const appDispatch = useAppDispatch();
  const toggleShowTopics = () => {
    appDispatch(setTopicVisibility(!showTopics));
  };
  return {
    showTopics,
    toggleShowTopics,
  };
}
