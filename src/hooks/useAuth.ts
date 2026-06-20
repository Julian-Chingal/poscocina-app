import { useEffect, useReducer } from 'react';
import { me } from '@/features/auth';
import { userType } from '@/shared/types';

interface AuthState {
  user: userType | null;
  loading: boolean;
}

type AuthAction =
  | { type: 'FETCH_SUCCESS'; payload: userType | null }
  | { type: 'FETCH_ERROR' };

function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return { user: action.payload, loading: false };
    case 'FETCH_ERROR':
      return { user: null, loading: false };
    default:
      return state;
  }
}

export function useAuth() {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    loading: true,
  });

  useEffect(() => {
    me()
      .then((res) => {
        dispatch({ type: 'FETCH_SUCCESS', payload: res?.data });
      })
      .catch(() => {
        dispatch({ type: 'FETCH_ERROR' });
      });
  }, []); 
  return { user: state.user, loading: state.loading };
}