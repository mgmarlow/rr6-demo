import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexContainer from "./pages/IndexContainer";
import PokemonIndexContainer from "./pages/pokemon/PokemonIndexContainer";
import PokemonShowContainer from "./pages/pokemon/PokemonShowContainer";

/* const routes: RouteObject[] = [
 *   {
 *     path: "/",
 *     element: <IndexContainer />,
 *   },
 *   {
 *     path: "/pokemon",
 *     element: <PokemonIndexContainer />,
 *   },
 *   { path: "/pokemon/:pokemonId", element: <PokemonShowContainer /> },
 * ]; */

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexContainer />} />
        <Route path="/pokemon" element={<PokemonIndexContainer />} />
        <Route path="/pokemon/:pokemonId" element={<PokemonShowContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
