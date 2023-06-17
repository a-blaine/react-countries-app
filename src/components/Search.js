import React, { useState } from "react";

export default function Search({ onSearch }) {
  const [countryName, setCountryName] = useState(" ");

  //API documentation available at https://restcountries.com/

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(countryName);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search for a country..."
          autoComplete="off"
          autoFocus="off"
          value={countryName}
          onChange={(event) => setCountryName(event.target.value)}
        />
      </form>
    </div>
  );
}
