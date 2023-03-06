import useSWR from "swr";
import { useParams } from "react-router-dom";
import PokemonPage from "./PokemonPage";

const PokemonStatsContainer = () => {
  const { pokemonId } = useParams();
  const { data: pokemon, isLoading } = useSWR(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
    (url) => fetch(url).then((res) => res.json())
  );

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <PokemonPage>
      <h1>{pokemon.name}</h1>

      <div>
        <img src={pokemon.sprites.front_default} />
        <img src={pokemon.sprites.front_shiny} />
      </div>

      <div>
        <table>
          <tbody>
            {pokemon.stats.map(({ stat, base_stat }: any) => {
              return (
                <tr key={stat.name}>
                  <td>{stat.name}</td>
                  <td>{base_stat}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </PokemonPage>
  );
};

export default PokemonStatsContainer;
