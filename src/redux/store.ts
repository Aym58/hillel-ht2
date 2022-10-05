import { AnyAction, configureStore } from '@reduxjs/toolkit';
import popularReducer from './popular/popular.slice';
import battleReducer from './battle/battle.slice';
import thunk, { ThunkAction } from 'redux-thunk';

export const store = configureStore({
  reducer: {
    popular: popularReducer,
    battle: battleReducer,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;
