import React from "react";
import Home from "./pages/Home";
import Country from "./pages/Country";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/countrycard">Country</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countrycard" element={<Country />} />
      </Routes>
    </>
  );
}

export default App;
