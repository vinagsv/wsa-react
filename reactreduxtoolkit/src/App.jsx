// import React from "react";
// import "./App.css";

// import AddTodo from "./components/AddTodo";
// import { Todos } from "./components/Todos";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Welcome to Redux Class</h1>
//       <AddTodo />
//       <Todos />
//     </div>
//   );
// }

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddTodo from "./components/AddTodo";
import { Todos } from "./components/Todos";
import Blog from "./Blog";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="nav-bar">
          <Link to="/blog" className="nav-button">
            Blog
          </Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <div className="App">
                <h1 className="app-title">📝 Welcome to Redux Todo App</h1>
                <AddTodo />
                <Todos />
              </div>
            }
          />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}
