import React, { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";

export default function Header() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`header ${isDarkMode ? "dark" : ""}`}>
      <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
      <button className="toggle-button" onClick={toggleTheme}>
        Switch to {isDarkMode ? "Light" : "Dark"} Mode
      </button>
    </header>
  );
}
