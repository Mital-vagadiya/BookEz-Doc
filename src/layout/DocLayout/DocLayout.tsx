import React, { ReactNode } from "react";
import DocHeader from "./DocHeader";
import DocPagination from "./DocPagination";
import Footer from "../Footer/Footer";
import DocSide from "./DocSide";

interface TOCItem {
  id: string; // The ID of the section
  title: string; // The title of the section
  children?: TOCItem[]; // Optional subitems
}

interface LayoutProps {
  title: string; // Page title
  subTitle: string; // Page subtitle
  subText: string; // Page subtext
  tocItems: { id: string; title: string; children?: TOCItem[];}[]; // Table of contents items
  children: ReactNode; // Page-specific content
  pagination?: {
    prev?: { href: string; label: string };
    next?: { href: string; label: string };
  }; // Optional pagination links
}

const DocLayout: React.FC<LayoutProps> = ({
  title,
  subTitle,
  subText,
  tocItems,
  children,
  pagination,
}) => {
  
  return (
    <div className="" id="content-container">
      <div className="flex flex-row gap-12 box-border w-full">
        {/* Main Content Area */}
        <div
          className="relative grow box-border flex-col w-full mx-auto px-1 lg:pl-[23.7rem] lg:-ml-12 xl:w-[calc(100%-28rem)]"
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

        {/* Sidebar */}
        <DocSide tocItems={tocItems} />
      </div>
    </div>
  );
};

export default DocLayout;
