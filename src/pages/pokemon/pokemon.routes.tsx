import { Link, Outlet, RouteObject, useRoutes } from "react-router-dom";
import PokemonIndexContainer from "./PokemonIndexContainer";
import PokemonSpriteContainer from "./PokemonSpriteContainer";
import PokemonStatsContainer from "./PokemonStatsContainer";

const FetchFailed = () => {
  return <p>Failed to fetch the pokemon! Please try again</p>;
};

const SharedPokemonContent = () => (
  <div>
    <nav style={{ display: "flex", justifyContent: "space-around" }}>
      <Link to="">Dashboard</Link>
      <Link to="">Messages</Link>
      <Link to="">Journeys</Link>
    </nav>

    <Outlet />
  </div>
);

const routes: RouteObject[] = [
  // These can be exported and spread-oerated into this array as well:
  {
    path: "",
    element: <SharedPokemonContent />,
    children: [
      {
        index: true,
        element: <PokemonIndexContainer />,
      },
      {
        path: ":pokemonId",
        errorElement: <FetchFailed />,
        children: [
          { index: true, element: <PokemonStatsContainer />, },
          { path: "sprites", element: <PokemonSpriteContainer /> },
        ],
      },
    ],
  },
];

const PokemonRoutes = () => {
  const element = useRoutes(routes);

  return <>{element}</>;
};

export default PokemonRoutes;
