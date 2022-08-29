import { useState, useEffect } from 'react';
import { fetchPopularRepos } from '../../Api.js';

import SelectedLanguages from './selectedLanguages.js';

import Repos from './repos.js';
import Loader from '../../loader.js';
import { useSearchParams } from 'react-router-dom';

const Popular = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [repos, setRepos] = useState([]);
	const [loader, setLoader] = useState(false);

	useEffect(() => {
		setLoader(true);
		fetchPopularRepos(searchParams.get('language') || 'All').then((data) => {
			setRepos(data);
			setLoader(false);
		});
	}, [searchParams]);

	const selectedLanguageHandler = (language) => {
		setSearchParams({ language: language });
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
