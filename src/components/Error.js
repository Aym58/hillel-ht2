import { useSelector } from 'react-redux';

const ErrorMessage = () => {
	const error = useSelector((state) => state.popular.error);
	return (
		<div className='error-screen column'>
			<h1>ERROR: {error.message}</h1>
		</div>
	);
};

export default ErrorMessage;
