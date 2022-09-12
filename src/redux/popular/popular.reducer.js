import {
	UPDATE_LANGUAGE,
	FETCH_POPULAR_REPOS_REQUEST,
	FETCH_POPULAR_REPOS_SUCCESS,
	FETCH_POPULAR_REPOS_FAILURE,
} from './popular.constatns';

const initialState = {
	selectedLanguage: 'All',
	loading: false,
	repos: [],
	error: null,
};

export const popularReducer = (state = initialState, action) => {
	if (action.type === FETCH_POPULAR_REPOS_REQUEST) {
		return { ...state, loading: true, error: null };
	}

	if (action.type === FETCH_POPULAR_REPOS_SUCCESS) {
		return { ...state, repos: action.payload, loading: false };
	}

	if (action.type === FETCH_POPULAR_REPOS_FAILURE) {
		return { ...state, error: action.payload, loading: false };
	}

	if (action.type === UPDATE_LANGUAGE) {
		return { ...state, selectedLanguage: action.payload };
	}
	return state;
};
