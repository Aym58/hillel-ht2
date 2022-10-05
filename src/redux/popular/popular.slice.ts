import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

import type { ReposType } from '../../types/types';

interface IPopularState {
  loading: boolean;
  repos: ReposType[];
  error: string | null;
}

const initialState: IPopularState = {
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
    fetchPopularReposSuccess: (state, action: PayloadAction<ReposType[]>) => {
      state.loading = false;
      state.repos = action.payload;
    },
    fetchPopularReposFailure: (state, action: PayloadAction<string>) => {
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
