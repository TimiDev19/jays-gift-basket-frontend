"use client";
import mobileBg from "../assets/mobile-bg.png";
import { useEffect, useState } from "react";
import { ArrowRight01Icon, ShoppingBag01Icon } from "hugeicons-react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/audophileSlice";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

type Product = {
  _id: string;
  name: string;
  price: number;
  description: string;
  avatar: string;
  cloudinary_id: string;
};

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);

        const res = await fetch(
          "https://jays-gift-basket-backend.onrender.com/user"
        );

        const data = await res.json();

        console.log("Fetched data:", data);

        setProducts(
          Array.isArray(data) ? data.sort((a, b) => a.price - b.price) : []
        );

        setIsLoading(false);
      } catch (error) {
        console.error("Fetch error:", error);
        setProducts([]);
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
    <>
      <div
        id=""
        className=" w-full min-h-[100vh] px-[2.5%] pt-[150px] mb-[50px]"
      >
        <div className=" w-full flex items-center justify-center mb-[5vh]">
          <h1 className=" text-[28px] text-[#0A0D14]">SHOP</h1>
          {/* <Link
                    to={""}
                    className=" text-[14px] text-[#A87F3D] font-semibold"
                >
                    View all
                </Link> */}
        </div>

        {isLoading ? (
          <div className=" w-full grid grid-cols-2 lg:grid-cols-4">
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
                    ₦product.price.toLocaleString()
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
                    ₦product.price.toLocaleString()
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
                    ₦product.price.toLocaleString()
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
          </div>
        ) : (
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 items-stretch gap-x-6 gap-y-10 lg:gap-y-14 mb-[50px]">
            {products.map((product) => (
              <div
                key={product._id}
                className="max-w-[40vw] lg:max-w-[20vw] flex flex-col h-full" // ← removed mb-[20px]
              >
                <div className="w-[172px] lg:w-[286px] h-[192px] lg:h-[320px] cursor-pointer overflow-hidden mb-[10px]">
                  <Link
                    to={`/product/${product._id}`}
                    className="cursor-pointer"
                  >
                    <img
                      src={product.avatar}
                      alt={product.name}
                      className="w-full h-full object-cover hover:h-[110%] duration-500 cursor-pointer rounded-t-xl"
                    />
                  </Link>
                </div>

                <div className="w-full flex flex-col flex-1 items-center justify-between">
                  <div className="w-full flex flex-col flex-1">
                    <Link
                      to={`/product/${product._id}`}
                      className="text-[16px] lg:text-[22px] font-[400] text-black hover:underline duration-700 ease-in-out cursor-pointer mb-2 block line-clamp-2 min-h-[28px] lg:min-h-[56px]"
                    >
                      {product.name}
                    </Link>

                    <p className="line-clamp-2 text-[#A87F3D] text-[12px] mb-2 min-h-[32px]">
                      {product.description}
                    </p>

                    <h1 className="text-black font-[400] text-[20px] lg:text-[28px] mb-2">
                      ₦{product.price.toLocaleString()}
                    </h1>

                    <div
                      onClick={() => handleAddToCart(product)}
                      className="cursor-pointer h-[24px] lg:h-[42px] hover:bg-transparent text-[#fff] w-full hover:text-[#A87F3D] duration-500 bg-[#A87F3D] rounded-xl flex text-[14px] font-[300] items-center justify-center mt-auto"
                    >
                      Add To Cart
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Shop;
