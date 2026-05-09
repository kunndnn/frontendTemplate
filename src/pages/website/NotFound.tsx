import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-9xl font-extrabold mb-4">404</h1>
      <p className="text-2xl font-semibold mb-4">Page Not Found</p>
      <p className="text-gray-600 mb-8">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link to="/" className="text-primary font-semibold">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
