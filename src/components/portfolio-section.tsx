import { SectionTitle } from "./common/section-title";
import SectionLayout from "./common/section-layout";
import { Description } from "./common/description";
import { Button } from "./common/button";

const PortfolioSection = () => {
  return (
    <SectionLayout className="mr-0 px-0 md:max-w-[736px] lg:max-w-[982px] xl:max-w-[1341px]">
      <div className=" grid-cols-1 md:grid-cols-12 grid gap-10">
        <div className="xl:col-span-4 md:col-span-5  col-span-1">
          <div className="px-6 md:px-0 w-full h-full flex flex-col justify-center items-start">
            <div className="space-y-3 md:space-y-2 lg:space-y-3">
              <SectionTitle>Landing Page</SectionTitle>
              <SectionTitle>Portofolio</SectionTitle>
            </div>
            <Description className=" max-w-72 mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            </Description>
            <Button
              className=" mt-10 md:mt-5 lg:mt-11"
              variant="primary"
              size="lg">
              See more
            </Button>
          </div>
        </div>
        <div className="xl:col-span-8 md:col-span-7 col-span-1 grid gap-5">
          <div className="grid  grid-cols-12 gap-5">
            <div className="col-span-6 md:col-span-5">
              <div className=" w-full bg-neutral-200 h-44 lg:h-64 rounded-lg md:rounded-[10px] overflow-hidden">
                <img
                  className=" w-full h-full object-cover"
                  src="/hero-image.jpg"
                  alt="Landing Page"
                />
              </div>
            </div>
            <div className="col-span-6 md:col-span-5">
              <div className=" w-full bg-neutral-200 h-44 lg:h-64 rounded-lg md:rounded-[10px] overflow-hidden">
                <img
                  className=" w-full h-full object-cover"
                  src="/hero-image.jpg"
                  alt="Landing Page"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-8 md:col-span-5">
              <div className=" w-full bg-neutral-200 h-44 lg:h-64 rounded-lg md:rounded-[10px] overflow-hidden">
                <img
                  className=" w-full h-full object-cover"
                  src="/hero-image.jpg"
                  alt="Landing Page"
                />
              </div>
            </div>
            <div className="col-span-4 md:col-span-7">
              <div className=" w-full bg-neutral-200 h-44 lg:h-64 rounded-lg md:rounded-[10px] overflow-hidden">
                <img
                  className=" w-full h-full object-cover"
                  src="/hero-image.jpg"
                  alt="Landing Page"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default PortfolioSection;
