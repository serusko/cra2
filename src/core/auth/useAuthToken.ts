import { useContext } from 'react';
import AuthContext from './context';

export default function useAuthToken() {
  return useContext(AuthContext)?.token;
}
