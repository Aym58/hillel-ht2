import { useSelector } from 'react-redux';

const PlayerInfo = (props) => {
	const info = useSelector(
		(state) => state.battle.players[props.playerNum].profile
	);

	return (
		<div className='player-info'>
			<ul>
				{info.name && <li>Name: {info.name}</li>}
				{info.company && <li>Company: {info.company}</li>}
				{info.location && <li>Location: {info.location}</li>}
				<li>Followers: {info.followers}</li>
				<li>Following: {info.following}</li>
				<li>Public repos: {info.public_repos}</li>
				{info.blog && (
					<li>
						Blog: <a href={info.blog}>{info.blog}</a>
					</li>
				)}
			</ul>
		</div>
	);
};

export default PlayerInfo;
