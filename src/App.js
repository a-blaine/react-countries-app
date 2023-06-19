import React from "react";
import Home from "./components/Home";
import Country from "./components/Country";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="navbar">
        <h1>Where in the world?</h1>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:countryName" element={<Country />} />
      </Routes>
    </Router>
  );
}

export default App;
