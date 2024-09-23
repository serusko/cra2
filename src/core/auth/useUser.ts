import { useContext } from 'react';
import AuthContext from './context';

export default function useUser() {
  return useContext(AuthContext)?.user;
}
