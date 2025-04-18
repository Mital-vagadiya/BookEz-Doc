import { Search } from "lucide-react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import useHeader from "./useHeader";

interface HeaderProps {
  onMenuButtonClick: () => void;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({
  onMenuButtonClick,
  setIsMobileMenuOpen,
}) => {
    const [open, setOpen] = useState(false);
    const { MenuData } = useHeader();
    const location = useLocation();

    return (
      <header className={`sticky lg:fixed top-0 bg-background-light w-full z-1`}>
        <div className="absolute w-full h-28 backdrop-blur flex-none transition-colors duration-500 border-b border-gray-500/5 supports-backdrop-blur:bg-background/60">
          <div className="max-w-8xl mx-auto">
            <div className="flex items-center lg:px-12 h-16 min-w-0 mx-4 lg:mx-0">
              <div className="h-full relative flex-1 flex items-center lg:justify-start justify-between gap-x-4 min-w-0 border-b border-gray-500/5">
                <div className="relative w-64 lg:w-96">
                  <div className="flex-1 flex items-center gap-x-4">
                    <span className="sr-only">Layer</span>
                    <img
                      className="w-auto h-7 relative object-contain"
                      src="https://mintlify.s3.us-west-1.amazonaws.com/layerfinancialtechnologiesinc/logo/layer_logo.svg"
                      alt="light logo"
                    />
                    <div className="flex items-center gap-x-2"></div>
                  </div>
                </div>
                <button
                  type="button"
                  className="hidden lg:flex relative flex-1 pointer-events-auto rounded-xl w-full items-center text-sm leading-6 py-1.5 pl-3.5 pr-3 shadow-sm text-gray-400 ring-1 ring-gray-400/20 hover:ring-gray-600/25 focus:outline-primary justify-between truncate gap-2 min-w-[43px] max-w-96"
                  onClick={() => setOpen(true)}
                >
                  <div className="flex items-center gap-3 min-w-[42px]">
                    <Search />
                    <div className="truncate min-w-0">Search or ask...</div>
                  </div>
                  <span className="flex-none text-xs font-semibold">Ctrl K</span>
                </button>
                <div className="flex lg:hidden items-center gap-2">
                  <button
                    type="button"
                    className="text-gray-500 w-8 h-8 flex items-center justify-center hover:text-gray-600"
                    id="search-bar-entry-mobile"
                    onClick={() => setOpen(true)}
                  >
                    <span className="sr-only">Search...</span>
                    <Search />
                  </button>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex px-12 h-12">
              <div className="h-full flex text-sm space-x-6">
                {MenuData?.map((item) => (
                  <NavLink
                    key={item.id}
                    to={item.href}
                    className={({ isActive }) => 
                      `group relative h-full flex items-center font-medium ${(isActive || location.pathname?.split('/')?.includes(item?.id)) ? 'text-primary active' : 'text-gray-600'} hover:text-primary`
                    }
                  >
                    {item.name}
                    <div className="absolute bottom-0 h-[1.5px] w-full bg-transparent group-hover:bg-primary/30 group-[.active]:bg-primary"></div>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          {/* bradcrumb section */}
          <div className="flex items-center h-14 py-4 px-5 lg:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-600"
              onClick={onMenuButtonClick}
            >
              <span className="sr-only">Navigation</span>
              <svg
                className="h-4"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
              </svg>
            </button>

            <div className="ml-4 flex text-sm leading-6 whitespace-nowrap min-w-0 space-x-3">
              <div className="flex items-center space-x-3">
                <span>Get Started</span>
                <svg
                  width="3"
                  height="24"
                  viewBox="0 -9 3 24"
                  className="h-5 rotate-0 overflow-visible fill-gray-400"
                >
                  <path
                    d="M0 0L3 3L0 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="font-semibold text-gray-900 truncate">
                Overview
              </div>
            </div>
          </div>
        </div>

      <Dialog
        open={open}
        onClose={setOpen}
        className="relative z-50"
        onFocus={() => (document.body.style.overflow = "hidden")}
        onBlur={() => (document.body.style.overflow = "")}
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="relative w-full max-w-lg p-4 rounded-xl">
                <div className="relative flex items-center">
                  <Search className="absolute left-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    className="block w-full rounded-xl border-0 py-3 pl-10 pr-4 text-gray-900 ring-1 ring-gray-400/20 placeholder:text-gray-400 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
                    placeholder="Search or ask..."
                    autoFocus
                  />
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </header>
  );
};

export default Header;