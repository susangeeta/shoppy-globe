import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Hero />
      <div>
        <h1 className="text-3xl font-bold py-6  md:py-8 text-center">
          Featured Products
        </h1>
        <ProductList limit={8} />
        <div className="flex items-center justify-center py-5 md:py-12">
          <button
            onClick={() => navigate("/product")}
            className="bg-green-800 text-white px-6 py-2 cursor-pointer rounded-lg"
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
