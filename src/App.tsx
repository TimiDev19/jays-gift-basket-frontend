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
import WeddingBaskets from "./pages/WeddingBasket";
import CorporateBaskets from "./pages/CorporateBaskets";
import OrderConfirmed from "./pages/OrderConfirmed";
import ReturnsAndRefunds from "./pages/ReturnsAndRefunds";
import ShippingAndDelivery from "./pages/ShippingAndDelivery";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";
import OrderProcessing from "./pages/OrderProcessing";
import CouplesBaskets from "./pages/CouplesBaskets";
import ShopByRecipient from "./pages/ShopByRecipient";
import ShopByOccasion from "./pages/ShopByOccasion";
import ForHer from "./pages/ForHer";
import ForHim from "./pages/ForHim";
import ForParents from "./pages/ForParents";
import ForBabiesNChiildren from "./pages/ForBabiesNChiildren";
import CorporateNTeams from "./pages/CorporateNTeams";
import Christmas from "./pages/Christmas";
import NewYear from "./pages/NewYear";
import Birthday from "./pages/Birthday";
import NewBabyWelcomes from "./pages/NewBabyWelcomes";
import Sympathy from "./pages/Sympathy";
import JustBecause from "./pages/JustBecause";
import Valentines from "./pages/Valentines";
import MothersDay from "./pages/MothersDay";
import FathersDay from "./pages/FathersDay";

function App() {
  return (
    <div className=" montserrat scroll-smooth">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <SearchModal />
        <Routes>
          <Route path="/" element={<Landingpage />} />

          <Route path="/shopByRecipient" element={<ShopByRecipient />} />
          <Route path="/shopByOccassion" element={<ShopByOccasion />} />

          <Route path="/forHer" element={<ForHer />} />
          <Route path="/forHim" element={<ForHim />} />
          <Route path="/forParents" element={<ForParents />} />
          <Route path="/babiesandchildren" element={<ForBabiesNChiildren />} />
          <Route path="/corporatenteams" element={<CorporateNTeams />} />

          <Route path="/christmas" element={<Christmas />} />
          <Route path="/newyear" element={<NewYear />} />
          <Route path="/birthday" element={<Birthday />} />
          <Route path="/newbabywelcomes" element={<NewBabyWelcomes />} />
          <Route path="/sympathy" element={<Sympathy />} />
          <Route path="/justbecause" element={<JustBecause />} />
          <Route path="/valentines" element={<Valentines />} />
          <Route path="/mothersday" element={<MothersDay />} />
          <Route path="/fathersday" element={<FathersDay />} />

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
