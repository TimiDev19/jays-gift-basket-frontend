import { ArrowLeft01Icon, LinkBackwardIcon } from "hugeicons-react";
import React from "react";
import { Link } from "react-router-dom";
import birthday from "@/assets/birthday-gift.png";
import wedding from "@/assets/wedding-gift.png";
import coporate from "@/assets/cnt.jpeg";
import couples from "@/assets/couples-gift.png";
import forHer from "@/assets/for-her.jpeg";
import forHim from "@/assets/for-him.jpeg";
import parents from "@/assets/parents.jpeg";
import babies from "@/assets/baby.jpeg"

const ShopByRecipient = () => {
  return (
    <div className="min-h-[100dvh] bg-white pt-[150px]">
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
            Shop Based On The Recipient
          </h1>

          {/* <p className="max-w-2xl mx-auto mt-5 text-gray-600 text-base md:text-lg">
              Explore our beautiful collection of handcrafted birthday baskets
              perfect for gifting your loved ones.
            </p> */}
        </section>

        <div className=" w-full grid grid-cols-2 lg:grid-cols-4">
          <div className=" max-w-[40vw] lg:max-w-[20vw] mb-[20px]">
            <div className="w-[172px] lg:w-[286px] h-[192px] lg:h-[320px] cursor-pointer overflow-hidden mb-[10px]">
              <Link to={`/forHer`} className=" cursor-pointer">
                <img
                  src={forHer}
                  className="w-full h-full object-cover hover:h-[110%] duration-500 cursor-pointer rounded-xl"
                />
              </Link>
            </div>

            <div className=" w-full flex items-center justify-center">
              <div className=" w-full flex flex-col items-center justify-center">
                <Link
                  to={`/forHer`}
                  className=" line-clamp-2 text-[#000000] text-[20px] mb-2"
                >
                  For Her
                </Link>
              </div>
            </div>
          </div>

          <div className=" max-w-[40vw] lg:max-w-[20vw] mb-[20px]">
            <div className="w-[172px] lg:w-[286px] h-[192px] lg:h-[320px] cursor-pointer overflow-hidden mb-[10px]">
              <Link to={`/forHim`} className=" cursor-pointer">
                <img
                  src={forHim}
                  className="w-full h-full object-cover hover:h-[110%] duration-500 cursor-pointer rounded-xl"
                />
              </Link>
            </div>

            <div className=" w-full flex items-center justify-center">
              <div className=" w-full flex flex-col items-center justify-center">
                <Link
                  to={`/forHim`}
                  className=" line-clamp-2 text-[#000000] text-[20px] mb-2"
                >
                  For Him
                </Link>
              </div>
            </div>
          </div>

          <div className=" max-w-[40vw] lg:max-w-[20vw] mb-[20px]">
            <div className="w-[172px] lg:w-[286px] h-[192px] lg:h-[320px] cursor-pointer overflow-hidden mb-[10px]">
              <Link to={`/forParents`} className=" cursor-pointer">
                <img
                  src={parents}
                  className="w-full h-full object-cover hover:h-[110%] duration-500 cursor-pointer rounded-xl"
                />
              </Link>
            </div>

            <div className=" w-full flex items-center justify-center">
              <div className=" w-full flex flex-col items-center justify-center">
                <Link
                  to={`/forParents`}
                  className=" line-clamp-2 text-[#000000] text-[20px] mb-2"
                >
                  For Parents
                </Link>
              </div>
            </div>
          </div>

          <div className=" max-w-[40vw] lg:max-w-[20vw] mb-[20px]">
            <div className="w-[172px] lg:w-[286px] h-[192px] lg:h-[320px] cursor-pointer overflow-hidden mb-[10px]">
              <Link to={`/babiesandchildren`} className=" cursor-pointer">
                <img
                  src={babies}
                  className="w-full h-full object-cover hover:h-[110%] duration-500 cursor-pointer rounded-xl"
                />
              </Link>
            </div>

            <div className=" w-full flex items-center justify-center">
              <div className=" w-full flex flex-col items-center justify-center">
                <Link
                  to={`/babiesandchildren`}
                  className=" line-clamp-2 text-[#000000] text-[20px] mb-2"
                >
                  Babies & Children
                </Link>
              </div>
            </div>
          </div>

          <div className=" max-w-[40vw] lg:max-w-[20vw] mb-[20px]">
            <div className="w-[172px] lg:w-[286px] h-[192px] lg:h-[320px] cursor-pointer overflow-hidden mb-[10px]">
              <Link to={`/corporatenteams`} className=" cursor-pointer">
                <img
                  src={coporate}
                  className="w-full h-full object-cover hover:h-[110%] duration-500 cursor-pointer rounded-xl"
                />
              </Link>
            </div>

            <div className=" w-full flex items-center justify-center">
              <div className=" w-full flex flex-col items-center justify-center">
                <Link
                  to={`/corporatenteams`}
                  className=" line-clamp-2 text-[#000000] text-[20px] mb-2"
                >
                 Corporate & Teams
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopByRecipient;
