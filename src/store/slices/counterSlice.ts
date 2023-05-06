import { createSlice } from '@reduxjs/toolkit';

export interface State {
  counter: number;
}

export const initialState: State = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: 'counterSlice',
  initialState,
  reducers: {
    countUp(state, action) {
      state.counter += action.payload;
    },
    countDown(state, action) {
      state.counter -= action.payload;
    },
    resetCounter(state) {
      state.counter = 0;
    },
  },
});

export const { countUp, countDown, resetCounter } = counterSlice.actions;
export default counterSlice.reducer;
