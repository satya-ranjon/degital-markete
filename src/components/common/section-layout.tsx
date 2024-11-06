import React from "react";

const SectionLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" px-6 md:px-0 md:max-w-[700px] lg:max-w-[935px] xl:max-w-[1200px] mx-auto">
      {children}
    </div>
  );
};

export default SectionLayout;
