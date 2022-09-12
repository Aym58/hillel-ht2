import { combineReducers } from 'redux';
import { popularReducer } from './popular/popular.reducer';

export const rootReducer = combineReducers({ popularReducer });
