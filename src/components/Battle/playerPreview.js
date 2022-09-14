import { useSelector } from 'react-redux';

const PlayerPreview = (props) => {
	const playerName = useSelector((state) => {
		if (props.playerNum === 0) return state.battle.playerOneName;
		if (props.playerNum === 1) return state.battle.playerTwoName;
	});
	const playerImage = useSelector((state) => {
		if (props.playerNum === 0) return state.battle.playerOneImage;
		if (props.playerNum === 1) return state.battle.playerTwoImage;
	});

	return (
		<div>
			<div className='column'>
				<img className='avatar' src={playerImage} alt='avatar' />
				<h2 className='username'>{playerName}</h2>
			</div>
			{props.children}
		</div>
	);
};

export default PlayerPreview;
