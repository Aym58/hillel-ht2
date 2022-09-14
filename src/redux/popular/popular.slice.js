import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	repos: [],
	error: null,
};

export const popularSlice = createSlice({
	name: 'popular',
	initialState,
	reducers: {
		fetchPopularReposRequest: (state) => {
			state.loading = true;
			state.error = null;
		},
		fetchPopularReposSuccess: (state, action) => {
			state.loading = false;
			state.repos = action.payload;
		},
		fetchPopularReposFailure: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const {
	fetchPopularReposRequest,
	fetchPopularReposSuccess,
	fetchPopularReposFailure,
} = popularSlice.actions;

export default popularSlice.reducer;
