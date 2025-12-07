import { useDispatch } from "react-redux";
import { decreaseQty, increaseQty, removeFromCart } from "../redux/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-b border-b-gray-100 p-3  flex items-center gap-6 ">
      <div className="flex flex-col gap-2">
        <img src={item.images} className="h-30 w-30" />
        <div className="flex items-center gap-3 px-3">
          <div
            onClick={() => dispatch(decreaseQty(item.id))}
            className="rounded-full w-5 h-5 border border-gray-300  flex items-center justify-center"
          >
            <div className="text-xl text-gray-400 cursor-pointer">-</div>
          </div>
          <button className="border border-gray-300 py-1 w-10 text-xs font-normal text-gray-400  ">
            {item.quantity}
          </button>
          <div
            onClick={() => dispatch(increaseQty(item.id))}
            className="rounded-full w-5 h-5 border border-gray-300  flex items-center justify-center"
          >
            <div className="text-base text-gray-400 cursor-pointer">+</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col ">
        <h4>{item.title}</h4>
        <h2 className="text-gray-500 capitalize">{item.category}</h2>
        <div className="flex items-center  gap-2 ">
          <p className="text-base text-gray-400 line-through">
            {" "}
            ₹ {item?.price}
          </p>
          <p className="text-base text-black font-semibold">
            ₹{item?.discountPercentage}
          </p>
        </div>
        <div className="pt-4">
          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className="bg-red-600 px-3 py-1 rounded-md cursor-pointer text-white w-32"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
