import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft01Icon, LinkBackwardIcon } from "hugeicons-react";
import Footer from "@/components/Footer";

type Product = {
  _id: string;
  name: string;
  avatar: string;
  category?: string;
};

const WeddingBaskets = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFailed, setIsFailed] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://jays-gift-basket-backend.onrender.com/user"
        );
        if (!response.ok) throw new Error("Unable to load bridal gallery");

        const data: unknown = await response.json();
        const productArray: Product[] = Array.isArray(data) ? data : [];
        setProducts(
          productArray.filter(
            (product) => product.category?.trim().toLowerCase() === "bridal"
          )
        );
      } catch (error) {
        console.error("Bridal gallery fetch error:", error);
        setProducts([]);
        setIsFailed(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const getWhatsAppInquiryUrl = (productName: string) => {
    const message = `Hello, I'm interested in the ${productName} design from your Eru Iyawo gallery. I'd like to discuss a customised order.`;
    return `https://wa.me/2348024015795?text=${encodeURIComponent(message)}`;
  };

  return (
    <>
      <main className="min-h-[100dvh] bg-white pt-[150px]">
        <div className="mb-5 w-full px-[2.5%]">
          <div className="w-full px-[5%] lg:w-[548px]">
            <Link
              to="/"
              aria-label="Back to home"
              className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#A87F3D] lg:hidden"
            >
              <ArrowLeft01Icon className="text-white" size={25} strokeWidth={1.5} />
            </Link>
            <Link
              to="/"
              className="mb-5 hidden h-12 w-[133px] items-center justify-center rounded-full bg-[#A87F3D] text-white sm:flex"
            >
              <LinkBackwardIcon className="mr-[5px] text-white" size={25} strokeWidth={1.5} />
              Back
            </Link>
          </div>

          <section className="px-6 py-14 text-center">
            <h1 className="text-4xl font-extrabold text-[#A87F3D] md:text-6xl">
              ERU IYAWO GALLERY
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-gray-600 md:text-lg">
              Browse bridal gift inspiration. Tap a design to discuss a customised
              order with us on WhatsApp.
            </p>
          </section>

          {isLoading ? (
            <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="aspect-[4/5] animate-pulse rounded-xl bg-[#A87F3D]/20"
                />
              ))}
            </div>
          ) : isFailed ? (
            <p className="py-12 text-center text-gray-500">
              We couldn’t load the bridal gallery. Please try again later.
            </p>
          ) : products.length === 0 ? (
            <p className="py-12 text-center text-gray-500">
              No bridal gifts are available right now. Please check back soon.
            </p>
          ) : (
            <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
              {products.map((product) => (
                <a
                  key={product._id}
                  href={getWhatsAppInquiryUrl(product.name)}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Ask about the ${product.name} design on WhatsApp`}
                  className="group block overflow-hidden rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#754558]"
                >
                  <img
                    src={product.avatar}
                    alt={product.name}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </a>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default WeddingBaskets;
