import { useState } from "react";
import { Theme } from "../../Types/globalTypes";

const useThemeProvider = () => {
  const [theme, setTheme] = useState<Theme>((localStorage.getItem("theme") as Theme) || "light");

  const toggleTheme = (theme: Theme) => {
    setTheme(theme);
  };

  return { theme, toggleTheme };
};

export default useThemeProvider;
