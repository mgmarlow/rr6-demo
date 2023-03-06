import { Link } from "react-router-dom";

const PokemonPage = ({ children }: React.PropsWithChildren<{}>) => (
  <div>
    <nav style={{ display: "flex" }}>
      <Link to="/pokemon">all pokemon</Link>
    </nav>

    <main>{children}</main>
  </div>
);

export default PokemonPage;
