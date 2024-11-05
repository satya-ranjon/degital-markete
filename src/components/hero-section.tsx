import Navbar from "./navbar";

const HeroSection = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="relative min-h-[440px] lg:min-h-[580px] xl:min-h-[800px] w-full overflow-hidden">
        {/* Blue background section */}
        <div className="absolute hidden md:block left-0 top-0 h-full w-[45%] bg-primary" />
        {/* Diagonal divider */}
        <div
          className="absolute hidden md:block left-[40%] z-50 top-0 h-full w-[10%] bg-primary"
          style={{
            transform: "skew(-10deg)",
          }}
        />

        {/* Content */}
        <div className="md:absolute pt-36 pb-16 md:pb-0 md:pt-0 px-[24px] md:px-0 bg-primary md:bg-transparent w-full md:w-fit text-white z-50 left-[4.2%] xl:left-[7%] top-[28%] xl:top-[25%]">
          <div className=" text-[24px] md:text-[20px] lg:text-[25px] xl:text-[30px] font-extrabold leading-[120%]">
            Hello, I am Luis Jocic
          </div>

          <h1 className="text-[48px] md:text-[42px] lg:text-[62px]  xl:text-[72px] font-extrabold leading-[70px] md:leading-[50px] lg:leading-[70px] xl:leading-[100px] mt-[15px] xl:mt-[20px]">
            Your Digital <br /> Marketer
          </h1>
          <div className=" max-w-full md:max-w-[301px]  lg:max-w-[401px] xl:max-w-[501px] text-[18px] md:text-[12px] lg:text-[16px] xl:text-[18px] font-semibold  leading-[33px] md:leading-[18px] lg:leading-[25px] xl:leading-[33px] mt-[20px] xl:mt-[30px]">
            Our mission is to responsible for ensuring that the website is
            easily found by the target audience
          </div>
          <div className=" mt-[30px] xl:mt-[50px]">
            <button className="bg-secondary rounded-[8px] text-[18px] md:text-[12px] lg:text-[16px]  xl:text-[18px] font-semibold leading-normal tracking-[0.5px]  px-[26px] md:px-[30px] lg:px-[40px]  xl:px-[50px] py-[13px] md:py-[8px] lg:py-[14px] xl:py-[18px]">
              Email me
            </button>
            <button className=" px-[26px] md:px-[30px] lg:px-[40px]  xl:px-[50px] py-[13px] md:py-[8px] lg:py-[14px] xl:py-[18px] text-[18px] md:text-[12px] lg:text-[16px]  xl:text-[18px] font-bold leading-[120%]">
              Download CV
            </button>
          </div>
        </div>

        {/* Image section */}
        <div className="md:absolute -z-50 right-0 top-0 h-[548px] md:h-full md:w-[60%]">
          <img
            src="/hero-image.jpg"
            alt="People working together at laptops"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
