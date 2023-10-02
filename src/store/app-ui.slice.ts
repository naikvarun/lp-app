import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'appUI',
  initialState: {
    showTopics: true,
  },
  reducers: {
    setTopicVisibility(state, action: PayloadAction<boolean>) {
      state.showTopics = action.payload;
    },
  },
});
export default uiSlice.reducer;
export const uiSliceActions = uiSlice.actions;
