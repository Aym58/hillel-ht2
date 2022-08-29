const ErrorMessage = (props) => {
	return (
		<div className='error-screen'>
			<h1>ERROR: {props.error.message}</h1>
		</div>
	);
};

export default ErrorMessage;
