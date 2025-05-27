// start with npm start

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { pizzaData } from "./data";
import Blog from "./Blog";
import "./App.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
};

const Menu = () => {
  return (
    <main className="menu">
      {pizzaData.length > 0 ? (
        <>
          <h2>Our Menu</h2>
          <p>
            Authentic Italian Cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza item={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are still working on our menu. Please come back later.</p>
      )}
    </main>
  );
};

const Pizza = ({ item }) => {
  const { name, ingredients, price, photoName, soldOut } = item;
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "Sold Out" : `$${price}`}</span>
      </div>
    </li>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We are happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
};

const Order = ({ closeHour }) => {
  return (
    <div className="order">
      <p>We're open until {closeHour}:00. Come visit us or order online!</p>
      <button className="btn">Order</button>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Link to="/blog" className="blog-link fixed-top">
        Project Blog
      </Link>

      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <Header />
              <Menu />
              <Footer />
            </div>
          }
        />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
};

export default App;
