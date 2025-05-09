// routes/not-found.route.tsx
import { createRoute, Navigate } from '@tanstack/react-router';
import { Route as RootRoute } from './__root';
import { useAuthStore } from '@/ui/shared/store/authStore';
import { useAuthSync } from '@/ui/shared/hooks/useAuthSync';

export const NotFoundRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: '*',
  beforeLoad: () => {
    const isAuthenticated = useAuthStore.getState().isAuthenticated();
    if (isAuthenticated) {
      Navigate({ to: '/dashboard' });
    } else {
      Navigate({ to: '/' });
    }
  },
  component: () => {
    useAuthSync();
    return <div>404 - Página no encontrada</div>
  }, // no renderiza nada, solo redirige
});
