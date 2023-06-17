import React from "react";
import Home from "./pages/Home";
import Countries from "./components/Countries";
import Search from "./components/Search";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/countries" element={<Countries />} />
      </Routes>
      <Countries />
    </>
  );
}

export default App;
