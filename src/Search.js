import React, { useState } from "react";
import CountryCard from "./CountryCard";
import Countries from "./components/Countries";
import Country from "./pages/Country";
import axios from "axios";

export default function Search() {
  const [countryName, setCountryName] = useState(" ");
  const [results, setResults] = useState({});

  //API documentation available at https://restcountries.com/

  function handleResponse(response) {
    console.log(response.data);
    setResults({
      name: response.data[0].name.common,
      nativeName: response.data[0].name.nativeName,
      borderCountries: response.data[0].borders,
      capital: response.data[0].capital[0],
      currencies: response.data[0].currencies,
      domain: response.data[0].tld[0],
      languages: response.data[0].languages,
      population: response.data[0].population,
      region: response.data[0].region,
      subRegion: response.data[0].subregion,
      flagUrl: response.data[0].flags.png,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://restcountries.com/v3.1/name/${countryName}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search for a country..."
          autoComplete="off"
          autoFocus="off"
          onChange={(event) => setCountryName(event.target.value)}
        />
      </form>
      <select>
        <option value="">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
      <Countries />
      <CountryCard country={results} />
      <Country data={results} />
    </div>
  );
}
