import { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { fetchPopularRepos } from '../../redux/popular/popular.thunk';

const languages = ['All', 'JavaScript', 'CSS', 'Python', 'Java', 'Ruby'];

const SelectedLanguages = memo(() => {
	const [languageParams, setLanguageParams] = useSearchParams();

	const dispatch = useDispatch();
	const loadingState = useSelector((state) => state.popular.loading);

	const updateLanguageHandler = (language) => {
		dispatch(fetchPopularRepos(language));
		setLanguageParams({ language: language });
	};

	useEffect(() => {
		dispatch(fetchPopularRepos(languageParams.get('language') || 'All'));
	}, []);

	return (
		<ul className='languages'>
			{languages.map((lang, index) => (
				<li
					key={index}
					style={
						lang === (languageParams.get('language') || 'All')
							? { color: '#d0021b' }
							: {}
					}
					onClick={!loadingState ? () => updateLanguageHandler(lang) : null}
				>
					{lang}
				</li>
			))}
		</ul>
	);
});

export default SelectedLanguages;
