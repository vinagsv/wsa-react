import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { BookSearch } from "./components/BookSearch";
import { Booklist } from "./components/BookList";
import Favorites from "./components/Favorites";
import Blog from "./components/Blog";

const Home = () => (
  <>
    <header>
      <h1>Book Finder App</h1>
      <nav>
        <Link to="/blog">
          <button>Blog</button>
        </Link>
      </nav>
    </header>
    <div className="container">
      <BookSearch />
      <Booklist />
      <Favorites />
    </div>
  </>
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
};

export default App;
