import { createContext, useContext, useState } from "react";

// Create the context
export const ThemeContext = createContext();

// Create the context provider component
export const ThemeContextProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => setThemeMode("light");
  const darkTheme = () => setThemeMode("dark");

  // Define the value that will be provided to consumers
  const value = { themeMode, lightTheme, darkTheme };

  // Return the provider component with the value
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
