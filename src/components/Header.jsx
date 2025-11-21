import { CiHome } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import {
  MdFavoriteBorder,
  MdOutlineProductionQuantityLimits,
  MdShoppingCart,
} from "react-icons/md";
import { logo1 } from "../assets";

const Header = () => {
  return (
    <div className=" main- border border-b-gray-300 h-18 main-container  flex justify-between w-full">
      <section className="flex gap-5 items-center h-full">
        <div className="flex items-center gap-2">
          <img
            src={logo1}
            className="h-44 cursor-pointer w-44 object-contain"
          />
        </div>
        <div className="flex gap-8 cursor-pointer font-semibold text-sm">
          <div className="flex gap-1 items-center">
            <CiHome className="text-[#34ad78]" />
            <h1 className="text-[#34ad78]">Home</h1>
          </div>
          <div className="flex gap-1 items-center">
            <MdOutlineProductionQuantityLimits className="text-[#34ad78]" />
            <h1 className="text-[#34ad78]">Product</h1>
          </div>
          <div className="flex items-center gap-1">
            <IoBagCheckOutline className="text-[#34ad78]" />
            <h1 className="text-[#34ad78]">CheckOut</h1>
          </div>
        </div>
      </section>
      <section className="flex gap-3 items-center justify-center">
        <div className="flex gap-2  items-center">
          <div className="relative">
            <div className="rounded-full text-sm bg-[#34ac75] flex items-center justify-center absolute -top-3 -right-2 text-white h-4 w-4">
              0
            </div>
            <MdShoppingCart className="h-6 w-6 cursor-pointer " />
          </div>
          <h1 className="text-xs text-gray-500 pt-2 cursor-pointer">
            Wishlist
          </h1>
        </div>

        <div className="flex gap-1 items-center justify-center cursor-pointer">
          <div className="relative">
            <div className="rounded-full text-sm bg-[#34ac75] flex items-center justify-center absolute -top-3 -right-2 text-white h-4 w-4">
              0
            </div>
            <MdFavoriteBorder className="h-6 w-6 cursor-pointer" />
          </div>
          <h1 className="text-xs text-gray-500 pt-2 cursor-pointer">Cart</h1>
        </div>

        <input
          type="text"
          className="border p-2 w-84 rounded-md focus:outline-none"
          placeholder="Search the item....."
        />
      </section>
    </div>
  );
};

export default Header;
