import { useState } from "react";
import { CiHome } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";
import { IoBagCheckOutline } from "react-icons/io5";
import {
  MdFavoriteBorder,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cartItems = useSelector((state) => state.cart || []);
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className=" main- border border-b-gray-300 h-18 main-container  flex justify-between w-full">
      <div className="flex items-center gap-2">
        <h1 className="text-green-800 text-xl font-bold">Shoppy Globe</h1>
      </div>

      <div className="flex md:hidden items-center gap-4">
        <Link to={"/cart"}>
          <div className="relative">
            <div className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              {cartItems.length}
            </div>
            <MdFavoriteBorder className="h-7 w-7 text-green-700" />
          </div>
        </Link>

        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="text-green-700"
        >
          {openMenu ? (
            <HiX className="h-8 w-8" />
          ) : (
            <HiMenu className="h-8 w-8" />
          )}
        </button>
      </div>
      {openMenu && (
        <div className="absolute top-12 right-0 bg-white shadow-lg  w-full p-3 z-50">
          <ul className="flex flex-col gap-3 md:gap-4 px-3 font-medium">
            <Link to={"/"}>
              <li className="flex items-center gap-2 text-green-700">
                <CiHome /> Home
              </li>
            </Link>

            <Link to={"/product"}>
              <li className="flex items-center gap-2 text-green-700">
                <MdOutlineProductionQuantityLimits /> Product
              </li>
            </Link>

            <Link to={"/checkout"}>
              <li className="flex items-center gap-2 text-green-700">
                <IoBagCheckOutline /> Checkout
              </li>
            </Link>
          </ul>
        </div>
      )}

      <div className=" hidden md:flex gap-5 items-center cursor-pointer font-semibold text-sm">
        <Link to={"/"}>
          {" "}
          <div className="flex gap-1 items-center">
            <CiHome className="text-[#34ad78]" />
            <h1 className="text-[#34ad78]">Home</h1>
          </div>
        </Link>

        <Link to={"/product"}>
          {" "}
          <div className="flex gap-1 items-center">
            <MdOutlineProductionQuantityLimits className="text-[#34ad78]" />
            <h1 className="text-[#34ad78]">Product</h1>
          </div>
        </Link>

        <Link to={`/checkout`}>
          <div className="flex items-center gap-1">
            <IoBagCheckOutline className="text-[#34ad78]" />
            <h1 className="text-[#34ad78]">CheckOut</h1>
          </div>
        </Link>
        <Link to={`/cart`}>
          {" "}
          <div className="flex gap-1 items-center justify-center cursor-pointer">
            <div className="relative">
              <div className="rounded-full text-sm bg-[#34ac75] flex items-center justify-center absolute -top-3 -right-2 text-white h-4 w-4">
                {cartItems.length}
              </div>
              <MdFavoriteBorder className="h-6 w-6 cursor-pointer" />
            </div>
            <h1 className="text-xs text-gray-500 pt-2 cursor-pointer">Cart</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
