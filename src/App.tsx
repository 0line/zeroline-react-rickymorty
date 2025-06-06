import * as React from 'react'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { Route as RootRoute  } from '@/routes/__root';
import { loginRoute } from '@/routes/index';

//import { routeTree } from './routeTree.gen'
import './app.css';
import { AdminRoute } from '@/routes/admin/dashboard';
import { NotFoundRoute } from '@/routes/not-found';


const routeTree = RootRoute.addChildren([
  loginRoute,
  AdminRoute,
  NotFoundRoute, // Asegúrate de agregar la ruta wildcard al final
]);

// Set up a Router instance
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
})

// Register things for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
const App = () => {
  return <RouterProvider router={router} />
}

export default App