import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Search from "./Search";
import Filter from "./Filter";

export default function Countries() {
  const [countries, setCountries] = useState([]);

  function handleResponse(response) {
    const allCountriesData = response.data;
    setCountries(allCountriesData);
  }

  function loadCountries() {
    const allCountriesApiUrl = "https://restcountries.com/v3.1/all";
    axios.get(allCountriesApiUrl).then(handleResponse);
  }

  useEffect(() => {
    loadCountries();
  }, []);

  function displayNewCountry(response) {
    const newCountry = response.data;
    setCountries(newCountry);
  }

  function getNewCountry(countryName) {
    let apiUrl = `https://restcountries.com/v3.1/name/${countryName}`;
    axios.get(apiUrl).then(displayNewCountry);
  }

  function displayNewRegion(response) {
    const newRegion = response.data;
    setCountries(newRegion);
  }

  function getRegion(regionName) {
    let regionApiUrl = `https://restcountries.com/v3.1/region/${regionName}`;
    axios.get(regionApiUrl).then(displayNewRegion);
  }

  return (
    <div className="Countries">
      <Search onSearch={getNewCountry} />
      <Filter onSelect={getRegion} />
      <div className="countries-wrapper">
        {countries.map((country, index) => {
          return (
            <Link to={`/country/${country.name.common}`}>
              <div className="card" key={index}>
                <img src={country.flags.png} alt={country.name.common} />
                <div className="card-contents">
                  <h3>{country.name.common}</h3>
                  <h5>
                    Population:{" "}
                    <span>
                      {Intl.NumberFormat("en-US").format(country.population)}
                    </span>
                  </h5>
                  <h5>
                    Region: <span>{country.region}</span>
                  </h5>
                  <h5>
                    Capital: <span>{country.capital}</span>
                  </h5>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
