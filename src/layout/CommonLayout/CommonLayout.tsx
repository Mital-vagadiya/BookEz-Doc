import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { SidebarProvider } from "../Sidebar/useSidebar";

const CommonLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen">
      <SidebarProvider setIsMobileMenuOpen={setIsMobileMenuOpen}>
        <Header
          onMenuButtonClick={toggleMobileMenu}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
        <div className="w-full max-w-8xl px-4 mx-auto lg:px-8">
          <Sidebar
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
          <div className="lg:flex lg:flex-row w-full lg:mt-35 lg:pt-2 pt-35 ">
            <Outlet />
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default CommonLayout;