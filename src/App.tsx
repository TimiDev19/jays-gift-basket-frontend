import "./App.css";
import "./../app/globals.css";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import Shop from "./pages/Shop";
import { FadeReveal } from "./components/animations/FadeReveal";
import ProductPage from "./pages/ProductPage";
import StickyButton from "./components/StickyButton";
import SearchModal from "./modals/SearchModal";
import ValentineBaskets from "./pages/ValentineBaskets";
import WeddingBaskets from "./pages/WeddingBasket";
import RamadanBaskets from "./pages/CouplesBaskets";
import BirthdayBaskets from "./pages/BirthdayBaskets";
import CorporateBaskets from "./pages/CorporateBaskets";
import OrderConfirmed from "./pages/OrderConfirmed";
import ReturnsAndRefunds from "./pages/ReturnsAndRefunds";
import ShippingAndDelivery from "./pages/ShippingAndDelivery";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";
import OrderProcessing from "./pages/OrderProcessing";
import CouplesBaskets from "./pages/CouplesBaskets";

function App() {
  return (
    <div className=" montserrat scroll-smooth">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <SearchModal />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/orderConfirmed" element={<OrderConfirmed />} />
          <Route path="/orderProcessing" element={<OrderProcessing />} />
          <Route
            path="/returnsandrefundspolicy"
            element={<ReturnsAndRefunds />}
          />
          <Route
            path="/shippinganddelivery"
            element={<ShippingAndDelivery />}
          />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/shop" element={<Shop />} />
          <Route
            path="/product/:id"
            element={
              <FadeReveal>
                <ProductPage />
              </FadeReveal>
            }
          />
          <Route
            path="/valentine"
            element={
              <FadeReveal>
                <ValentineBaskets />
              </FadeReveal>
            }
          />
          <Route
            path="/wedding"
            element={
              <FadeReveal>
                <WeddingBaskets />
              </FadeReveal>
            }
          />
          <Route
            path="/corporate"
            element={
              <FadeReveal>
                <CorporateBaskets />
              </FadeReveal>
            }
          />
          <Route
            path="/birthday"
            element={
              <FadeReveal>
                <BirthdayBaskets />
              </FadeReveal>
            }
          />
          <Route
            path="/couples"
            element={
              <FadeReveal>
                <CouplesBaskets />
              </FadeReveal>
            }
          />
        </Routes>
        <StickyButton />
      </BrowserRouter>
    </div>
  );
}

export default App;