import HeroSection from "../components/hero-section";

const Home = () => {
  console.log("Home");
  return (
    <div className="font-sans max-w-[1440px] mx-auto">
      <HeroSection />
      <div className=" h-screen"></div>
    </div>
  );
};

export default Home;
