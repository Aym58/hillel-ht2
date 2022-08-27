import { useState, useEffect } from 'react';
import { fetchPopularRepos } from '../Api.js';

import SelectedLanguages from './selectedLanguages.js';

import Repos from './repos.js';
import Loader from './loader.js';
import { useSearchParams } from 'react-router-dom';

const Popular = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [selectedLanguage, setSelectedLanguage] = useState(
		searchParams.get('language') ? searchParams.get('language') : 'All'
	);
	const [repos, setRepos] = useState([]);
	const [loader, setLoader] = useState(false);

	useEffect(() => {
		setLoader(true);
		fetchPopularRepos(selectedLanguage).then((data) => {
			setRepos(data);
			setLoader(false);
		});
	}, [selectedLanguage, searchParams]);

	const selectedLanguageHandler = (language) => {
		setSelectedLanguage(language);
		setSearchParams({ language: language });
	};

	return (
		<div>
			<SelectedLanguages
				selectedLanguage={selectedLanguage}
				selectedLanguageHandler={selectedLanguageHandler}
				isDisabled={loader}
			/>

			{loader ? <Loader /> : repos.length ? <Repos repos={repos} /> : null}
		</div>
	);
};

export default Popular;
