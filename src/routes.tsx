import { lazy, Suspense } from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import IndexContainer from "./pages/IndexContainer";
import Root from "./pages/Root";

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

const PokemonRoutes = loadable(() => import("./pages/pokemon/pokemon.routes"));

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
      {
        path: "/pokemon/*",
        element: <PokemonRoutes />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
