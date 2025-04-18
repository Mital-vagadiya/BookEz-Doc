import { useLocation, useNavigate, NavLink } from "react-router-dom";
import useHeader from "../Header/useHeader";
import { useSidebar } from "./useSidebar";

interface AppSidebarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Sidebar({ isMobileMenuOpen }: AppSidebarProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const { MenuData } = useHeader();
  const {
    menuSections,
    toggleExpand,
    expandedItems,
    closeMobileMenu,
  } = useSidebar();

  return (
    <>
      {/* Desktop sidebar */}
      <div
        className="z-20 hidden lg:block fixed bottom-0 right-auto w-[18rem] top-32  rounded-r-xl bg-white/80 backdrop-blur-md"
        id="sidebar"
      >
        <div
          className="absolute inset-0 z-10 stable-scrollbar-gutter overflow-auto pr-6 pt-5 pb-10 rounded-r-xl"
          id="sidebar-content"
        >
          <div className="relative lg:text-sm lg:leading-6">
            <div id="navigation-items">
              {menuSections?.map((section, index) => (
                <div
                  key={section.title}
                  className={index > 0 ? "mt-10 lg:mt-8" : ""}
                >
                  <h5 className="pl-6 lg:mb-3 font-semibold text-gray-900 flex items-center">
                    <span className="inline-block w-1 h-4 bg-primary mr-2 rounded-full"></span>
                    {section.title}
                  </h5>
                  <ul className="mt-2 space-y-1">
                    {section.items.map((item) => (
                      <li
                        key={item.id}
                        className="relative scroll-m-4 first:scroll-m-20 rounded-md mx-2"
                      >
                        <div
                          className={`flex items-center gap-3 py-2 px-4 cursor-pointer transition-all duration-200 rounded-lg ${item.children ? "" : "hidden"}`}
                          onClick={() => item.children && toggleExpand(item.id)}
                        >
                          <div className="flex-1">{item.name}</div>
                          {item.children && (
                            <svg
                              className={`w-4 h-4 transition-transform duration-300 ${expandedItems[item.id] ? "rotate-90" : ""}`}
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
                        {!item.children && (
                          <NavLink
                            to={item.href}
                            className={({ isActive }) =>
                              `flex items-center gap-3 py-2 px-4 cursor-pointer transition-all duration-200 rounded-lg ${isActive ? "bg-primary/10 text-primary font-medium shadow-sm" : "hover:bg-gray-100 text-gray-700 hover:text-primary"}`
                            }
                          >
                            <div className="flex-1">{item.name}</div>
                          </NavLink>
                        )}

                        {item.children && expandedItems[item.id] && (
                          <div className="mt-2 ml-4 pl-2 border-l-2 border-primary/20 animate-fadeIn">
                            <ul className="space-y-1">
                              {item.children.map((child) => (
                                <li key={child.id} className="py-1">
                                  <NavLink
                                    to={child.href}
                                    className={({ isActive }) =>
                                      `group flex items-center rounded-md py-2 px-3 transition-all duration-200 ${
                                        isActive
                                          ? "bg-primary/5 text-primary font-medium"
                                          : "hover:bg-gray-50 text-gray-700 hover:text-primary"
                                      }`
                                    }
                                  >
                                    <span
                                      className={`mr-2 px-2 py-1 rounded-md text-xs font-medium tracking-wide transition-all duration-200 ${
                                        child.method === "GET"
                                          ? "bg-emerald-100 text-emerald-700 group-hover:bg-emerald-200"
                                          : child.method === "POST"
                                          ? "bg-blue-100 text-blue-700 group-hover:bg-blue-200"
                                          : child.method === "PUT"
                                          ? "bg-amber-100 text-amber-700 group-hover:bg-amber-200"
                                          : child.method === "DELETE"
                                          ? "bg-red-100 text-red-700 group-hover:bg-red-200"
                                          : "bg-gray-100 text-gray-700 group-hover:bg-gray-200"
                                      }`}
                                    >
                                      {child.method}
                                    </span>
                                    <span className="flex-1 truncate">{child.name}</span>
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
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
            className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
            aria-hidden="true"
            onClick={closeMobileMenu}
          ></div>
          <div
            className={`relative bg-white w-[85%] max-w-[20rem] min-h-full shadow-xl py-6 transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <button
              type="button"
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              onClick={closeMobileMenu}
            >
              <span className="sr-only">Close navigation</span>
              <svg
                className="w-5 h-5 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="p-4 mt-4">
              <div className="mb-8">
                <ul className="flex flex-wrap gap-2">
                  {MenuData.map((item) => (
                    <li key={item.name}>
                      <NavLink
                        to={item.href}
                        className={({ isActive }) =>
                          `flex items-center px-3 py-2 rounded-lg transition-colors ${
                            isActive
                              ? "bg-primary/10 text-primary font-medium"
                              : "bg-gray-50 text-gray-700 hover:bg-primary/10 hover:text-primary"
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>

              {menuSections.map((section, index) => (
                <div key={section.title} className={`${index > 0 ? "mt-8" : ""}`}>
                  <h5 className="mb-3 font-semibold text-gray-900 flex items-center">
                    <span className="inline-block w-1 h-4 bg-primary mr-2 rounded-full"></span>
                    {section.title}
                  </h5>
                  <ul className="space-y-1.5 ml-1">
                    {section.items.map((item) => (
                      <li key={item.id} className="relative">
                        <div
                          className={`flex items-center gap-3 py-2 px-3 rounded-lg cursor-pointer transition-all duration-200 ${
                            item.href === location.pathname
                              ? "bg-primary/10 text-primary font-medium"
                              : "hover:bg-gray-100 text-gray-700 hover:text-primary"
                          }`}
                          onClick={() =>
                            item.children
                              ? toggleExpand(item.id)
                              : navigate(item.href)
                          }
                        >
                          <div className="flex-1">{item.name}</div>
                          {item.children && (
                            <svg
                              className={`w-4 h-4 transition-transform duration-300 ${
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
                          <div className="mt-1 ml-4 pl-2 border-l-2 border-primary/20">
                            <ul className="space-y-1">
                              {item.children.map((child) => (
                                <li key={child.id} className="py-1">
                                  <NavLink
                                    to={child.href}
                                    className={({ isActive }) =>
                                      `group flex items-center rounded-md py-2 px-3 transition-all duration-200 ${
                                        isActive
                                          ? "bg-primary/5 text-primary font-medium"
                                          : "hover:bg-gray-50 text-gray-700 hover:text-primary"
                                      }`
                                    }
                                  >
                                    <span
                                      className={`mr-2 px-2 py-1 rounded-md text-xs font-medium tracking-wide transition-all duration-200 ${
                                        child.method === "GET"
                                          ? "bg-emerald-100 text-emerald-700 group-hover:bg-emerald-200"
                                          : child.method === "POST"
                                          ? "bg-blue-100 text-blue-700 group-hover:bg-blue-200"
                                          : child.method === "PUT"
                                          ? "bg-amber-100 text-amber-700 group-hover:bg-amber-200"
                                          : child.method === "DELETE"
                                          ? "bg-red-100 text-red-700 group-hover:bg-red-200"
                                          : "bg-gray-100 text-gray-700 group-hover:bg-gray-200"
                                      }`}
                                    >
                                      {child.method}
                                    </span>
                                    <span className="flex-1 truncate">{child.name}</span>
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}

export default Sidebar;
