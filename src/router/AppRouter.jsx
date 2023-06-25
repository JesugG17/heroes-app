import { LoginPage } from '../auth';
import { PublicRoute } from './PublicRoute';
import { createBrowserRouter } from 'react-router-dom';
import { DCPage, HeroPage, MarvelPage, SearchPage } from '../heroes/pages';
import { HeroePageRender } from '../hoc/HeroePageRender';

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
    path: '/',
    children: [
      {
        path: '/marvel',
        element: (
         <HeroePageRender>
          <MarvelPage />
         </HeroePageRender>
        )
      },
      {
        path: '/dc',
        element: (
          <HeroePageRender>
            <DCPage />
          </HeroePageRender>
        )
      },
      {
        path: '/search',
        element: (
          <HeroePageRender>
            <SearchPage />
          </HeroePageRender>
        ),
      },
      {
        path: '/hero/:id',
        element: (
          <HeroePageRender>
            <HeroPage />
          </HeroePageRender>
        )
      }
    ]
  }
]);


// ! OLD CODE

// export const AppRouter = () => {

//   return (
//     <>
      
//       <Routes>
//         {/* RUTAS PUBLICAS */}
//         <Route path="/login" element={
//           <PublicRoute>
//             <LoginPage />
//           </PublicRoute>} />
        
//         {/* RUTAS PRIVADAS*/}
//         <Route path="/*" element={
//           <PrivateRoute>
//             {/* <RouterProvider router={ heroeRoutes } /> */}
//           </PrivateRoute>} />
//       </Routes>

//     </>
//   );
// };
