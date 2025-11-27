import { CiStar } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const isAdded = cartItems.some((item) => item.id === product.id);

  const handelCartItem = () => {
    if (!isAdded) {
      dispatch(addToCart(product));
    }
  };
  return (
    <div className="border border-gray-300 overflow-hidden rounded-xl">
      <div className="relative">
        <img src={product.images} className="h-full w-full " />
        <button
          onClick={handelCartItem}
          disabled={isAdded}
          className={`absolute top-3 right-3 cursor-pointer px-2 py-1 rounded-md text-sm 
            ${
              isAdded
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-green-800 text-white hover:bg-white hover:border hover:border-green-800 hover:text-green-800"
            }`}
        >
          {isAdded ? "Added" : "Add Cart"}
        </button>
      </div>
      <div className="border-t border-gray-300   p-4">
        <h3 className="text-xs text-[#848484]">{product?.brand}</h3>
        <div className="flex justify-between w-full">
          <h1 className="text-black font-semibold">{product?.title}</h1>
          <div className="flex gap-1 items-center bg-red-600 px-3 rounded-md py-1 text-xs text-white">
            <CiStar className="text-base" />
            <h2 className="pt-1">{product?.rating}</h2>
          </div>
        </div>
        <div className="flex items-center  gap-1 ">
          <p className="text-sm text-gray-400 line-through">
            {" "}
            {product?.price}
          </p>
          <p className="text-sm text-black font-semibold">
            {product?.discountPercentage}
          </p>
        </div>
        <Link to={`/product/${product.id}`}>
          <div className="flex items-center justify-center pt-4">
            <div className="flex items-center cursor-pointer justify-center border border-green-600 px-2 text-green-600 text-sm py-1 rounded-md">
              <h2>View Details</h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
