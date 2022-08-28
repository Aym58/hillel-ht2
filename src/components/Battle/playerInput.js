import { useState } from 'react';

const PlayerInput = (props) => {
	const [userName, setUserName] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		props.onSubmit(props.id, userName);
	};
	return (
		<form className='column' onSubmit={handleSubmit}>
			<label className='header' htmlFor='username'>
				{props.label}
			</label>
			<input
				id='username'
				type='text'
				placeholder='Github username'
				value={userName}
				autoComplete='off'
				onChange={(event) => setUserName(event.target.value)}
			/>
			<button className='button' type='submit' disabled={!userName}>
				Submit
			</button>
		</form>
	);
};

export default PlayerInput;
