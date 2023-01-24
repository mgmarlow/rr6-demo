import { Link, Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <header>
        <nav style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to="/">React Router 6 Demo</Link>
          <Link to="/">Account</Link>
        </nav>
      </header>

      <Outlet />
    </>
  );
};

export default Root;
