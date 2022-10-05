import { AppDispatch } from '../store';
import { AppThunk } from '../store';

import {
  fetchBattleResultsRequest,
  fetchBattleResultsSuccess,
  fetchBattleResultsFailure,
} from './battle.slice';

import type { ErrorType } from '../../types/types';

import { battle } from '../../Api';

export const fetchBattleResults: any =
  (playersArray: string[]): AppThunk =>
  (dispatch: AppDispatch): Promise<any> => {
    dispatch(fetchBattleResultsRequest());

    return battle(playersArray)
      .then((data) => dispatch(fetchBattleResultsSuccess(data)))
      .catch((error: ErrorType) => {
        const ErrorMessage: string = error.message;
        return dispatch(fetchBattleResultsFailure(ErrorMessage));
      });
  };
