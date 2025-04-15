import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useThemeProvider from "../../providers/ThemeProvider/useThemeProvider";
import { Theme } from "../../Types/globalTypes";

const useCommonLayout = () => {
  const token: string | null = localStorage.getItem("token");
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const { theme, toggleTheme } = useThemeProvider();

  const handleChangeSidebarState = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleChangeTheme = (theme: Theme) => {
    toggleTheme(theme);
  };

  // Detect mobile screen and auto-minimize sidebar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 840) {
        setIsSidebarOpen(false); // Auto-close sidebar on small screens
      } else {
        setIsSidebarOpen(true); // Reopen sidebar on larger screens
      }
    };

    // Run on mount & listen to resize events
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { theme, isSidebarOpen, handleChangeSidebarState };
};

export default useCommonLayout;
