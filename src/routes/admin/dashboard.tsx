import { createRoute } from '@tanstack/react-router';
import { Route as RootRoute } from './../__root';

export const Route = createRoute({
  getParentRoute: () => RootRoute,
  path: '/dashboard',
  // This is a lazy loaded component, it will be loaded when the route is matched
  component: () => <div>Hola dashboard aqui</div>,
});
