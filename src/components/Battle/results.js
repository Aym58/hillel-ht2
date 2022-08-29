import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { battle } from '../../Api';
import Loader from '../../loader.js';
import PlayerPreview from './playerPreview';
import PlayerInfo from './playerInfo';
import ErrorMessage from '../Error';

const Results = () => {
	const [players, setPlayers] = useState([]);
	const [loader, setLoader] = useState(false);
	const [winner, setWinner] = useState('');
	const [loser, setLoser] = useState('');
	const [error, setError] = useState('');

	const location = useLocation();

	useEffect(() => {
		setLoader(true);
		const searchParams = new URLSearchParams(location.search);
		battle([
			searchParams.get('playerOneName'),
			searchParams.get('playerTwoName'),
		])
			.then((data) => {
				console.log(data);
				setPlayers(data);
				setWinner(data[0].profile.login);
				setLoser(data[1].profile.login);
				setLoader(false);
			})
			.catch((err) => {
				setError(err);
				setLoader(false);
			});
	}, [location.search]);

	return (
		<>
			{loader && <Loader />}
			{error && <ErrorMessage error={error} />}
			{!loader && !error && (
				<div className='row'>
					{players.map((player, arrId) => {
						return (
							<div key={arrId} className='column results'>
								<div className='results-header'>
									{player.profile.login === winner && <h1>Winner</h1>}
									{player.profile.login === loser && <h2>Loser</h2>}

									<h3>Score: {player.score}</h3>
								</div>
								<PlayerPreview
									key={player.profile.id}
									username={player.profile.login}
									avatar={player.profile.avatar_url}
								>
									<PlayerInfo playerData={player.profile} />
								</PlayerPreview>
							</div>
						);
					})}
				</div>
			)}
		</>
	);
};

export default Results;
