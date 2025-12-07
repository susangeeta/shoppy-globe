import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { emptyCart } from "../redux/cartSlice";
import CartItem from "./CartItem";
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(emptyCart());
  };

  return (
    <div className="main-container pt-24">
      {cart.length === 0 ? (
        <div className="flex justify-center flex-col h-82 gap-3 items-center">
          <h1 className="text-black font-bold text-3xl ">
            {" "}
            Your Cart is empty
          </h1>
          <Link to={"/product"}>
            {" "}
            <button className="bg-green-800 px-3 py-2 cursor-pointer text-white rounded-md">
              Shop Now
            </button>
          </Link>
        </div>
      ) : (
        <section className="flex md:flex-row flex-col w-full gap-12  md:gap-17">
          <div className=" w-full md:w-[70%]">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="w-full md:w-[30%] h-fit py-4  bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] ">
            <h1 className="uppercase text-gray-400 font-semibold border-b border-b-gray-300 px-4 py-2">
              Price details
            </h1>
            <div className="p-4 flex justify-between w-full">
              <div>Total: </div>
              <div>
                ₹{" "}
                {cart.reduce(
                  (sum, item) => sum + item.price * item.quantity,
                  0
                )}
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-3">
              {" "}
              <button
                onClick={handleClearCart}
                className="bg-red-600 w-52 py-2 cursor-pointer rounded-md text-white"
              >
                Clear Cart
              </button>
              <Link to={`/checkout`}>
                <button className="bg-green-800 w-52 py-2 cursor-pointer rounded-md text-white">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Cart;
