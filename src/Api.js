import axios from 'axios';

const id = 'YOUR_CLIENT_ID';
const sec = 'YOUR_SECRET_ID';
const params = '?client_id=' + id + '?client_secret=' + sec;

const handleError = (error) => {
	throw error;
};

const getProfile = (username) => {
	return axios
		.get('https://api.github.com/users/' + username + params)
		.then((user) => {
			return user.data;
		})
		.catch((err) => handleError(err));
};

const getRepos = (username) => {
	return axios
		.get('https://api.github.com/users/' + username + '/repos' + params)
		.then((user) => {
			return user.data;
		})
		.catch((err) => handleError(err));
};

const getStarCount = (repos) => {
	return repos.reduce((count, repo) => {
		return count + repo.stargazers_count;
	}, 0);
};

const calculateScore = (profile, repos) => {
	const followers = profile.followers;
	const totalScore = getStarCount(repos);
	return followers * 3 + totalScore;
};

const getUserData = (username) => {
	return axios
		.all([getProfile(username), getRepos(username)])
		.then(([profile, repos]) => {
			return {
				profile,
				score: calculateScore(profile, repos),
			};
		});
};

const sortPlayers = (players) => {
	return players.sort((a, b) => b.score - a.score);
};

export const battle = (players) => {
	return axios
		.all(players.map(getUserData))
		.then((data) => sortPlayers(data))
		.catch((err) => handleError(err));
};

export const fetchPopularReposHttpRequest = (language) => {
	const encodeURI = window.encodeURI(
		'https://api.github.com/search/repositories?q=stars:>1+language:' +
			language +
			'&sort=stars&order=desc&type=Repositories'
	);
	return axios
		.get(encodeURI)
		.then((response) => {
			return response.data.items;
		})
		.catch((err) => handleError(err));
};
