import { createContext, useContext, useState,useEffect } from "react";

// Create the context
export const ThemeContext = createContext();

// Create the context provider component
export const ThemeContextProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => setThemeMode("light");
  const darkTheme = () => setThemeMode("dark");


  //we can write here also
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");//remove thes
    document.querySelector('html').classList.add(themeMode); //add classes
  }, [themeMode]);

  // Define the value that will be provided to consumers
  const value = { themeMode, lightTheme, darkTheme };

  // Return the provider component with the value
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
