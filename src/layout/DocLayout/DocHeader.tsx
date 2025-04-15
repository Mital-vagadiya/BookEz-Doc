import React, { ReactNode } from "react";

interface LayoutProps {
  title: string; // Page title
  subTitle: string; // Page-specific content
  subText: string;
}

const DocHeader: React.FC<LayoutProps> = ({ title, subTitle, subText }) => {
  return (
    <header id="header" className="relative">
      <div className="mt-0.5 space-y-2.5">
        <div className=" h-5 text-primary text-sm font-semibold">{title}</div>
        <div className="flex items-center relative">
          <h1
            id="page-title"
            className="inline-block text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight"
          >
            {subTitle}
          </h1>
        </div>
      </div>
      <div className="mt-2 text-lg">
        <p className="text-gray-700">{subText}</p>
      </div>
    </header>
  );
};

export default DocHeader;
