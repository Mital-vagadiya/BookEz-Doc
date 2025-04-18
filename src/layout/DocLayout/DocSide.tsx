import React, { useState } from "react";
import { MenuSVG } from "../../assets";
import { useLocation } from "react-router-dom";

const scrollbarStyles = `
  .code-block pre::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background: transparent;
  }

  .code-block pre::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 4px;
  }

  .code-block:hover pre::-webkit-scrollbar-thumb {
    background: #555;
  }

  .code-block pre {
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
  }

  .code-block:hover pre {
    scrollbar-color: #555 #333;
  }
`;

interface TOCItem {
  id: string; // The ID of the section
  title: string; // The title of the section
  children?: TOCItem[];
}

interface DocSideProps {
  tocItems?: TOCItem[]; // Array of table of contents items
  requestBlock?: React.ReactNode;
  responseBlock?: React.ReactNode;
}

const DocSide: React.FC<DocSideProps> = ({
  tocItems,
  requestBlock,
  responseBlock,
}) => {
  const [activeId, setActiveId] = useState<string>(tocItems?.[0]?.id || ""); // Default to the first item
  const loaction = useLocation();

  //   useEffect(() => {
  //     const handleIntersection = (entries: IntersectionObserverEntry[]) => {
  //       console.log("called");
  //       const visibleEntries = entries.filter((entry) => entry.isIntersecting);

  //       if (visibleEntries.length > 0) {
  //         // Sort visible entries by their vertical position in the viewport
  //         visibleEntries.sort(
  //           (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
  //         );

  //         // Highlight the first visible section
  //         setActiveId(visibleEntries[0].target.id);
  //       }
  //     };

  //     // const observer = new IntersectionObserver(handleIntersection, {
  //     //   root: null, // Use the viewport as the root
  //     //   rootMargin: "-128px 0px 0px 0px", // Adjust for the header height (128px)
  //     //   threshold: 0.1, // Trigger when 10% of the section is visible
  //     // });

  //     // tocItems.forEach((item) => {
  //     //   const element = document.getElementById(item.id);
  //     //   if (element) {
  //     //     console.log(`Observing element with id: ${item.id}`);
  //     //     observer.observe(element);
  //     //   } else {
  //     //     console.warn(`Element with id: ${item.id} not found`);
  //     //   }
  //     // });

  //     // return () => {
  //     //   tocItems.forEach((item) => {
  //     //     const element = document.getElementById(item.id);
  //     //     if (element) {
  //     //       observer.unobserve(element);
  //     //     }
  //     //   });
  //     // };
  //   }, [tocItems]);

  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    setActiveId(id);
    event.preventDefault(); // Prevent the default anchor behavior
    const element = document.getElementById(id);
    if (element) {
      const offset = 128; // Adjust this value to account for any fixed headers
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const renderTOCItems = (items: TOCItem[]) => {
    return (
      <ul>
        {items.map((item) => (
          <li key={item.id} className="relative">
            <a
              href={`#${item.id}`} // Keep the href for accessibility
              onClick={(event) => handleScroll(event, item.id)} // Handle smooth scrolling
              className={`py-1 block hover:text-gray-900 ${
                activeId === item.id ? "text-primary font-bold" : ""
              }`}
            >
              {item.title}
            </a>
            {item.children && (
              <ul className="pl-4">
                {renderTOCItems(item.children)} {/* Render subitems */}
              </ul>
            )}
          </li>
        ))}
      </ul>
    );
  };

  const renderApiItems = () => {
    return (
      <div
        className="flex flex-col sticky top-[9.5rem] gap-2 h-[calc(100vh-9.5rem)] overflow-hidden"
        id="content-side-layout"
      >
        <div className="flex flex-col space-y-4 w-md max-w-md mx-auto">
          <style>{scrollbarStyles}</style>

          {/* Request Panel */}
          {requestBlock}

          {/* Response Panel */}
          {responseBlock}
        </div>
      </div>
    );
  };

  if (loaction.pathname?.split("/")?.includes("api-reference"))
    return renderApiItems();

  return (
    <div
      className="hidden xl:flex self-start sticky xl:flex-col h-[calc(100vh-9.5rem)] top-[9.5rem]"
      id="content-side-layout"
    >
      <div
        className="z-10 hidden xl:flex pl-10 box-border w-[19rem] max-h-full"
        id="table-of-contents"
      >
        {tocItems?.length ? (
          <div
            id="table-of-contents-content"
            className="text-gray-600 text-sm leading-6 w-[16.5rem] overflow-y-auto space-y-2 pb-4 -mt-10 pt-10"
          >
            <div className="text-gray-700 font-medium flex items-center space-x-2">
              <MenuSVG />
              <span>On this page</span>
            </div>
            {renderTOCItems(tocItems)}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default DocSide;
