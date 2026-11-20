import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft01Icon, LinkBackwardIcon } from "hugeicons-react";
import { ArrowUpRight, Heart, Sparkles } from "lucide-react";
import Footer from "@/components/Footer";
import coporate from "@/assets/irw.jpg";
import couples from "@/assets/zlatan.jpg";
import picnic from "@/assets/picnic.png";
import birthday from "@/assets/birthday-gift.png";

const WEDDING_CATEGORIES = {
  zlatan: {
    title: "Zlatan's Wedding",
    category: "zlatan",
    subtitle: "A celebration made unforgettable",
    tone: "from-[#351A27] via-[#6A354D] to-[#A87472]",
    accent: "text-[#F3D9C8]",
  },
  irw: {
    title: "Imperial Royale Wedding",
    category: "irw",
    subtitle: "An affair in timeless elegance",
    tone: "from-[#302A21] via-[#716044] to-[#C4A878]",
    accent: "text-[#F7E9C9]",
  },
} as const;

type WeddingCategory = keyof typeof WEDDING_CATEGORIES;

type Product = {
  _id: string;
  name: string;
  avatar: string;
  category?: string;
};

const WeddingBaskets = () => {
  const { weddingCategory } = useParams<{ weddingCategory?: string }>();
  const selectedCategory =
    weddingCategory && weddingCategory in WEDDING_CATEGORIES
      ? WEDDING_CATEGORIES[weddingCategory as WeddingCategory]
      : null;
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  useEffect(() => {
    if (!selectedCategory) {
      setProducts([]);
      setIsLoading(false);
      setIsFailed(false);
      return;
    }

    const controller = new AbortController();
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        setIsFailed(false);
        const response = await fetch(
          "https://jays-gift-basket-backend.onrender.com/user",
          { signal: controller.signal }
        );
        if (!response.ok) throw new Error("Unable to load wedding gallery");

        const data: unknown = await response.json();
        const productArray: Product[] = Array.isArray(data) ? data : [];
        setProducts(
          productArray.filter(
            (product) =>
              product.category?.trim().toLowerCase() ===
              selectedCategory.category
          )
        );
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") return;
        console.error("Wedding gallery fetch error:", error);
        setProducts([]);
        setIsFailed(true);
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    };

    fetchProducts();
    return () => controller.abort();
  }, [selectedCategory]);

  const getWhatsAppInquiryUrl = (productName: string) => {
    const message = `Hello, I'm interested in the ${productName} design from the ${selectedCategory?.title} Eru Iyawo gallery. I'd like to discuss a customised order.`;
    return `https://wa.me/2348024015795?text=${encodeURIComponent(message)}`;
  };

  return (
    <>
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
              ERU IYAWO GALLERY
            </h1>

            <p className="max-w-2xl mx-auto mt-5 text-gray-600 text-base md:text-lg">
              Browse bridal gift inspiration. Tap a design to discuss a
              customised order with us on WhatsApp.
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
              <div className=" w-full mx-auto grid grid-cols-2 lg:grid-cols-3">
                <div className=" max-w-[40vw] lg:max-w-[20vw] mb-[20px]">
                  <div className="w-[172px] lg:w-[286px] h-[192px] lg:h-[320px] cursor-pointer overflow-hidden mb-[10px]">
                    <Link to={`/zlatan`} className=" cursor-pointer">
                      <img
                        src={couples}
                        className="w-full h-full object-cover hover:h-[110%] duration-500 cursor-pointer rounded-xl"
                      />
                    </Link>
                  </div>

                  <div className=" w-full flex items-center justify-center">
                    <div className=" w-full flex flex-col items-center justify-center">
                      <Link
                        to={`/zlatan`}
                        className=" line-clamp-2 text-[#000000] text-[20px] mb-2"
                      >
                        Zlatan's Wedding
                      </Link>
                    </div>
                  </div>
                </div>

                <div className=" max-w-[40vw] lg:max-w-[20vw] mb-[20px]">
                  <div className="w-[172px] lg:w-[286px] h-[192px] lg:h-[320px] cursor-pointer overflow-hidden mb-[10px]">
                    <Link
                      to={`/irw`}
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
                        to={`/irw`}
                        className=" line-clamp-2 text-[#000000] text-[20px] mb-2 text-center"
                      >
                        Imperial Royale Wedding
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WeddingBaskets;
