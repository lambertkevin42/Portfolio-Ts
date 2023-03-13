import { combineReducers } from '@reduxjs/toolkit';
import burgerReducer from './burgerReducer';
import toggleButtonReducer from './toggleButtonReducer';

const rootReducer = combineReducers({
  burger: burgerReducer,
  toggle: toggleButtonReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
