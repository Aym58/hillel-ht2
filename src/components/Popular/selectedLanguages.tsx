import { FC, memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../redux/store';
import { useSearchParams } from 'react-router-dom';
import { fetchPopularRepos } from '../../redux/popular/popular.thunk';

const languages: string[] = [
  'All',
  'JavaScript',
  'CSS',
  'Python',
  'Java',
  'Ruby',
];

const SelectedLanguages: FC = memo((): JSX.Element => {
  const [languageParams, setLanguageParams] = useSearchParams();
  const dispatch = useDispatch();

  const loadingState: boolean = useSelector(
    (state: RootState): boolean => state.popular.loading,
  );

  const updateLanguageHandler = (language: string) => {
    dispatch(fetchPopularRepos(language));
    setLanguageParams({ language: language });
  };

  useEffect(() => {
    dispatch(fetchPopularRepos(languageParams.get('language') || 'All'));
  }, []);

  return (
    <ul className="languages">
      {languages.map(
        (lang: string, index: number): JSX.Element => (
          <li
            key={index}
            style={
              lang === (languageParams.get('language') || 'All')
                ? { color: '#d0021b' }
                : {}
            }
            onClick={
              !loadingState ? (): void => updateLanguageHandler(lang) : () => {}
            }
          >
            {lang}
          </li>
        ),
      )}
    </ul>
  );
});

export default SelectedLanguages;
