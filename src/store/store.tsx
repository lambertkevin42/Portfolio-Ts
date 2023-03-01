import { createStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/rootReducer';

const initialState = {};

const store = createStore(rootReducer, initialState);

export default store;
