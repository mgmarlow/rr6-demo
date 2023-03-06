import { Link } from "react-router-dom";

const IndexContainer = () => {
  return (
    <main>
      <h1>Welcome to my pokemon app</h1>

      <section>
        <h2>Check out these cool links</h2>
        <Link to="/pokemon">all pokemon</Link>
      </section>
    </main>
  );
};

export default IndexContainer;
