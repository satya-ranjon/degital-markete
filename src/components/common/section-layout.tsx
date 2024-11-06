import React from "react";

const SectionLayout = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`py-20 md:py-32 px-6 md:px-0 md:max-w-[700px] lg:max-w-[935px] xl:max-w-[1200px] mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default SectionLayout;
