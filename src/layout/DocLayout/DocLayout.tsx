import React, { ReactNode } from "react";
import DocHeader from "./DocHeader";
import DocPagination from "./DocPagination";
import Footer from "../Footer/Footer";
import DocSide from "./DocSide";

interface TOCItem {
  id: string;
  title: string;
  children?: TOCItem[];
}

interface LayoutProps {
  title: string;
  subTitle: string;
  subText: string;
  tocItems?: TOCItem[];
  children: ReactNode;
  responseBlock?: React.ReactNode;
  requestBlock?: React.ReactNode;
  pagination?: {
    prev?: { href: string; label: string };
    next?: { href: string; label: string };
  };
}

const DocLayout: React.FC<LayoutProps> = ({
  title,
  subTitle,
  subText,
  tocItems,
  children,
  pagination,
  responseBlock,
  requestBlock
}) => {
  return (
    <div className="" id="content-container">
      <div className="flex flex-row xl:gap-12 box-border w-full">
        {/* Main Content Area */}
        <div
          className="relative grow box-border flex-col w-full mx-auto px-1 lg:pl-[22rem] xl:pl-[24rem] lg:-ml-12 xl:w-[calc(100%-28rem)]"
          id="content-area"
        >
          {/* Header */}
          <DocHeader title={title} subTitle={subTitle} subText={subText} />

          {/* Page-Specific Content */}
          <div className="relative mt-8 text-gray-700">{children}</div>

          {/* Pagination */}
          {pagination && (
            <div className="leading-6 mt-14">
              <DocPagination prev={pagination.prev} next={pagination.next} />
            </div>
          )}

          {/* Footer */}
          <Footer />
        </div>

        {/* Sidebar - hidden on sm and md screens */}
        <div className="hidden xl:block">
          <DocSide tocItems={tocItems} requestBlock={requestBlock} responseBlock={responseBlock}/>
        </div>
      </div>
    </div>
  );
};

export default DocLayout;
