import { createSlice } from '@reduxjs/toolkit';

export interface State {
  selectedFile: string | null;
}

export const initialState: State = {
  selectedFile: null,
};

export const fileTreeSlice = createSlice({
  name: 'fileTreeSlice',
  initialState,
  reducers: {
    setSelectedFile(state, action) {
      state.selectedFile = action.payload;
    },
  },
});

export const { setSelectedFile } = fileTreeSlice.actions;
export default fileTreeSlice.reducer;
