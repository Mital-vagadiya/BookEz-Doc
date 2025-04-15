import React from "react";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="flex gap-12 justify-between pt-10 border-t border-gray-100 sm:flex pb-28"
    >
      <div className="flex items-center justify-between">
        <div className="sm:flex">
          <a
            href="https://mintlify.com/preview-request?utm_campaign=poweredBy&amp;utm_medium=docs&amp;utm_source=docs.layerfi.com"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-gray-500 hover:text-gray-700 text-nowrap"
          >
            Powered by Mintlify
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
