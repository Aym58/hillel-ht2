import { AxiosError } from 'axios';

export type ErrorType = AxiosError<any>;

export type PlayerReposType = {
  stargazers_count: number;
};

export type PlayerProfileType = {
  name: string;
  followers: number;
  blog: string;
  login: string;
  avatar_url: string;
  company: null | string;
  location: null | string;
  following: number;
  public_repos: number;
};

export type PlayerType = {
  profile: PlayerProfileType;
  score: number;
};

/////////////////////////

type OwnerInfoType = {
  avatar_url: string;
  login: string;
};

export type ReposType = {
  name: string;
  id: number;
  owner: OwnerInfoType;
  stargazers_count: number;
  html_url: string;
};
