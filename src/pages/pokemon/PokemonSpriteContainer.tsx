import useSWR from "swr";
import { useParams, useRouteLoaderData } from "react-router-dom";

const PokemonSpriteContainer = () => {
  const { pokemonId } = useParams();
  const { data: pokemon, isLoading } = useSWR(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
    (url) => fetch(url).then((res) => res.json())
  );

  if (isLoading) {
    return <p>loading...</p>;
  }

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
