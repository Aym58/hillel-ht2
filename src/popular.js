import { useState, useEffect, useRef } from 'react';
import { fetchPopularRepos } from './Api.js';

import SelectedLanguages from './selectedLanguages.js';

import Repos from './repos.js';
import Loader from './loader.js';

const Popular = () => {
	const [selectedLanguage, setSelectedLanguage] = useState('All');
	const [repos, setRepos] = useState([]);
	const [loader, setLoader] = useState(false);

	useEffect(() => {
		setLoader(true);
		fetchPopularRepos(selectedLanguage).then((data) => {
			setRepos(data);
			setLoader(false);
		});
	}, [selectedLanguage]);

	const selectedLanguageHandler = (language) => {
		setSelectedLanguage(language);
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
