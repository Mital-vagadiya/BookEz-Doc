import useThemeProvider from "./useThemeProvider";

import { createContext, ReactNode } from "react";

interface ThemeContextProps {
  theme: "dark"  | "light";
  toggleTheme: (theme: any) => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { theme, toggleTheme } = useThemeProvider();
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
