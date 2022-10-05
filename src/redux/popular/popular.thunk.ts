import { AppDispatch, AppThunk } from '../store';

import {
  fetchPopularReposRequest,
  fetchPopularReposSuccess,
  fetchPopularReposFailure,
} from './popular.slice';

import type { ErrorType, ReposType } from '../../types/types';

import { fetchPopularReposHttpRequest } from '../../Api';

export const fetchPopularRepos: any =
  (language: string): AppThunk =>
  (dispatch: AppDispatch): Promise<any> => {
    dispatch(fetchPopularReposRequest());

    return fetchPopularReposHttpRequest(language)
      .then((data: ReposType[]) => {
        return dispatch(fetchPopularReposSuccess(data));
      })
      .catch((error: ErrorType) => {
        const ErrorMessage: string = error.message;
        return dispatch(fetchPopularReposFailure(ErrorMessage));
      });
  };
