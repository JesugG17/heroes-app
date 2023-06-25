import { RouterProvider } from "react-router"
import { AuthProvider } from "./auth"
import { AppRouter } from "./router/AppRouter"
import { appRouter } from "./router"
import { heroeRoutes } from "./heroes/routes/HeroesRoutes"

export const HeroesApp = () => {
  return (
    <AuthProvider>
        <RouterProvider router={ heroeRoutes } />
        {/* <AppRouter /> */}
    </AuthProvider>
  )
}
