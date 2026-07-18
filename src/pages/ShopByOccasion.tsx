import { ArrowLeft01Icon, LinkBackwardIcon } from "hugeicons-react";
import React from "react";
import { Link } from "react-router-dom";
import birthday from "@/assets/birthday-gift.png";
import wedding from "@/assets/wedding-gift.png";
import coporate from "@/assets/coporate-gift.png";
import couples from "@/assets/couples-gift.png";
import christmas from "@/assets/christmas.jpeg";
import new_year from "@/assets/new-year.jpeg";
import mothersday from "@/assets/mothersday.jpeg";
import fathersday from "@/assets/fathersday.jpeg";
import newbaby from "@/assets/newbaby.jpeg";
import sympathy from "@/assets/sympathy.jpeg";
import cuz from "@/assets/cuz.jpeg"

const ShopByOccasion = () => {
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
            Shop Based On The Occasion
          </h1>

          {/* <p className="max-w-2xl mx-auto mt-5 text-gray-600 text-base md:text-lg">
                  Explore our beautiful collection of handcrafted birthday baskets
                  perfect for gifting your loved ones.
                </p> */}
        </section>

        <div className=" w-full grid grid-cols-2 lg:grid-cols-4">
          <div className=" max-w-[40vw] lg:max-w-[20vw] mb-[20px]">
            <div className="w-[172px] lg:w-[286px] h-[192px] lg:h-[320px] cursor-pointer overflow-hidden mb-[10px]">
              <Link to={`/christmas`} className=" cursor-pointer">
                <img
                  src={christmas}
                  className="w-full h-full object-cover hover:h-[110%] duration-500 cursor-pointer rounded-xl"
                />
              </Link>
            </div>

            <div className=" w-full flex items-center justify-center">
              <div className=" w-full flex flex-col items-center justify-center">
                <Link
                  to={`/christmas`}
                  className=" line-clamp-2 text-[#000000] text-[20px] mb-2"
                >
                  Christmas Gifts & Hampers
                </Link>
              </div>
            </div>
          </div>

          <div className=" max-w-[40vw] lg:max-w-[20vw] mb-[20px]">
            <div className="w-[172px] lg:w-[286px] h-[192px] lg:h-[320px] cursor-pointer overflow-hidden mb-[10px]">
              <Link to={`/newyear`} className=" cursor-pointer">
                <img
                  src={new_year}
                  className="w-full h-full object-cover hover:h-[110%] duration-500 cursor-pointer rounded-xl"
                />
              </Link>
            </div>

            <div className=" w-full flex items-center justify-center">
              <div className=" w-full flex flex-col items-center justify-center">
                <Link
                  to={`/newyear`}
                  className=" line-clamp-2 text-[#000000] text-[20px] mb-2"
                >
                  New Year Celebrations
                </Link>
              </div>
            </div>
          </div>

          <div className=" max-w-[40vw] lg:max-w-[20vw] mb-[20px]">
            <div className="w-[172px] lg:w-[286px] h-[192px] lg:h-[320px] cursor-pointer overflow-hidden mb-[10px]">
              <Link to={`/valentines`} className=" cursor-pointer">
                <img
                  src={couples}
                  className="w-full h-full object-cover hover:h-[110%] duration-500 cursor-pointer rounded-xl"
                />
              </Link>
            </div>

            <div className=" w-full flex items-center justify-center">
              <div className=" w-full flex flex-col items-center justify-center">
                <Link
                  to={`/valentines`}
                  className=" line-clamp-2 text-[#000000] text-[20px] mb-2"
                >
                  Valentine's Day
                </Link>
              </div>
            </div>
          </div>

          <div className=" max-w-[40vw] lg:max-w-[20vw] mb-[20px]">
            <div className="w-[172px] lg:w-[286px] h-[192px] lg:h-[320px] cursor-pointer overflow-hidden mb-[10px]">
              <Link to={`/mothersday`} className=" cursor-pointer">
                <img
                  src={mothersday}
                  className="w-full h-full object-cover hover:h-[110%] duration-500 cursor-pointer rounded-xl"
                />
              </Link>
            </div>

            <div className=" w-full flex items-center justify-center">
              <div className=" w-full flex flex-col items-center justify-center">
                <Link
                  to={`/mothersday`}
                  className=" line-clamp-2 text-[#000000] text-[20px] mb-2"
                >
                  Mother's Day
                </Link>
              </div>
            </div>
          </div>

          <div className=" max-w-[40vw] lg:max-w-[20vw] mb-[20px]">
            <div className="w-[172px] lg:w-[286px] h-[192px] lg:h-[320px] cursor-pointer overflow-hidden mb-[10px]">
              <Link to={`/fathersday`} className=" cursor-pointer">
                <img
                  src={fathersday}
                  className="w-full h-full object-cover hover:h-[110%] duration-500 cursor-pointer rounded-xl"
                />
              </Link>
            </div>

            <div className=" w-full flex items-center justify-center">
              <div className=" w-full flex flex-col items-center justify-center">
                <Link
                  to={`/fathersday`}
                  className=" line-clamp-2 text-[#000000] text-[20px] mb-2"
                >
                  Father's Day
                </Link>
              </div>
            </div>
          </div>

          <div className=" max-w-[40vw] lg:max-w-[20vw] mb-[20px]">
            <div className="w-[172px] lg:w-[286px] h-[192px] lg:h-[320px] cursor-pointer overflow-hidden mb-[10px]">
              <Link to={`/birthday`} className=" cursor-pointer">
                <img
                  src={birthday}
                  className="w-full h-full object-cover hover:h-[110%] duration-500 cursor-pointer rounded-xl"
                />
              </Link>
            </div>

            <div className=" w-full flex items-center justify-center">
              <div className=" w-full flex flex-col items-center justify-center">
                <Link
                  to={`/birthday`}
                  className=" line-clamp-2 text-[#000000] text-[20px] mb-2"
                >
                  Birthdays
                </Link>
              </div>
            </div>
          </div>

          <div className=" max-w-[40vw] lg:max-w-[20vw] mb-[20px]">
            <div className="w-[172px] lg:w-[286px] h-[192px] lg:h-[320px] cursor-pointer overflow-hidden mb-[10px]">
              <Link to={`/newbabywelcomes`} className=" cursor-pointer">
                <img
                  src={newbaby}
                  className="w-full h-full object-cover hover:h-[110%] duration-500 cursor-pointer rounded-xl"
                />
              </Link>
            </div>

            <div className=" w-full flex items-center justify-center">
              <div className=" w-full flex flex-col items-center justify-center">
                <Link
                  to={`/newbabywelcomes`}
                  className=" line-clamp-2 text-[#000000] text-[20px] mb-2"
                >
                  New Baby Welcomes
                </Link>
              </div>
            </div>
          </div>

          <div className=" max-w-[40vw] lg:max-w-[20vw] mb-[20px]">
            <div className="w-[172px] lg:w-[286px] h-[192px] lg:h-[320px] cursor-pointer overflow-hidden mb-[10px]">
              <Link to={`/sympathy`} className=" cursor-pointer">
                <img
                  src={sympathy}
                  className="w-full h-full object-cover hover:h-[110%] duration-500 cursor-pointer rounded-xl"
                />
              </Link>
            </div>

            <div className=" w-full flex items-center justify-center">
              <div className=" w-full flex flex-col items-center justify-center">
                <Link
                  to={`/sympathy`}
                  className=" line-clamp-2 text-[#000000] text-[20px] mb-2"
                >
                  Sympathy & Condolences
                </Link>
              </div>
            </div>
          </div>

          <div className=" max-w-[40vw] lg:max-w-[20vw] mb-[20px]">
            <div className="w-[172px] lg:w-[286px] h-[192px] lg:h-[320px] cursor-pointer overflow-hidden mb-[10px]">
              <Link to={`/justbecause`} className=" cursor-pointer">
                <img
                  src={cuz}
                  className="w-full h-full object-cover hover:h-[110%] duration-500 cursor-pointer rounded-xl"
                />
              </Link>
            </div>

            <div className=" w-full flex items-center justify-center">
              <div className=" w-full flex flex-col items-center justify-center">
                <Link
                  to={`/justbecause`}
                  className=" line-clamp-2 text-[#000000] text-[20px] mb-2"
                >
                  Just Because (Everyday Surprises)
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopByOccasion;
