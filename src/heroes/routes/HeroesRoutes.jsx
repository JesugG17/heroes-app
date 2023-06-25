import { DCPage, MarvelPage, SearchPage, HeroPage } from "../pages";
import { createBrowserRouter } from "react-router-dom";
import { HeroePageRender } from "../../hoc/HeroePageRender";


export const heroeRoutes = createBrowserRouter([
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
    children: [
      { path: '/search/:id', element: (<HeroPage />) }
    ]
  }
]);


// OLD ROUTER CODE
// export const HeroesRoutes = () => {
//   return (
//     <>
        
//         <Navbar />
//         <div className="container">
//           <Routes>
//               <Route path="/marvel" element={<MarvelPage />} />
//               <Route path="/dc" element={<DCPage />} />

//               <Route path="/search" element={<SearchPage />} />
//               <Route path="/hero/:id" element={<HeroPage />} />
              
//               {/*SearchHero, Hero by id */}
//               <Route path="/" element={<Navigate to="/login" />} />
//           </Routes>
//         </div>
        
//     </>
//   );
// };
