import useSWR from "swr";
import { Link } from "react-router-dom";
import PokemonPage from "./PokemonPage";

const PokemonLinks = ({ pokemons }: { pokemons: any[] }) => {
  const links = pokemons.map((p, i) => (
    <li>
      <Link to={`/pokemon/${i + 1}`}>{p.name}</Link>
    </li>
  ));

  return <ul>{links}</ul>;
};

const AppPicker = () => {
  const { data: pokemonResponse, isLoading } = useSWR(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=25",
    (url) => fetch(url).then((res) => res.json())
  );

  return (
    <PokemonPage>
      <h1>All Pokemon</h1>

      <section>
        {isLoading ? (
          <p>Loading pokemon...</p>
        ) : (
          <PokemonLinks pokemons={pokemonResponse.results} />
        )}
      </section>
    </PokemonPage>
  );
};

export default AppPicker;
