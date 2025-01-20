import React from "react";
import WeldingCalculator from "./components/WeldingCalculator";
import Navbar from "./components/Navbar";
import Header from "./components/Headers";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = () => (
  <div>
    <h2>Welcome to the Home Page</h2>
    {/* other content */}
  </div>
);

export const App = () => {
  return (
    <Router>
      {" "}
      {/* Wrap everything with Router */}
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Navbar />
          <Routes>
            {" "}
            {/* Define routes within Routes component */}
            <Route path="/calculator" element={<WeldingCalculator />} />
            <Route path="/home" element={<Home />} />{" "}
            {/* Example additional route */}
            {/* Add more routes here as needed */}
          </Routes>
        </div>

        <style jsx>{`
          .app-container {
            display: flex;
            min-height: 100vh;
            flex-direction: column;
          }

          .main-content {
            display: flex;
            flex: 1;
          }

          @media (max-width: 768px) {
            .main-content {
              flex-direction: column;
            }
          }
        `}</style>
      </div>
    </Router>
  );
};
