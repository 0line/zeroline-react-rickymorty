import { createRoute, redirect } from '@tanstack/react-router';
import { Route as RootRoute } from './../__root';
import { useAuthStore } from '@/ui/shared/store/authStore';
import { useAuthSync } from '@/ui/shared/hooks/useAuthSync';
import Dashboard  from '@/ui/dashboard/page';

export const AdminRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: '/dashboard',
  beforeLoad: () => {
    const isAuthenticated = useAuthStore.getState().isAuthenticated();
    if (!isAuthenticated) {
      throw redirect({ to: '/' });
    }
  },
  // This is a lazy loaded component, it will be loaded when the route is matched
  component: () => {
    useAuthSync();
    return <Dashboard/>; },
});
