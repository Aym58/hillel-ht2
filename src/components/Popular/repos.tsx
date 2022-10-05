import { FC } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import Loader from '../../loader';
import ErrorMessage from '../Error';
import { ReposType } from '../../types/types';

const Repos: FC = (): JSX.Element => {
  const repos: ReposType[] = useSelector(
    (state: RootState): ReposType[] => state.popular.repos,
  );

  const loadingState: boolean = useSelector(
    (state: RootState) => state.popular.loading,
  );

  const error: string | null = useSelector(
    (state: RootState): string | null => state.popular.error,
  );

  if (loadingState) {
    return <Loader />;
  } else if (error) {
    return <ErrorMessage />;
  } else {
    return (
      <ul className="popular-list">
        {repos.map((repo: ReposType, index: number) => {
          return (
            <li key={repo.id} className="popular-item">
              <div className="popular-rank">#{index + 1}</div>
              <ul className="space-list-items">
                <li>
                  <img
                    className="avatar"
                    src={repo.owner.avatar_url}
                    alt="Avatar"
                  />
                </li>
                <li>
                  <a href={repo.html_url} target="_blank" rel="noreferrer">
                    {repo.name}
                  </a>
                </li>
                <li>{repo.owner.login}</li>
                <li>{repo.stargazers_count} stars</li>
              </ul>
            </li>
          );
        })}
      </ul>
    );
  }
};
export default Repos;
