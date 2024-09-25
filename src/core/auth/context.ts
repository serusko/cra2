import { createContext } from 'react';

import User from './User';
import { LoginResponse } from './hooks/useLogin';

export interface AuthContextState {
  user: User;
  token: LoginResponse;
}

const AuthContext = createContext<AuthContextState | undefined>(undefined);

export default AuthContext;
