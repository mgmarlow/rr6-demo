import useSWR from "swr";
import { useParams, useRouteLoaderData } from "react-router-dom";

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
    <>
      <h1>PokemonStatsContainer</h1>
      <section>
        <h2>{pokemon.name}</h2>

        <div>
          <table>
            <tbody>
              {pokemon.stats.map(({ stat, base_stat }) => {
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
      </section>
    </>
  );
};

export default PokemonStatsContainer;
