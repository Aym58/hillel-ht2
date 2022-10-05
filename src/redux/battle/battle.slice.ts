import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { PlayerType } from '../../types/types';

interface IPopularState {
  playerOneName: string;
  playerTwoName: string;
  playerOneImage: null | string;
  playerTwoImage: null | string;
  players: PlayerType[];
  loader: boolean;
  error: string | null;
}

const initialState: IPopularState = {
  playerOneName: '',
  playerTwoName: '',
  playerOneImage: null,
  playerTwoImage: null,
  players: [],
  loader: false,
  error: null,
};

export const battleSlice = createSlice({
  name: 'battle',
  initialState,
  reducers: {
    fetchBattleResultsRequest: (state) => {
      state.loader = true;
    },
    fetchBattleResultsSuccess: (state, action: PayloadAction<PlayerType[]>) => {
      state.players = action.payload;
      state.loader = false;
      state.error = '';
      state.playerOneName = action.payload[0].profile.login;
      state.playerTwoName = action.payload[1].profile.login;
      state.playerOneImage = action.payload[0].profile.avatar_url;
      state.playerTwoImage = action.payload[1].profile.avatar_url;
    },
    fetchBattleResultsFailure: (state, action: PayloadAction<string>) => {
      state.loader = false;
      state.error = action.payload;
    },
    updatePlayerOneName: (state, action: PayloadAction<string>) => {
      state.playerOneName = action.payload;
    },
    updatePlayerTwoName: (state, action: PayloadAction<string>) => {
      state.playerTwoName = action.payload;
    },
    updatePlayerOneImage: (state, action: PayloadAction<null | string>) => {
      state.playerOneImage = action.payload;
    },
    updatePlayerTwoImage: (state, action: PayloadAction<null | string>) => {
      state.playerTwoImage = action.payload;
    },
    setPlayersState: (state, action: PayloadAction<PlayerType[]>) => {
      state.players = action.payload;
    },
    setLoaderState: (state, action: PayloadAction<boolean>) => {
      state.loader = action.payload;
    },
    setErrorState: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  updatePlayerOneName,
  updatePlayerTwoName,
  updatePlayerOneImage,
  updatePlayerTwoImage,
  setPlayersState,
  setLoaderState,
  setErrorState,
  fetchBattleResultsRequest,
  fetchBattleResultsSuccess,
  fetchBattleResultsFailure,
} = battleSlice.actions;

export default battleSlice.reducer;
