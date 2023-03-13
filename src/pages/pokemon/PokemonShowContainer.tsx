import { useLoaderData } from "react-router-dom";

const PokemonStatsContainer = () => {
  const pokemon: any = useLoaderData();

  return (
    <>
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
    </>
  );
};

export default PokemonStatsContainer;
