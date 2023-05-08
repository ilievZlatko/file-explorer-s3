import { combineReducers } from '@reduxjs/toolkit';
import fileTreeReducer from '../slices/fileTreeSlice';

const reducers = combineReducers({
  fileTree: fileTreeReducer,
});

export default reducers;
