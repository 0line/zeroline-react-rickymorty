import { createRoute } from '@tanstack/react-router';
import { Route as RootRoute } from './__root';
import LoginPage from '@/ui/login/page/index';

export const Route = createRoute({
  getParentRoute: () => RootRoute,
  path: '/',
  component: () => <LoginPage/>,
});
