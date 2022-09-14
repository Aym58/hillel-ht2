import { configureStore } from '@reduxjs/toolkit';
import popularReducer from './popular/popular.slice';
import battleReducer from './battle/battle.slice';
import thunk from 'redux-thunk';

export const store = configureStore({
	reducer: {
		popular: popularReducer,
		battle: battleReducer,
	},
	middleware: [thunk],
});
