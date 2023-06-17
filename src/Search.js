import React, { useState } from "react";
import CountryCard from "./CountryCard";
import Countries from "./components/Countries";
import Country from "./pages/Country";
import axios from "axios";

export default function Search() {
  const [country, setCountry] = useState(null);
  const [results, setResults] = useState({});

  //API documentation available at https://restcountries.com/
  function updateCountryName(event) {
    setCountry(event.target.value);
  }

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

  function getCountry(event) {
    event.preventDefault();
    let apiUrl = `https://restcountries.com/v3.1/name/${country}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="Search">
      <form onSubmit={getCountry}>
        <input
          type="search"
          placeholder="Search for a country..."
          autoComplete="off"
          autoFocus="off"
          onChange={updateCountryName}
        />
      </form>
      <Countries />
      <CountryCard country={results} />
      <Country data={results} />
    </div>
  );
}
