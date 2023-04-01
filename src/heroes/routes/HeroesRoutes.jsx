import { Navigate, Route, Routes } from "react-router";
import { Navbar } from "../../ui";
import { DCPage, MarvelPage, SearchHero, Hero } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
        
        <Navbar />
        <div className="container">
          <Routes>
              <Route path="/marvel" element={<MarvelPage />} />
              <Route path="/dc" element={<DCPage />} />

              <Route path="/search" element={<SearchHero />} />
              <Route path="/hero" element={<Hero />} />
              
              {/*SearchHero, Hero by id */}
              <Route path="/*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
        
    </>
  );
};
