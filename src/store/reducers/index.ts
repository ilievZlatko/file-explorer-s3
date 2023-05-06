import { combineReducers } from '@reduxjs/toolkit';
import counterSlice from '../slices/counterSlice';

const reducers = combineReducers({
  counter: counterSlice,
});

export default reducers;
