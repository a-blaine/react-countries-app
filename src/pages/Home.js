import React from "react";
import SearchCountries from "../SearchCountries";

export default function Home() {
  return (
    <div className="Home">
      <div className="navbar">
        <h1>Where in the world?</h1>
        <select>
          <option value="">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
      <SearchCountries />
    </div>
  );
}
