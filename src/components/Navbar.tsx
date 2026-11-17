import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/store/hooks/hooks";
import { AnimatePresence, motion } from "framer-motion";
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
import { ChevronDown, Gift, Heart, Menu, X } from "lucide-react";
import { openSearch } from "@/store/searchSlice";
import NavDropdown from "./NavDropdown";

const Navbar = () => {
  const cartIsShowing = useAppSelector((state) => state.appState.cartIsVisible);
  const mobileMenuIsOpen = useAppSelector((state) => state.appState.mobileMenu);
  const dispatch = useDispatch();
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false);
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
          <div className="flex w-full max-sm:min-h-[10px] h-[90px] items-center justify-between pxpx py-3 bg-white">
            <div className=" flex items-center justify-center">
              <button
                type="button"
                className="mr-3 flex items-center justify-center lg:hidden"
                aria-label={mobileMenuIsOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuIsOpen}
                aria-controls="mobile-navigation"
                onClick={() => dispatch(toggleMobileMenu(!mobileMenuIsOpen))}
              >
                {mobileMenuIsOpen ? (
                  <X size={26} strokeWidth={1} className="text-[#868C98]" />
                ) : (
                  <Menu size={26} strokeWidth={1} className="text-[#868C98]" />
                )}
              </button>
              <h1 className=" font-semibold text-xl flex items-center justify-center ">
                <Link to={"/"}>
                  <img src={logo} className=" mr-[20px] h-[65px]" />
                </Link>
              </h1>

              <h1 className=" hidden sm:block text-[#3B3B3B] text-[20px] inter font-[500] mr-[50px]">
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
                className="mr-[12px] sm:mr-[20px]"
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

        <div className=" max-sm:hidden h-[48px] w-[100vw] bg-[#fff] flex items-center justify-between px-[5%]">
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

            <NavDropdown />

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
              to={"/christmas_promo"}
              className="group relative mb-1 inline-flex items-center gap-2 overflow-hidden rounded-full border border-[#C9A96E] bg-[#173D32] px-4 py-2 text-[15px] font-medium text-[#FFF9EC] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#205141] hover:shadow-md"
            >
              <Gift size={16} strokeWidth={1.7} className="text-[#E4C47D]" />
              <span>Christmas</span>
              <span className="rounded-full bg-[#A9444C] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-white">Super Deals</span>
            </Link>

            <Link
              to="/wedding"
              className="group relative mb-1 inline-flex items-center gap-2 overflow-hidden rounded-full border border-[#D7B88F] bg-[#754558] px-4 py-2 text-[15px] font-medium text-[#FFF8F4] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#89536A] hover:shadow-md"
            >
              <Heart size={16} strokeWidth={1.7} className="text-[#F2D8C8]" />
              <span>Eru Iyawo</span>
              <span className="rounded-full bg-[#E8D0B0] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#5B3947]">
                Bridal gifts
              </span>
            </Link>

            

            {/* <Link
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
            </Link> */}

            {/* SEARCH BAR */}
          </div>

          <Link
            target="_blank"
            to={"https://wa.me/+2348024015795"}
            className="relative max-sm:hidden group text-[16px] text-[#fff] duration-500 mb-[20px] hover:bg-transparent h-full flex items-center justify-center bg-[#A87F3D] hover:text-[#A87F3D] hover:font-semibold montserrat rounded-full px-6"
          >
            Chat On WhatsApp
          </Link>
        </div>
      </div>
      <AnimatePresence>
        {mobileMenuIsOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              className="fixed inset-0 z-[55] bg-black/30 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => dispatch(toggleMobileMenu(false))}
            />
            <motion.nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              className="fixed left-0 right-0 top-[90px] z-[60] max-h-[calc(100dvh-90px)] overflow-y-auto bg-white px-6 py-5 shadow-xl lg:hidden"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.28, ease: "easeOut" }}
            >
              <div className="flex flex-col divide-y divide-gray-100">
                <Link
                  to="/"
                  onClick={() => {
                    dispatch(toggleMobileMenu(false));
                    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="py-4 text-base text-[#222]"
                >Home</Link>
                <Link
                  to="/#shop"
                  onClick={() => {
                    dispatch(toggleMobileMenu(false));
                    document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="py-4 text-base text-[#222]"
                >Shop</Link>
                <div className="py-4">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between text-left text-base text-[#222]"
                    aria-expanded={mobileCategoriesOpen}
                    onClick={() => setMobileCategoriesOpen((open) => !open)}
                  >
                    Categories
                    <ChevronDown size={18} className={`transition-transform ${mobileCategoriesOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {mobileCategoriesOpen && (
                      <motion.div
                        className="flex flex-col gap-3 overflow-hidden pl-4 pt-3"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                      >
                        {[
                          ["Shop by Recipient", "/shopByRecipient"],
                          ["Shop by Occasion", "/shopByOccassion"],
                          ["Build Your Own Box", "/#contact"],
                        ].map(([label, href]) => (
                          <Link key={href} to={href} onClick={() => dispatch(toggleMobileMenu(false))} className="text-sm text-gray-600">{label}</Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <Link
                  to="/#aboutus"
                  onClick={() => {
                    dispatch(toggleMobileMenu(false));
                    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="py-4 text-base text-[#222]"
                >About Us</Link>
                <Link
                  to="/christmas_promo"
                  onClick={() => dispatch(toggleMobileMenu(false))}
                  className="my-2 flex items-center gap-3 rounded-xl border border-[#D8C08D] bg-[#173D32] px-4 py-3 text-base font-medium text-[#FFF9EC] shadow-sm transition-colors hover:bg-[#205141]"
                >
                  <Gift size={19} strokeWidth={1.7} className="text-[#E4C47D]" />
                  <span>Christmas</span>
                  <span className="ml-auto rounded-full bg-[#A9444C] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">Super Deals</span>
                </Link>
                <Link
                  to="/wedding"
                  onClick={() => dispatch(toggleMobileMenu(false))}
                  className="my-2 flex items-center gap-3 rounded-xl border border-[#D7B88F] bg-[#754558] px-4 py-3 text-base font-medium text-[#FFF8F4] shadow-sm transition-colors hover:bg-[#89536A]"
                >
                  <Heart size={19} strokeWidth={1.7} className="text-[#F2D8C8]" />
                  <span>Eru Iyawo</span>
                  <span className="ml-auto rounded-full bg-[#E8D0B0] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#5B3947]">
                    Bridal gifts
                  </span>
                </Link>
                <a href="https://wa.me/+2348024015795" target="_blank" rel="noreferrer" onClick={() => dispatch(toggleMobileMenu(false))} className="mt-4 flex items-center justify-center rounded-full bg-[#A87F3D] px-6 py-3 text-base text-white">Chat On WhatsApp</a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
      <Cart />
    </>
  );
};

export default Navbar;
