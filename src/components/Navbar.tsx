import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/store/hooks/hooks";
import {
  toggleCart,
  toggleMobileMenu,
  toggleAuthModal,
} from "@/store/audophileSlice";
import Cart from "./cart/Cart";
import logo from "../assets/logo.png";
import {
  Call02Icon,
  CallIcon,
  InstagramIcon,
  Search01Icon,
  ShoppingBag01Icon,
} from "hugeicons-react";
import { openSearch } from "@/store/searchSlice";

const Navbar = () => {
  const cartIsShowing = useAppSelector((state) => state.appState.cartIsVisible);
  const dispatch = useDispatch();
  const toogleCartHandler = () => {
    dispatch(toggleCart(!cartIsShowing));
    dispatch(toggleMobileMenu(false));
    dispatch(toggleAuthModal(false));
    console.log(cartIsShowing);
  };
  const totalItems = useAppSelector((state) => state.appState.cart.length);

  return (
    <>
      <div className=" z-50 fixed w-full">
        <div className=" w-full">
          <div className="flex w-full h-[90px] items-center justify-between pxpx py-3 bg-white">
            <div className=" flex items-center justify-center">
              <h1 className=" font-semibold text-xl flex items-center justify-center ">
                <Link to={"/"}>
                  <img src={logo} className=" mr-[20px]" />
                </Link>
              </h1>

              <h1 className=" text-[#3B3B3B] text-[20px] montserrat font-[500] mr-[50px]">
                Jay's Gift Basket
              </h1>

              <h1 className=" text-[12px] text-[#0A0D14] flex items-center justify-start max-sm:hidden">
                <CallIcon
                  className=" text-[#A87F3D] mr-2"
                  size={16}
                  strokeWidth={2}
                />{" "}
                +234 707 505 1036
              </h1>
            </div>

            <div className=" flex items-center justify-center">
              <button
                onClick={() => dispatch(openSearch())}
                className="mr-[20px]"
              >
                <Search01Icon
                  className=" text-[#868C98]"
                  size={30}
                  strokeWidth={0.5}
                />
              </button>
              <div
                onClick={toogleCartHandler}
                className="relative inline-flex items-center space-x-2 cursor-pointer"
              >
                <ShoppingBag01Icon
                  className=" text-[#868C98]"
                  size={30}
                  strokeWidth={0.5}
                />
                <div className="absolute top-0 right-0 translate-y-[-0.4rem] translate-x-[0.4rem] bg-[#A87F3D] text-white text-xs px-1 py-[2px] font-semibold rounded-full">
                  {totalItems}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" h-[48px] w-[100vw] bg-[#fff] flex items-center justify-between px-[5%]">
          <div className=" lg:flex hidden items-center justify-center space-x-8 h-[48px] rounded-full">
            <Link
              to={"/"}
              className="relative group text-[16px] text-[#000]"
              onClick={() =>
                document
                  .getElementById("hero")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Home
              <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-[#000] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </Link>

            <Link
              to={"/#shop"}
              className="relative group text-[16px] text-[#000]"
              onClick={() =>
                document
                  .getElementById("shop")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Shop
              <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-[#000] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </Link>

            <Link
              to={"/#shop"}
              className="relative group text-[16px] text-[#000]"
              onClick={() =>
                document
                  .getElementById("shop")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Categories
              <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-[#000] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </Link>

            <Link
              to={"/#aboutus"}
              className="relative group text-[16px] text-[#000]"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              About Us
              <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </Link>

            <Link
              to={"/#contact"}
              className="relative group text-[16px] text-black"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Us
              <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </Link>

            {/* SEARCH BAR */}
          </div>

          <Link
            target="_blank"
            to={"https://wa.me/+2348024015795"}
            className="relative group text-[16px] text-[#fff] duration-500 mb-[20px] hover:bg-transparent h-full flex items-center justify-center bg-[#A87F3D] hover:text-[#A87F3D] hover:font-semibold montserrat rounded-full px-6"
          >
            Chat On WhatsApp
          </Link>
        </div>
      </div>
      <Cart />
    </>
  );
};

export default Navbar;
