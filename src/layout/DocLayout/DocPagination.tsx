import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

interface PaginationProps {
  prev?: { href: string; label: string }; // Optional Previous link
  next?: { href: string; label: string }; // Optional Next link
}

const DocPagination: React.FC<PaginationProps> = ({ prev, next }) => {
  return (
    <div
      id="pagination"
      className="mb-12 px-0.5 flex items-center text-sm font-semibold text-gray-700"
    >
      {prev && (
        <a className="flex items-center space-x-3 group" href={prev.href}>
          <ChevronLeft height="17px" width="17px" />
          <span className="group-hover:text-gray-900">{prev.label}</span>
        </a>
      )}
      {next && (
        <a
          className="flex items-center ml-auto space-x-3 group"
          href={next.href}
        >
          <span className="group-hover:text-gray-900">{next.label}</span>
          <ChevronRight />
        </a>
      )}
    </div>
  );
};

export default DocPagination;
