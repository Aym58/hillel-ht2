import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { battle } from '../../Api';

const Results = () => {
	const location = useLocation();
	useEffect(() => {
		const searchParams = new URLSearchParams(location.search);
		battle([
			searchParams.get('playerOneName'),
			searchParams.get('playerTwoName'),
		]).then((data) => {
			console.log('data', data);
		});
		console.log('playerOneName', searchParams.get('playerOneName'));
		console.log('playerTwoName', searchParams.get('playerTwoName'));
		console.log(searchParams);
	}, [location.search]);
	return <h2>Results</h2>;
};

export default Results;
