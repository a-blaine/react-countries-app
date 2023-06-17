import React from "react";

export default function Filter({ onSelect }) {
  function handleFilter(event) {
    const regionName = event.target.value;
    onSelect(regionName);
  }

  return (
    <div className="Filter">
      <div>
        <select onChange={handleFilter}>
          <option value="">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
}
