// src/Blog.js
import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Blog = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="header-top">
          <h1>Project Blog</h1>
        </div>
      </header>
      <div className="blog-content">
        <h2>Pizza Ordering React App - Project Summary</h2>
        <p>
          This project demonstrates a mini pizza ordering web app built using
          React. It involves core components such as a header, menu list, and
          footer. The design is minimal and responsive, focusing on data
          rendering, conditional display, and clean layout.
        </p>
        <h3>What was done:</h3>
        <ul>
          <li>
            📦 Set up React app structure with React Router for multi-page
            navigation.
          </li>
          <li>
            🍕 Designed and populated a pizza menu using a sample{" "}
            <code>pizzaData</code> array.
          </li>
          <li>
            ✅ Displayed available pizzas dynamically with name, ingredients,
            price, and image.
          </li>
          <li>
            🚫 Styled <code>sold-out</code> pizzas with a grayscale image and
            disabled price.
          </li>
          <li>
            🕓 Footer logic shows whether the shop is open based on the current
            time.
          </li>
          <li>
            🧭 Added navigation to a Blog page using React Router (
            <code>/blog</code> route).
          </li>
          <li>
            🎨 Customized styles in <code>App.css</code> using Google Fonts and
            Flex/Grid layouts.
          </li>
          <li>
            📱 Ensured the layout is mobile-friendly with clean spacing and
            alignment.
          </li>
        </ul>
        <p>
          Overall, this mini project shows how to structure components, handle
          state-free rendering, and apply elegant styling using pure CSS in a
          React project.
        </p>
      </div>
    </div>
  );
};

export default Blog;
