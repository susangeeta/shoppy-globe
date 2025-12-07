import { CiStar } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const ProductItem = ({ product, loading }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const isAdded = product
    ? (cartItems || []).some((item) => item.id === product.id)
    : false;

  const handleCartItem = () => {
    if (product && !isAdded) {
      dispatch(addToCart(product));
    }
  };
  if (loading || !product) {
    return (
      <div className="border border-gray-300 overflow-hidden rounded-xl animate-pulse">
        <div className="h-48 bg-gray-300 w-full"></div>
        <div className="p-4 space-y-3">
          <div className="h-3 bg-gray-300 w-20 rounded"></div>
          <div className="h-4 bg-gray-300 w-32 rounded"></div>
          <div className="flex gap-2">
            <div className="h-3 bg-gray-300 w-16 rounded"></div>
            <div className="h-3 bg-gray-300 w-12 rounded"></div>
          </div>
          <div className="h-8 bg-gray-300 w-full rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }} // zoom in on hover
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="border border-gray-300 rounded-xl"
    >
      <div className="relative">
        <img
          src={product?.images?.[0]}
          alt={product.title || "Product Image"}
          className="h-full w-full object-cover"
        />
        <button
          onClick={handleCartItem}
          disabled={isAdded}
          className={`absolute top-3 right-3 px-2 py-1 cursor-pointer rounded-md text-sm ${
            isAdded
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-green-800 text-white hover:bg-white hover:border hover:border-green-800 hover:text-green-800"
          }`}
        >
          {isAdded ? "Added" : "Add Cart"}
        </button>
      </div>
      <div className="border-t border-gray-300 p-4">
        <div className="flex gap-3 items-center">
          <h3 className="text-xs text-[#848484]">{product?.brand}</h3>
          <div className="flex gap-1 items-center bg-red-600 px-2 md:px-2 rounded-md py-1 text-white">
            <CiStar className="text-sm" />
            <h2 className="pt-1 text-xs">{product?.rating}</h2>
          </div>
        </div>

        <h1 className="text-black text-sm lg:text-base font-semibold">
          {product?.title}
        </h1>

        <div className="flex items-center gap-1">
          <p className="text-sm text-gray-400 line-through">{product?.price}</p>
          <p className="text-sm text-black font-semibold">
            {product?.discountPercentage}
          </p>
        </div>

        <Link to={`/product/${product?.id}`}>
          <div className="flex items-center justify-center pt-4">
            <div className="flex items-center cursor-pointer justify-center border border-green-600 px-2 text-green-600 text-sm py-1 rounded-md">
              <h2>View Details</h2>
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductItem;
