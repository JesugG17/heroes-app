import { PrivateRoute } from "../router/PrivateRoute"
import { Navbar } from "../ui"



export const HeroePageRender = ({ children }) => {
  return (
    <PrivateRoute>
        <Navbar />
        <div className="container">
            { children }
        </div>
    </PrivateRoute>
  )
}
