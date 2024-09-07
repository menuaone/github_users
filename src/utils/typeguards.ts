import { GitHubUser } from '../types';

// проверка на наличие id у юзера, если его нет - значит ошибка
export const isGithubUser = (user: any): user is GitHubUser => 'id' in user;
