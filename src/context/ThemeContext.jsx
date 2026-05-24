import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  // Save Theme
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle Theme
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <div
        className={`transition-all duration-500 ${
          theme === "dark"
            ? "bg-[#050816] text-white"
            : "bg-gray-100 text-black"
        }`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;