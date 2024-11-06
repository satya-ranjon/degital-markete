import HeroSection from "../components/hero-section";
import PortfolioSection from "../components/portfolio-section";
import MarketerSection from "../components/marketer-section";
import ServiceSection from "../components/service-section";

const Home = () => {
  console.log("Home");
  return (
    <div className="font-sans max-w-[1440px] mx-auto">
      <HeroSection />
      <ServiceSection />
      <MarketerSection />
      <PortfolioSection />
      <div className=" h-screen"></div>
    </div>
  );
};

export default Home;
