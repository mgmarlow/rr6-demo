import { useRouteLoaderData } from "react-router-dom";

const PokemonStatsContainer = () => {
  const pokemon = useRouteLoaderData("apps");

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
