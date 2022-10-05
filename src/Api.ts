import axios, { AxiosResponse } from 'axios';

import type {
  ErrorType,
  PlayerType,
  PlayerProfileType,
  PlayerReposType,
} from './types/types';

import { ReposType } from './types/types';

const id: string = 'YOUR_CLIENT_ID';
const sec: string = 'YOUR_SECRET_ID';
const params: string = '?client_id=' + id + '?client_secret=' + sec;

const handleError = (error: ErrorType): void => {
  throw error;
};

const getProfile = (username: string): Promise<any> => {
  return axios
    .get('https://api.github.com/users/' + username + params)
    .then((user) => {
      return user.data;
    })
    .catch((err: ErrorType) => handleError(err));
};

const getRepos = (username: string): Promise<any> => {
  return axios
    .get('https://api.github.com/users/' + username + '/repos' + params)
    .then((user) => {
      return user.data;
    })
    .catch((err: ErrorType) => handleError(err));
};

const getStarCount = (repos: PlayerReposType[]): number => {
  return repos.reduce((count: number, repo: PlayerReposType): number => {
    return count + repo.stargazers_count;
  }, 0);
};

const calculateScore = (
  profile: PlayerProfileType,
  repos: PlayerReposType[],
): number => {
  const followers: number = profile.followers;
  const totalScore: number = getStarCount(repos);
  return followers * 3 + totalScore;
};

const getUserData = (username: string): Promise<any> => {
  return axios
    .all([getProfile(username), getRepos(username)])
    .then(([profile, repos]) => {
      return {
        profile,
        score: calculateScore(profile, repos),
      };
    });
};

const sortPlayers = (players: PlayerType[]) => {
  return players.sort((a: PlayerType, b: PlayerType) => b.score - a.score);
};

export const battle = (players: string[]): Promise<any> => {
  return axios
    .all(players.map(getUserData))
    .then((data: PlayerType[]) => {
      return sortPlayers(data);
    })
    .catch((err: ErrorType) => handleError(err));
};

export const fetchPopularReposHttpRequest = (
  language: string,
): Promise<any> => {
  const encodeURI: string = window.encodeURI(
    'https://api.github.com/search/repositories?q=stars:>1+language:' +
      language +
      '&sort=stars&order=desc&type=Repositories',
  );
  return axios
    .get(encodeURI)
    .then((response: AxiosResponse<any>): ReposType[] => {
      return response.data.items;
    })
    .catch((err: ErrorType) => handleError(err));
};
