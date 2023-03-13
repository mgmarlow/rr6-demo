import { RouteObject } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import IndexContainer from "./pages/IndexContainer";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <IndexContainer />,
  },
  {
    path: "pokemon",
    errorElement: <ErrorPage />,
    async lazy() {
      let { Layout } = await import("./pages/pokemon/PokemonRoutes");
      return { Component: Layout };
    },
    children: [
      {
        index: true,
        async lazy() {
          let { Index } = await import("./pages/pokemon/PokemonRoutes");
          return { Component: Index };
        },
      },
      {
        path: ":pokemonId",
        loader: async ({ params }) => {
          const { pokemonId } = params;
          return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        },
        async lazy() {
          let { Show } = await import("./pages/pokemon/PokemonRoutes");
          return { Component: Show };
        },
      },
    ],
  },
];
