"use client";
import mobileBg from "../assets/mobile-bg.png";
import { useEffect, useState } from "react";
import { ArrowRight01Icon, ShoppingBag01Icon } from "hugeicons-react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/audophileSlice";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { ArrowLeft01Icon, LinkBackwardIcon } from "hugeicons-react";
import React from "react";

type Product = {
  _id: string;
  name: string;
  price: number;
  description: string;
  avatar: string;
  cloudinary_id: string;
};

const Birthday = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [mobileProducts, setMobileProducts] = useState<Product[]>([]);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);

        const res = await fetch(
          "https://jays-gift-basket-backend.onrender.com/user"
        );
        const data = await res.json();

        const productArray = Array.isArray(data) ? data : [];

        // Filter only products with category "general"
        const generalProducts = productArray.filter(
          (product) => product.category?.toLowerCase() === "birthday"
        );

        // Sort by price (cheapest → most expensive)
        const sortedByPrice = [...generalProducts].sort(
          (a, b) => a.price - b.price
        );

        setProducts(sortedByPrice);
        setIsLoading(false);
      } catch (error) {
        console.error("Fetch error:", error);
        setProducts([]);
        setIsFailed(true);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product: Product) => {
    const CartItem = {
      id: product._id,
      img: product.avatar,
      name: product.name,
      price: product.price,
      quantity: 1,
    };

    dispatch(addToCart(CartItem));
  };

  return (
    <div>
      <div className="min-h-[100dvh] bg-white pt-[150px]">
        {/* Gallery */}
        <div className=" w-full min-h-[40vh] px-[2.5%] mb-[20px]">
          <div className=" w-full lg:w-[548px] px-[5%]">
            <Link
              to={"/"}
              className=" flex items-center justify-center mb-[20px] h-[36px] w-[36px] bg-[#A87F3D] rounded-full lg:hidden"
            >
              <ArrowLeft01Icon
                className=" text-white"
                size={25}
                strokeWidth={1.5}
              />
            </Link>
            <Link
              to={"/"}
              className=" flex items-center justify-center mb-[20px] h-[48px] w-[133px] bg-[#A87F3D] rounded-full text-white max-sm:hidden"
            >
              <LinkBackwardIcon
                className=" text-white mr-[5px]"
                size={25}
                strokeWidth={1.5}
              />{" "}
              Back
            </Link>
          </div>
          {/* Hero Section */}
          <section className="px-6 py-14 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#A87F3D]">
              Shop For Birthdays
            </h1>

            <p className="max-w-2xl mx-auto mt-5 text-gray-600 text-base md:text-lg">
              Explore our beautiful collection of handcrafted baskets for
              birthdays.
            </p>
          </section>
          {isLoading ? (
            <div className=" w-full grid grid-cols-2 lg:grid-cols-4">
              <div className=" max-w-[40vw] lg:max-w-[20vw] bg-[#A87F3D]/50 animate-pulse mb-[10px]">
                <div className="w-[172px] lg:w-[286px] h-[192px] lg:h-[320px] cursor-pointer overflow-hidden mb-[10px]">
                  <Link to={`#`} className=" cursor-pointer">
                    <div className="w-full h-full object-cover hover:h-[110%] duration-500 cursor-pointer bg-transparent"></div>
                  </Link>
                </div>

                <div className=" w-full flex items-center justify-between">
                  <div>
                    <Link
                      to={`#`}
                      className=" text-[14px] lg:text-[16px] font-[500] text-transparent hover:underline duration-700 ease-in-out cursor-pointer"
                    >
                      product.name
                    </Link>
                    <h1 className=" text-transparent font-[600] text-[18px] lg:text-[28px]">
                      ₦product.price
                    </h1>
                  </div>
                </div>
              </div>

              <div className=" max-w-[40vw] lg:max-w-[20vw] bg-[#A87F3D]/50 animate-pulse">
                <div className="w-[172px] lg:w-[286px] h-[192px] lg:h-[320px] cursor-pointer overflow-hidden mb-[10px]">
                  <Link to={`#`} className=" cursor-pointer">
                    <div className="w-full h-full object-cover hover:h-[110%] duration-500 cursor-pointer bg-transparent"></div>
                  </Link>
                </div>

                <div className=" w-full flex items-center justify-between">
                  <div>
                    <Link
                      to={`#`}
                      className=" text-[14px] lg:text-[16px] font-[500] text-transparent hover:underline duration-700 ease-in-out cursor-pointer"
                    >
                      product.name
                    </Link>
                    <h1 className=" text-transparent font-[600] text-[18px] lg:text-[28px]">
                      ₦product.price
                    </h1>
                  </div>

                  {/* <div
                      onClick={() => handleAddToCart(product)}
                      className=" cursor-pointer h-[24px] lg:h-[42px] w-[24px] lg:w-[42px] bg-[#A87F3D] rounded-full flex items-center justify-center"
                    >
                      <ShoppingBag01Icon
                        className=" text-[#EFF901]"
                        size={22}
                        strokeWidth={1.5}
                      />
                    </div> */}
                </div>
              </div>

              <div className=" max-w-[40vw] lg:max-w-[20vw] bg-[#A87F3D]/50 animate-pulse">
                <div className="w-[172px] lg:w-[286px] h-[192px] lg:h-[320px] cursor-pointer overflow-hidden mb-[10px]">
                  <Link to={`#`} className=" cursor-pointer">
                    <div className="w-full h-full object-cover hover:h-[110%] duration-500 cursor-pointer bg-transparent"></div>
                  </Link>
                </div>

                <div className=" w-full flex items-center justify-between">
                  <div>
                    <Link
                      to={`#`}
                      className=" text-[14px] lg:text-[16px] font-[500] text-transparent hover:underline duration-700 ease-in-out cursor-pointer"
                    >
                      product.name
                    </Link>
                    <h1 className=" text-transparent font-[600] text-[18px] lg:text-[28px]">
                      ₦product.price
                    </h1>
                  </div>

                  {/* <div
                      onClick={() => handleAddToCart(product)}
                      className=" cursor-pointer h-[24px] lg:h-[42px] w-[24px] lg:w-[42px] bg-[#A87F3D] rounded-full flex items-center justify-center"
                    >
                      <ShoppingBag01Icon
                        className=" text-[#EFF901]"
                        size={22}
                        strokeWidth={1.5}
                      />
                    </div> */}
                </div>
              </div>

              <div className=" max-w-[40vw] lg:max-w-[20vw] bg-[#A87F3D]/50 animate-pulse">
                <div className="w-[172px] lg:w-[286px] h-[192px] lg:h-[320px] cursor-pointer overflow-hidden mb-[10px]">
                  <Link to={`#`} className=" cursor-pointer">
                    <div className="w-full h-full object-cover hover:h-[110%] duration-500 cursor-pointer bg-transparent"></div>
                  </Link>
                </div>

                <div className=" w-full flex items-center justify-between">
                  <div>
                    <Link
                      to={`#`}
                      className=" text-[14px] lg:text-[16px] font-[500] text-transparent hover:underline duration-700 ease-in-out cursor-pointer"
                    >
                      product.name
                    </Link>
                    <h1 className=" text-transparent font-[600] text-[18px] lg:text-[28px]">
                      ₦product.price
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className=" w-full grid grid-cols-2 lg:grid-cols-4">
                {products.map((product) => (
                  <div
                    key={product._id}
                    className=" max-w-[40vw] lg:max-w-[20vw] mb-[20px]"
                  >
                    <div className="w-[172px] lg:w-[286px] h-[192px] lg:h-[320px] cursor-pointer overflow-hidden mb-[10px]">
                      <Link
                        to={`/product/${product._id}`}
                        className=" cursor-pointer"
                      >
                        <img
                          src={product.avatar}
                          alt={product.name}
                          className="w-full h-full object-cover hover:h-[110%] duration-500 cursor-pointer rounded-t-xl"
                          // onClick={() => {
                          //     const params = new URLSearchParams({
                          //         _id: product._id,
                          //         name: product.name,
                          //         description: product.description,
                          //         price: product.price.toString(),
                          //         avatar: product.avatar,
                          //     });

                          //     router.push(`/shop/${product._id}?${params}`)
                          // }}
                        />
                      </Link>
                    </div>

                    <div className=" w-full flex items-center justify-between">
                      <div className=" w-full">
                        <Link
                          to={`/product/${product._id}`}
                          className=" text-[16px] lg:text-[22px] font-[400] text-black hover:underline duration-700 ease-in-out cursor-pointer mb-2 block"
                        >
                          {product.name}
                        </Link>

                        <p className=" line-clamp-2 text-[#A87F3D] text-[12px] mb-2">
                          {product.description}
                        </p>

                        <h1 className=" text-black font-[400] text-[20px] lg:text-[28px] mb-2">
                          ₦{product.price.toLocaleString()}
                        </h1>

                        <div
                          onClick={() => handleAddToCart(product)}
                          className=" cursor-pointer h-[24px] lg:h-[42px] hover:bg-transparent text-[#fff] w-full hover:text-[#A87F3D] duration-500 bg-[#A87F3D] rounded-xl flex text-[14px] font-[300] items-center justify-center"
                        >
                          Add To Cart
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Birthday;
