import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error: any = useRouteError();

  return (
    <div className="content">
      <h2>Oops!</h2>
      <p>Something bad happened: {error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
