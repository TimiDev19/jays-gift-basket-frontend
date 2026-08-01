import { Link } from "react-router-dom";
import "../index.css";
import ScrollReveal from "scrollreveal";
import { useEffect, useState } from "react";
import Shop from "@/components/Shop";
import Footer from "@/components/Footer";
import PersonalizeModal from "@/modals/PersonalizeModal";
import InfiniteCarousel from "@/components/InfiniteCarousel";
import CompanyLocationSection from "@/components/CompanyLocationSection";
import Basket from "@/assets/hero-basket.png";
import FeaturesSlider from "@/components/FeaturesSlider";
import birthday from "@/assets/birthday-gift.png";
import wedding from "@/assets/wedding-gift.png";
import coporate from "@/assets/coporate-gift.png";
import couples from "@/assets/couples-gift.png";
import picnic from "@/assets/picnic.png"

const Landingpage = () => {
  const [personaliseOpen, setPersonalizeOpen] = useState(false);

  useEffect(() => {
    ScrollReveal().reveal(".reveal-bottom", {
      duration: 1500,
      origin: "bottom",
      distance: "50px",
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".reveal-left", {
      duration: 1500,
      origin: "left",
      distance: "50px",
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="h-[100vh] w-[100vw] scroll-smooth overflow-y-scroll">
      <div className="min-h-[20vh] block">
        <div className=" lg:hidden w-[100vw] flex flex-col items-center justify-center mt-[110px]">
          <p className=" text-[14px] geist font-thin mb-[10px]">
            Same Day Delivery available
          </p>
          <h1 className=" font-[900] text-[58px] text-center big-shoulders w-[90%] mb-[10px]">
            You bring the thought. We’ll bring the wow.
          </h1>
          <p className=" text-[16px] geist font-thin text-center w-[90%] mb-[30px]">
            Finding the perfect gift shouldn't feel like a full-time job. <br />{" "}
            Jay’s Gift Basket combines artisanal handpicked goods with <br />{" "}
            show-stopping presentation, delivered straight to their door. <br />{" "}
            You get all the credit, none of the stress.
          </p>

          <img src={picnic} alt="" className=" w-[90%] h-auto mb-[20px]" />
        </div>
        {/* <div className=" lg:hidden bg-transparent hero-bg py-[20px] pb-[0] px-[8px] rounded-[30px] w-[100%] mt-[60px] mx-auto flex flex-col items-center justify-center">
          <h1 className=" text-[#000] text-center w-full text-[40px] font-[600] mb-[10px]">
            Curated Gift Baskets for Every Special Moment
          </h1>

          <p className=" text-center w-full text-[16px] text-[#3B3B3B] leading-loose mb-[20px]">
            Handpicked items, beautifully packaged and delivered on time so you
            can make every occasion feel effortless and unforgettable.
          </p>

          <div className=" w-full z-[10] flex max-sm:items-start justify-start mb-[20px]">
            <Link
              to={"/shop"}
              className=" max-sm:mb-[20px] w-[100%] px-4 py-1 bg-[#A87F3D] text-[#fff] hover:text-[#fff] duration-500 hover:bg-[#3B3B3B] h-[40px] flex items-center justify-center font-light rounded-full"
            >
              Shop Now
            </Link>
          </div>

          <div className="w-full h-[194px] flex items-center justify-center rounded-tr-[40px] p-0">
            <div className=" w-full h-[40vh] fruit-hero-bg rounded-none"></div>
          </div>
        </div> */}

        <div
          id="hero"
          className="min-h-[90vh] overflow-hidden w-[100dvw] hidden lg:flex items-center justify-center pt-[138px] relative"
        >
          <div className="absolute inset-0 hero-bg"></div>

          {/* LEFT CONTENT */}
          <div className="relative z-[6] h-full w-full flex items-center justify-start max-sm:justify-center px-[5%]">
            <div className="w-[70%]">
              <h1 className="text-black text-[60px] max-sm:text-[30px] font-[600] lg:leading-[70px] tracking-tight mb-[30px]">
                You bring the thought. We’ll bring the wow.
              </h1>

              <p className="text-[#666666] max-sm:text-[15px] text-[18px] mb-[30px]">
                Finding the perfect gift shouldn't feel like a full-time job.{" "}
                <br />
                Jay’s Gift Basket combines artisanal handpicked goods with{" "}
                <br />
                show-stopping presentation, delivered straight to their door.{" "}
                <br />
                You get all the credit, none of the stress.
              </p>

              <Link
                to={"/shop"}
                className="w-[164px] px-4 py-1 hover:bg-transparent text-white duration-500 hover:border hover:border-[#A87F3D] bg-[#A87F3D] h-[48px] flex items-center justify-center font-light rounded-full hover:text-[#A87F3D]"
              >
                Shop Now
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="absolute inset-0 z-[5] flex items-end justify-end">
            <div className="h-full w-[50%] flex items-end justify-end">
              <img src={Basket} alt="" className="max-h-full object-contain" />
            </div>
          </div>
        </div>
      </div>

      <FeaturesSlider />
      <div
        id="categories"
        className=" w-full min-h-[40vh] px-[2.5%] pt-[150px] mb-[20px]"
      >
        <div className=" w-full mx-auto grid grid-cols-2 lg:grid-cols-3">
          <div className=" max-w-[40vw] lg:max-w-[20vw] mb-[20px]">
            <div className="w-[172px] lg:w-[286px] h-[192px] lg:h-[320px] cursor-pointer overflow-hidden mb-[10px]">
              <Link to={`/shopByRecipient`} className=" cursor-pointer">
                <img
                  src={couples}
                  className="w-full h-full object-cover hover:h-[110%] duration-500 cursor-pointer rounded-xl"
                />
              </Link>
            </div>

            <div className=" w-full flex items-center justify-center">
              <div className=" w-full flex flex-col items-center justify-center">
                <Link
                  to={`/shopByRecipient`}
                  className=" line-clamp-2 text-[#000000] text-[20px] mb-2"
                >
                  Shop by Recipient
                </Link>
              </div>
            </div>
          </div>

          <div className=" max-w-[40vw] lg:max-w-[20vw] mb-[20px]">
            <div className="w-[172px] lg:w-[286px] h-[192px] lg:h-[320px] cursor-pointer overflow-hidden mb-[10px]">
              <Link to={`/shopByOccassion`} className=" cursor-pointer">
                <img
                  src={birthday}
                  className="w-full h-full object-cover hover:h-[110%] duration-500 cursor-pointer rounded-xl"
                />
              </Link>
            </div>

            <div className=" w-full flex items-center justify-center">
              <div className=" w-full flex flex-col items-center justify-center">
                <Link
                  to={`/shopByOccassion`}
                  className=" line-clamp-2 text-[#000000] text-[20px] mb-2"
                >
                  Shop by Occassion
                </Link>
              </div>
            </div>
          </div>

          <div className=" max-w-[40vw] lg:max-w-[20vw] mb-[20px]">
            <div className="w-[172px] lg:w-[286px] h-[192px] lg:h-[320px] cursor-pointer overflow-hidden mb-[10px]">
              <Link
                to={`/#contact`}
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className=" cursor-pointer"
              >
                <img
                  src={coporate}
                  className="w-full h-full object-cover hover:h-[110%] duration-500 cursor-pointer rounded-xl"
                />
              </Link>
            </div>

            <div className=" w-full flex items-center justify-center">
              <div className=" w-full flex flex-col items-center justify-center">
                <Link
                  to={`/#contact`}
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className=" line-clamp-2 text-[#000000] text-[20px] mb-2"
                >
                  Build you Own Box
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SHOP */}
      <Shop />

      <section id="about" className=" w-full block pt-[150px] mb-[10vh]">
        <div className=" w-full lg:h-[70vh] flex max-sm:flex-col items-start justify-center max-sm:items-center px-[5%] space-x-[5%]">
          <div className=" max-sm:mb-[10vh] max-sm:w-full max-sm:h-[50vh] w-[40%] h-[70vh] flex items-start justify-center">
            <div className=" w-full h-full about-lfb-bg rounded-3xl"></div>
          </div>

          <div className=" w-[50%] max-sm:w-full min-h-[50vh] flex flex-col items-start max-sm:items-center max-sm:justify-center justify-start">
            <h1 className=" text-center text-[#A87F3D] text-[18px] uppercase max-sm:mb-[10px]">
              About Us
            </h1>
            <h1 className=" capitalize text-[32px] text-[#3B3B3B] font-[600]">
              where thoughtful gifting meets elegance
            </h1>
            <p className=" text-[16px] text-[#868C98] font-[300] mx-auto mb-[20px] leading-[2.3] montserrat">
              We specialize in creating beautifully curated gift baskets
              designed to make every moment feel special. From fresh fruits and
              gourmet treats to luxury gift packages and custom hampers, every
              basket is carefully arranged with quality, style, and attention to
              detail. <br />
              At Jays Gift Basket, we believe a gift should do more than look
              good — it should create a memorable experience. Whether you’re
              celebrating birthdays, anniversaries, graduations, corporate
              milestones, or simply showing appreciation, we help you deliver
              meaningful gifts that leave a lasting impression.
            </p>

            {/* <Link
              to={""}
              className=" h-[40px] bg-[#A87F3D] flex items-center justify-center px-[30px] text-white rounded-full font-[300]"
            >
              Read More
            </Link> */}
          </div>
        </div>
      </section>

      <div className=" block  mb-[10vh]">
        <div className=" w-full px-[5%] min-h-[40vh] flex flex-col items-center justify-center">
          <div className=" w-[100%] h-full flex flex-col items-center justify-center max-sm:justify-start max-sm:mb-[30px]">
            <h1 className=" text-[32px] text-[#A87F3D] mb-[10px] text-center">
              Trusted by Industry Leaders
            </h1>

            <p className=" text-[16px] text-[#868C98] font-light text-center mb-[10px]">
              From corporate giants to boutique brands, we’ve had the pleasure
              of delivering <br /> freshness to some of the finest names in
              Nigeria
            </p>
            <InfiniteCarousel />
            <h1 className=" text-[24px] text-[#A87F3D]">
              Over <b>2,000</b> Baskets Delivered
            </h1>
          </div>
        </div>
      </div>

      <div id="address">
        <CompanyLocationSection />
      </div>

      <div id="contact" className=" min-h-[50vh] block pt-[150px] mb-[10vh]">
        <div className=" h-[50vh] w-[100vw] flex items-center justify-center">
          <div className=" w-[80%] h-full bg-[#3B3B3B] rounded-3xl flex flex-col items-center justify-center p-[20px]">
            <h1 className=" text-[32px] text-white mb-[20px] text-center">
              Personalize Your Pick!
            </h1>
            <p className=" w-[50%] max-sm:w-full text-center text-white font-[300] mb-[20px]">
              Want to create something truly unique? Let’s design the perfect
              basket together. Whether you need a specific fruit mix or a
              special theme, our gift curator is ready to help you bring your
              vision to life.
            </p>
            <button
              onClick={() => setPersonalizeOpen(true)}
              className="relative group text-[16px] text-[#fff] duration-500 mb-[20px] hover:bg-transparent h-[48px] flex items-center justify-center bg-[#A87F3D] hover:text-[#A87F3D] hover:font-semibold montserrat rounded-full px-6"
            >
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </div>

      <Footer />

      {personaliseOpen && (
        <PersonalizeModal
          setPersonalizeOpen={setPersonalizeOpen}
          setIsTheBoardModalOpen={setPersonalizeOpen}
        />
      )}
    </div>
  );
};

export default Landingpage;
