import { useLocation, useNavigate } from "react-router-dom";
import useSidebar from "./useSidebar";
import useHeader from "../Header/useHeader";

interface AppSidebarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Sidebar({ isMobileMenuOpen, setIsMobileMenuOpen }: AppSidebarProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const { MenuData } = useHeader();
  const {
    menuSections,
    toggleExpand,
    expandedItems,
    currentPath,
    closeMobileMenu,
  } = useSidebar({ setIsMobileMenuOpen });

  return (
    <>
      {/* Desktop sidebar */}
      <div
        className="z-10 hidden lg:block fixed bottom-0 right-auto w-[18rem] top-32"
        id="sidebar"
      >
        <div
          className="absolute inset-0 z-10 stable-scrollbar-gutter overflow-auto pr-8 pt-4 pb-10"
          id="sidebar-content"
        >
          <div className="relative lg:text-sm lg:leading-6">
            <div id="navigation-items">
              {menuSections?.map((section, index) => (
                <div
                  key={section.title}
                  className={index > 0 ? "mt-12 lg:mt-8" : ""}
                >
                  <h5 className="pl-4 lg:mb-2.5 font-semibold text-gray-900">
                    {section.title}
                  </h5>
                  <ul>
                    {section.items.map((item) => (
                      <li
                        key={item.id}
                        className={`relative scroll-m-4 first:scroll-m-20 rounded-sm my-1 cursor-pointer ${
                          item.href == location.pathname
                            ? "bg-primary/10 text-primary font-semibold"
                            : "hover:bg-primary/10 hover:text-primary hover:font-semibold"
                        }`}
                        onClick={() =>
                          item.children
                            ? toggleExpand(item.id)
                            : navigate(item.href)
                        }
                      >
                        <div className="flex-1 flex items-center gap-3 py-1 pl-7 ">
                          <div>{item.name}</div>
                          {item.children && (
                            <svg
                              className={`w-4 h-4 transition-transform ${
                                expandedItems[item.id] ? "rotate-90" : ""
                              }`}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6 8a1 1 0 011.707-.707l3 3a1 1 0 010 1.414l-3 3A1 1 0 016 14V8z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                        {item.children && expandedItems[item.id] && (
                          <div
                            className={`group mt-2 pl-4 lg:mt-0 py-1 flex flex-col items-start cursor-pointer focus:outline-primary gap-x-3 rounded-xl ${
                              currentPath === item.href
                                ? "bg-primary/10 text-primary font-semibold"
                                : ""
                            }`}
                          >
                            <ul className=" mt-2">
                              {item.children.map((child) => (
                                <li
                                  key={child.id}
                                  className="py-1.5 gap-2 flex items-center"
                                >
                                  <span
                                    className={`px-1 py-0.5 rounded-md text-[0.55rem] leading-tight font-bold hover:bg-gray-600/5 text-gray-700 hover:text-gray-900 ${
                                      child.method === "GET"
                                        ? "bg-green-400/20 text-green-700 dark:text-green-400"
                                        : "bg-blue-400/20 text-blue-700 dark:text-blue-400"
                                    }`}
                                  >
                                    {child.method}
                                  </span>
                                  <a
                                    href={child.href}
                                    className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                                  >
                                    {child.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {/* {item?.children?.map((child) => (
                            <>
                              <li className="pl-4 py-1 gap-2 flex items-center">
                                <span
                                  className={`px-1 py-0.5 rounded-md text-[0.55rem] leading-tight font-bold ${
                                    child.method === "GET"
                                      ? "bg-green-400/20 text-green-700"
                                      : "bg-blue-400/20 text-blue-700"
                                  }`}
                                >
                                  {child.method}
                                  <div className="flex-1 flex items-center space-x-2.5"></div>
                                </span>
                                <div>{child.name}</div>
                              </li>
                            </>
                          ))} */}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="z-40 fixed inset-0 overflow-y-auto lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            aria-hidden="true"
            onClick={closeMobileMenu}
          ></div>
          <div
            className={`relative bg-background w-[19rem] min-h-full py-7 pl-6 pr-8 transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <button
              type="button"
              className="z-10 absolute bg-background rounded-full top-5 right-5 w-8 h-8 flex items-center justify-center fill-gray-500 hover:fill-gray-600"
              onClick={closeMobileMenu}
            >
              <span className="sr-only">Close navigation</span>
              <svg
                className="w-3.5 overflow-visible"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M345 137c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-119 119L73 103c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l119 119L39 375c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l119-119L311 409c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-119-119L345 137z"></path>
              </svg>
            </button>
            <div className="relative lg:text-sm lg:leading-6">
              <div id="navigation-items">
                <ul className="mb-12">
                  {MenuData.map((item) => (
                    <li key={item.name}>
                      <a
                        className={`pl-4 group flex items-center lg:text-sm lg:leading-6 mb-5 sm:mb-4`}
                        href={item.href}
                      >
                        <div
                          className={`mr-4 rounded-md p-1 group-hover:bg-primary`}
                        >
                          <svg className="h-4 w-4 secondary-opacity group-hover:fill-primary-dark group-hover:bg-white bg-white"></svg>
                        </div>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>

                {menuSections.map((section, index) => (
                  <div
                    key={section.title}
                    className={`pl-4 ${index > 0 ? "mt-12 lg:mt-8" : ""}`}
                  >
                    <h5 className="mb-3.5 lg:mb-2.5 font-semibold text-gray-900">
                      {section.title}
                    </h5>
                    <ul>
                      {section.items.map((item) => (
                        <li
                          key={item.id}
                          className="relative scroll-m-4 first:scroll-m-20"
                        >
                          <a
                            className={`group mt-2 lg:mt-0 pl-4 flex items-center pr-3 py-1.5 cursor-pointer focus:outline-primary gap-x-3 rounded-xl ${
                              // item.active
                              //   ? "bg-primary/10 text-primary font-semibold"
                              "hover:bg-gray-600/5 text-gray-700 hover:text-gray-900 "
                            }`}
                            href={item.href}
                          >
                            <div className="flex-1 flex items-center space-x-2.5">
                              <div>{item.name}</div>
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
