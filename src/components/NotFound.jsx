import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center flex-col h-96 gap-3">
      <h1 className="text-[#4b5563] text-8xl font-semibold">404</h1>
      <p>Sorry, we couldn't find this page.</p>

      <Link to="/">
        <button className="bg-green-800 px-3 py-2 rounded-md cursor-pointer text-white">
          Back to Home
        </button>
      </Link>
    </div>
  );
};
export default NotFound;
