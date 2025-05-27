// import React from "react";
// import ThemeProvider from "./contexts/themeContext";
// import Header from "./components/Header";

// function App() {
//   return (
//     //3.wrap your component with ThemeProvider

//     <ThemeProvider>
//       <Header />
//       <main style={{ padding: "20px", textAlign: "center" }}>
//         <p>This is the main content of the app</p>
//       </main>
//     </ThemeProvider>
//   );
// }
// export default App;

// =====================
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ThemeProvider from "./contexts/themeContext";
import Header from "./components/Header";
import Blog from "./components/Blog";
import "./index.css";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="nav-bar">
          <Link to="/">
            <button className="nav-button">Home</button>
          </Link>
          <Link to="/blog">
            <button className="nav-button">Blog</button>
          </Link>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <main className="main-content">
                  <h2>Welcome to the Theme Toggle App</h2>
                  <p>
                    Click the button above to switch between Light and Dark
                    mode.
                  </p>
                </main>
              </>
            }
          />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
