// routes/not-found.route.tsx
import { createRoute } from '@tanstack/react-router';
import { Route as RootRoute } from './__root';
import { isAuthenticated } from '@/lib/utils';

export const NotFoundRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: '*',
  beforeLoad: ({ navigate }) => {
    if (isAuthenticated()) {
      navigate({ to: '/admin/dashboard' });
    } else {
      navigate({ to: '/' });
    }
  },
  component: () => <div>404 - Página no encontrada</div>, // no renderiza nada, solo redirige
});
