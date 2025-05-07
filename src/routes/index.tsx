import { createRoute } from '@tanstack/react-router';
import { Route as RootRoute } from './__root';
import LoginPage from '@/ui/login/page/index';
import { isAuthenticated } from '@/lib/utils';

export const loginRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: '/',
  context: () => {
    if (isAuthenticated()) {
      return { redirect: '/admin/dashboard' };
    }
  },
  component: () => <LoginPage/>,
});
