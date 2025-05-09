import { createRoute, redirect } from '@tanstack/react-router';
import { Route as RootRoute } from './__root';
import LoginPage from '@/ui/login/page/index';
import { useAuthStore } from '@/ui/shared/store/authStore';
import { useAuthSync } from '@/ui/shared/hooks/useAuthSync';

export const loginRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: '/',
  beforeLoad: async () => {
    const isAuthenticated = useAuthStore.getState().isAuthenticated();
    if (isAuthenticated) {
      throw redirect({ to: '/dashboard' });
    }
  },
  component: () =>{
    useAuthSync();
    return <LoginPage/>
  },
});
