import { Link } from "react-router-dom";

const PokemonLink = ({ id }: { id: number }) => {
  return (
    <p>
      <Link to={`/pokemon/${id}`}>stats</Link>
      {" / "}
      <Link to={`/pokemon/${id}/sprites`}>sprites</Link>
    </p>
  );
};

const AppPicker = () => {
  const links = new Array(10).fill(0).map((_, i) => (
    <li key={i}>
      <PokemonLink id={i + 1} />
    </li>
  ));

  return (
    <>
      <h1>PokemonIndexContainer</h1>

      <section>
        <ul>{links}</ul>
      </section>
    </>
  );
};

export default AppPicker;
