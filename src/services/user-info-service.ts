import fetch from 'cross-fetch';

declare var env: {
  API_URL: string
}

const API_URL = env.API_URL;

export function getByMemberName(member: string): Promise<UserInfoService> {
  const url = `${API_URL}/members/${member}`;

  return fetch(url)
    .then(resp => resp.json());
}

export interface UserInfoService {
  member: string,
  about: string,
  userName: string
}
