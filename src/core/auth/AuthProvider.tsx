import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import AuthContext, { AuthContextState } from './context';
import useLogin from './useLogin';
import useGetProfile from './useGetProfile';

const ACCESS_TOKEN_KEY = 'thisIsDefinitelyNotAccessToken';

const initialAT = localStorage.getItem(ACCESS_TOKEN_KEY) ?? '';

function AuthProvider({ children }: PropsWithChildren) {
  const [state, setState] = useState<AuthContextState | undefined>(undefined);
  const initialized = useRef(!initialAT);
  const getProfile = useGetProfile();
  const login = useLogin();

  useEffect(() => {
    if (!state && initialAT) {
      getProfile(initialAT)
        .then((user) => {
          if (!user) {
            setState(undefined);
            return;
          }

          setState({
            user,
            token: {
              access_token: initialAT,
              token_type: 'bearer',
              expires_in: 36000,
            },
          });
        })
        .catch((_e: unknown) => {
          // console.error(e);
        })
        .finally(() => {
          initialized.current = true;
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (initialized.current) {
      localStorage.setItem(ACCESS_TOKEN_KEY, state?.token.access_token ?? '');
    }
  }, [state]);

  return (
    <AuthContext.Provider value={state}>
      {state ? (
        children
      ) : (
        <button
          onClick={() => {
            login('test@example.com', 'password')
              .then((s) => {
                setState(s);
              })
              .catch((_e: unknown) => {
                // console.error('Login failed', e);
              });
          }}
        >
          Login
        </button>
      )}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
