import { useCallback } from 'react';
import useGetProfile from './useGetProfile';

export interface LoginResponse {
  access_token: string;
  token_type: 'bearer';
  expires_in: number;
}

export default function useLogin() {
  const getProfile = useGetProfile();

  return useCallback(
    (email: string, password: string) => {
      const body = new FormData();
      body.append('email', email);
      body.append('password', password);

      const requestOptions = {
        headers: { Accept: 'application/json' },
        method: 'POST',
        body,
      } as const;

      let token: undefined | LoginResponse = undefined;

      return fetch('https://ocean-api-test.dev.valllue.tech/api/auth/login', requestOptions)
        .then((r) => (r.ok ? (r.json() as Promise<LoginResponse>) : undefined))
        .then((r) => {
          token = r;
          return token?.access_token;
        })
        .then(getProfile)
        .then((user) => (user && token ? { user, token } : undefined));
    },
    [getProfile]
  );
}
