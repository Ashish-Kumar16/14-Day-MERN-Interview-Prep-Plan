// 2. Implement a ThemeContext to toggle dark/light themes across components.

import React, { createContext, useState, useContext } from "react";

// Create the context
const ThemeContext = createContext();

// Provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook for consuming the context
export function useTheme() {
  return useContext(ThemeContext);
}
