import { combineReducers } from '@reduxjs/toolkit';
import burgerReducer from './burgerReducer';

const rootReducer = combineReducers({
  burger: burgerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
