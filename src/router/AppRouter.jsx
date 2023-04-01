import { Route, Routes } from "react-router";
import { LoginPage } from "../auth";
import { HeroesRoutes } from '../heroes';

export const AppRouter = () => {

  return (
    <>
      
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<HeroesRoutes />} />
      </Routes>

    </>
  );
};
