import { useCallback } from 'react';
import User from '../User';

/**
 * Request user profile
 */
export default function useGetProfile() {
  return useCallback((accessToken?: string) => {
    return accessToken
      ? fetch(`${import.meta.env.VITE_APP_API_PATH}/auth/me`, {
          method: 'POST',
          headers: { Accept: 'application/json', Authorization: `Bearer ${accessToken}` },
        }).then((r) => r.json() as Promise<User | undefined>)
      : Promise.resolve(undefined);
  }, []);
}
