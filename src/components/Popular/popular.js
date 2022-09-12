import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import SelectedLanguages from './selectedLanguages.js';

import Repos from './repos.js';
import Loader from '../../loader.js';
import { useSearchParams } from 'react-router-dom';

import { setSelectedLanguage } from '../../redux/popular/popular.actions.js';

import { fetchPopularRepos } from '../../redux/popular/popular.thunk.js';

const Popular = () => {
	const dispatch = useDispatch();

	const selectedLanguage = useSelector(
		(state) => state.popularReducer.selectedLanguage
	);

	console.log('selectedLanguage ', selectedLanguage);

	const [searchParams, setSearchParams] = useSearchParams();

	const repos = useSelector((state) => state.popularReducer.repos);

	const [loader, setLoader] = useState(false);

	useEffect(() => {
		dispatch(fetchPopularRepos(selectedLanguage));
		/*setLoader(true);
		fetchPopularReposHttpRequest(searchParams.get('language') || 'All').then(
			(data) => {
				setRepos(data);
				setLoader(false);
			}
		);*/
	}, [selectedLanguage]);

	const selectedLanguageHandler = (language) => {
		setSearchParams({ language: language });
		dispatch(setSelectedLanguage(language));
	};

	return (
		<div>
			<SelectedLanguages
				selectedLanguage={searchParams.get('language') || 'All'}
				selectedLanguageHandler={selectedLanguageHandler}
				isDisabled={loader}
			/>

			{loader ? <Loader /> : repos.length ? <Repos repos={repos} /> : null}
		</div>
	);
};

export default Popular;
