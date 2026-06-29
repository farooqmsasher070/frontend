import Hero from "../components/Hero";
import OfferBanner from "../components/OfferBanner";
import CategorySection from "../components/CategorySection";
import BestSellerSection from "../components/BestSellerSection";
export default function Home() {
  return (
    <>
      <Hero />
      <OfferBanner />
      <CategorySection />
      <BestSellerSection />
    </>
  );
}