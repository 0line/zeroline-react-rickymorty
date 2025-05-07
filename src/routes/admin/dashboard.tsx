import { createRoute } from '@tanstack/react-router';
import { Route as RootRoute } from './../__root';
import { isAuthenticated } from '@/lib/utils';

export const AdminRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: '/dashboard',
  beforeLoad: ({ location, navigate }) => {
    if (!isAuthenticated()) {
      navigate({ to: '/' });
    }
  },
  // This is a lazy loaded component, it will be loaded when the route is matched
  component: () => <div>Hola dashboard aqui</div>,
});
