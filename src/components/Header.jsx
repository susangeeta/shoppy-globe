import { useState } from "react";
import { CiHome, CiShoppingCart } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";
import { IoBagCheckOutline } from "react-icons/io5";
import {
  MdFavoriteBorder,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const cartItems = useSelector((state) => state.cart || []);
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-300 h-16 flex items-center justify-between px-4 main-container">
      <Link to={"/"}>
        <div className="flex items-center gap-2">
          <h1 className="text-green-800 text-xl font-bold">Shoppy Globe</h1>
        </div>
      </Link>

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
          <div
            className={`flex gap-1 items-center ${
              isActive("/") ? "text-blue-600 font-bold" : "text-[#34ad78]"
            }`}
          >
            <CiHome
              className={isActive("/") ? "text-blue-600" : "text-[#34ad78]"}
            />
            <h1>Home</h1>
          </div>
        </Link>

        <Link to={"/product"}>
          <div
            className={`flex gap-1 items-center ${
              isActive("/product")
                ? "text-blue-600 font-bold"
                : "text-[#34ad78]"
            }`}
          >
            <MdOutlineProductionQuantityLimits
              className={
                isActive("/product") ? "text-blue-600" : "text-[#34ad78]"
              }
            />
            <h1>Product</h1>
          </div>
        </Link>

        <Link to={`/checkout`}>
          <div
            className={`flex items-center gap-1 ${
              isActive("/checkout")
                ? "text-blue-600 font-bold"
                : "text-[#34ad78]"
            }`}
          >
            <IoBagCheckOutline
              className={
                isActive("/checkout") ? "text-blue-600" : "text-[#34ad78]"
              }
            />
            <h1>Checkout</h1>
          </div>
        </Link>
        <Link to={`/cart`}>
          <div className="flex gap-1 items-center justify-center cursor-pointer">
            <div className="relative">
              <div className="rounded-full text-xs bg-[#34ac75] flex items-center justify-center absolute -top-3 -right-2 text-white h-5 w-5">
                {cartItems.length}
              </div>
              <CiShoppingCart className="h-6 w-6 cursor-pointer" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
