import { useSyncExternalStore } from 'react';
import { useAuthStore } from '@/features/auth/auth.store';

const emptySubscribe = () => () => {};

export function useAuth() {
  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isHydrated = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  return { 
    user: isHydrated ? user : null, 
    isAuthenticated: isHydrated ? isAuthenticated : false,
    loading: !isHydrated 
  };
}