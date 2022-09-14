import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	playerOneName: '',
	playerTwoName: '',
	playerOneImage: null,
	playerTwoImage: null,
	players: [],
	loader: false,
	error: '',
};

export const battleSlice = createSlice({
	name: 'battle',
	initialState,
	reducers: {
		fetchBattleResultsRequest: (state) => {
			state.loader = true;
		},
		fetchBattleResultsSuccess: (state, action) => {
			state.players = action.payload;
			state.loader = false;
			state.error = '';
			state.playerOneName = action.payload[0].profile.login;
			state.playerTwoName = action.payload[1].profile.login;
			state.playerOneImage = action.payload[0].profile.avatar_url;
			state.playerTwoImage = action.payload[1].profile.avatar_url;
		},
		fetchBattleResultsFailure: (state, action) => {
			state.loader = false;
			state.error = action.payload;
		},
		updatePlayerOneName: (state, action) => {
			state.playerOneName = action.payload;
		},
		updatePlayerTwoName: (state, action) => {
			state.playerTwoName = action.payload;
		},
		updatePlayerOneImage: (state, action) => {
			state.playerOneImage = action.payload;
		},
		updatePlayerTwoImage: (state, action) => {
			state.playerTwoImage = action.payload;
		},
		setPlayersState: (state, action) => {
			state.players = action.payload;
		},
		setLoaderState: (state, action) => {
			state.loader = action.payload;
		},
		setErrorState: (state, action) => {
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
