import {
	fetchBattleResultsRequest,
	fetchBattleResultsSuccess,
	fetchBattleResultsFailure,
} from './battle.slice';

import { battle } from '../../Api';

export const fetchBattleResults = (playersArray) => (dispatch) => {
	dispatch(fetchBattleResultsRequest());
	return battle(playersArray)
		.then((data) => dispatch(fetchBattleResultsSuccess(data)))
		.catch((error) => dispatch(fetchBattleResultsFailure(error)));
};
