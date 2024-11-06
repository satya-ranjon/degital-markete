import { Button } from "./common/button";
import { Description } from "./common/description";
import SectionLayout from "./common/section-layout";
import { SectionTitle } from "./common/section-title";

const MarketerSection = () => {
  return (
    <SectionLayout className="mr-0 md:max-w-[736px] lg:max-w-[982px] xl:max-w-[1340px]">
      <div className="w-full flex flex-col md:flex-row justify-between gap-16 md:gap-10 xl:gap-36">
        <div className="max-w-[444px]">
          <div className=" space-y-3 md:space-y-2 lg:space-y-3">
            <SectionTitle>Best Digital</SectionTitle>
            <SectionTitle>Marketer for you</SectionTitle>
          </div>
          <Description className=" mt-7 md:mt-2 lg:mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut
          </Description>
          <Button
            className=" mt-10 md:mt-5 lg:mt-11"
            variant="primary"
            size="lg">
            Email me
          </Button>
        </div>
        <div className="w-full flex justify-between gap-10 xl:gap-40">
          <div className=" w-full grid grid-cols-2 gap-10 md:gap-0 xl:gap-20">
            <div className="w-full flex justify-center items-center">
              <div className=" text-start">
                <SectionTitle>145</SectionTitle>
                <div className="mt-3">
                  <Description>Awardee </Description>
                  <Description>champion </Description>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center">
              <div className=" text-start">
                <SectionTitle>98</SectionTitle>
                <div className="mt-3">
                  <Description>Winner</Description>
                  <Description>Contest </Description>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center">
              <div className=" text-start">
                <SectionTitle>7</SectionTitle>
                <div className="mt-3">
                  <Description>Years</Description>
                  <Description>experience </Description>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center">
              <div className=" text-start">
                <SectionTitle>1k+</SectionTitle>
                <div className="mt-3">
                  <Description>Client</Description>
                  <Description>Handled</Description>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[200px] hidden md:block lg:w-[371px] h-full lg:h-[357px] bg-gray-light relative -top-5">
            <img
              src="/image/section-marketer.svg"
              alt="Marketer"
              className="w-12 h-36 absolute top-1/2 -left-5 -translate-y-1/2"
            />
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default MarketerSection;
