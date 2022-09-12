import {
	UPDATE_LANGUAGE,
	FETCH_POPULAR_REPOS_REQUEST,
	FETCH_POPULAR_REPOS_SUCCESS,
	FETCH_POPULAR_REPOS_FAILURE,
} from './popular.constatns';

export const setSelectedLanguage = (payload) => {
	return { type: UPDATE_LANGUAGE, payload };
};

export const fetchPopularReposRequest = () => {
	return { type: FETCH_POPULAR_REPOS_REQUEST };
};

export const fetchPopularReposSuccess = (payload) => {
	return { type: FETCH_POPULAR_REPOS_SUCCESS, payload };
};

export const fetchPopularReposFailure = (payload) => {
	return { type: FETCH_POPULAR_REPOS_FAILURE, payload };
};
