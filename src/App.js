import React from "react";
import Home from "./pages/Home";
import SearchCountries from "./SearchCountries";
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
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchcountries" element={<SearchCountries />} />
      </Routes>
    </>
  );
}

export default App;
