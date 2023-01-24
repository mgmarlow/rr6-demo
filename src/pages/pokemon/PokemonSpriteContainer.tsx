import { useRouteLoaderData } from "react-router-dom";

const PokemonSpriteContainer = () => {
  const pokemon = useRouteLoaderData("apps");

  return (
    <>
      <h1>PokemonSpriteContainer</h1>
      <section>
        <h2>{pokemon.name}</h2>

        <div>
          <img src={pokemon.sprites.front_default} />
          <img src={pokemon.sprites.front_shiny} />
        </div>
      </section>
    </>
  );
};

export default PokemonSpriteContainer;
