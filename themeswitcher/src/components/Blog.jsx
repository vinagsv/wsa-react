import React, { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";

export default function Blog() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`blog-wrapper ${isDarkMode ? "dark" : ""}`}>
      <div className="blog-theme-toggle">
        <button onClick={toggleTheme} className="toggle-button">
          Switch to {isDarkMode ? "Light" : "Dark"} Mode
        </button>
      </div>

      <div className="blog-container">
        <h2>React Dark Mode Toggle – Project Overview</h2>

        <section>
          <h3>Project Objective</h3>
          <p>
            This project demonstrates how to implement theme toggling in React
            using Context API.
          </p>
        </section>

        <section>
          <h3>File Structure & Components</h3>
          <ul>
            <li>
              <strong>App.jsx</strong> – Wraps the app and sets up routes.
            </li>
            <li>
              <strong>Header.jsx</strong> – Displays title and theme toggle.
            </li>
            <li>
              <strong>themeContext.jsx</strong> – Context API for theme
              management.
            </li>
            <li>
              <strong>Blog.jsx</strong> – Explains project implementation.
            </li>
          </ul>
        </section>

        <section>
          <h3>How It Works</h3>
          <h4>Theme Context</h4>
          <p>
            Provides state and toggle function for switching themes globally.
          </p>

          <h4>App Layout</h4>
          <p>
            Uses React Router for navigation and wraps content with the
            ThemeProvider.
          </p>

          <h4>Header Usage</h4>
          <p>
            The Header dynamically updates styles and content based on the
            selected theme.
          </p>
        </section>

        <section>
          <h3>Takeaways</h3>
          <ul>
            <li>Using Context API for global state</li>
            <li>Theme toggling in React</li>
            <li>Simple client-side routing with React Router</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
