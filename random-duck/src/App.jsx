import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DuckGenerator from "./DuckGenerator";
import Blog from "./Blog";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="nav-bar">
          <Link to="/blog" className="nav-button">
            Blog
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<DuckGenerator />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
