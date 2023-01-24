import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouteObject,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import IndexContainer from "./pages/IndexContainer";
import Root from "./pages/Root";

const FetchFailed = () => {
  return <p>Failed to fetch the pokemon! Please try again</p>;
};

const Fallback = () => {
  return <p>loading...</p>;
};

const loadable = (loadfn: () => any) => {
  const Component = lazy(loadfn);

  return () => (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  );
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

const PokemonIndexContainer = loadable(
  () => import("./pages/pokemon/PokemonIndexContainer")
);

const PokemonStatsContainer = loadable(
  () => import("./pages/pokemon/PokemonStatsContainer")
);

const PokemonSpriteContainer = loadable(
  () => import("./pages/pokemon/PokemonSpriteContainer")
);

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <IndexContainer />,
      },
      // These can be exported and spread-operated into this array as well:
      {
        path: "pokemon",
        element: <SharedPokemonContent />,
        children: [
          {
            index: true,
            element: <PokemonIndexContainer />,
          },
          {
            path: ":pokemonId",
            id: "apps",
            loader: async ({ params }) => {
              return fetch(
                `https://pokeapi.co/api/v2/pokemon/${params.pokemonId}`
              );
            },
            errorElement: <FetchFailed />,
            children: [
              { index: true, element: <PokemonStatsContainer /> },
              { path: "sprites", element: <PokemonSpriteContainer /> },
            ],
          },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
