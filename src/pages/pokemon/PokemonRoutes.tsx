import { Outlet } from "react-router-dom";
import PokemonPage from "./PokemonPage";

export { default as Index } from "./PokemonIndexContainer";
export { default as Show } from "./PokemonShowContainer";

export const Layout = () => {
  return (
    <PokemonPage>
      <Outlet />
    </PokemonPage>
  );
};
