import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="content">
      <h2>Oops</h2>
      <p>Something bad happened.</p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
