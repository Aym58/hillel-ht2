import { useSelector } from 'react-redux';
import Loader from '../../loader';
import ErrorMessage from '../Error';

const Repos = () => {
	const repos = useSelector((state) => state.popular.repos);
	const loadingState = useSelector((state) => state.popular.loading);
	const error = useSelector((state) => state.popular.error);

	if (error) return <ErrorMessage error={error} />;
	if (loadingState) return <Loader />;
	if (!loadingState)
		return (
			<ul className='popular-list'>
				{repos.map((repo, index) => (
					<li key={repo.id} className='popular-item'>
						<div className='popular-rank'>#{index + 1}</div>
						<ul className='space-list-items'>
							<li>
								<img
									className='avatar'
									src={repo.owner.avatar_url}
									alt='Avatar'
								/>
							</li>
							<li>
								<a href={repo.html_url} target='_blank' rel='noreferrer'>
									{repo.name}
								</a>
							</li>
							<li>{repo.owner.login}</li>
							<li>{repo.stargazers_count} stars</li>
						</ul>
					</li>
				))}
			</ul>
		);
};

export default Repos;
