import { configureStore } from '@reduxjs/toolkit';
import questionReducers from './questions.slice.ts';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import appUiSlice from './app-ui.slice.ts';

export const store = configureStore({
  reducer: {
    questions: questionReducers,
    appUI: appUiSlice,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
