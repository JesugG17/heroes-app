import { RouterProvider } from "react-router"
import { AuthProvider } from "./auth"
import { appRouter } from "./router/AppRouter"

export const HeroesApp = () => {
  return (
    <AuthProvider>
        <RouterProvider router={ appRouter } />
        {/* <AppRouter /> */}
    </AuthProvider>
  )
}
