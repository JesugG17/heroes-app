import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../auth";
// import { HeroesRoutes, heroeRoutes } from "../heroes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const appRouter = createBrowserRouter([
    {
      path: '/login',
      element: (
        <PublicRoute>
          <LoginPage />
        </PublicRoute>
      )
    },
    {
      path: '/*',
      element: (
        <PrivateRoute>
          {/* <RouterProvider router={ heroeRoutes } /> */}
        </PrivateRoute>
      )
    }
  ]);
  