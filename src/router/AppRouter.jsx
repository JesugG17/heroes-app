import { Route, Routes } from 'react-router';
import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

  return (
    <>
      
      <Routes>
        {/* RUTAS PUBLICAS */}
        <Route path="/login" element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>} />
        
        {/* RUTAS PRIVADAS*/}
        <Route path="/*" element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>} />
      </Routes>

    </>
  );
};
