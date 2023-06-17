import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const allCountriesUrl = "https://restcountries.com/v3.1/all";

  function handleResponse(response) {
    const countriesData = response.data;
    setCountries(countriesData);
  }

  function loadCountries() {
    axios.get(allCountriesUrl).then(handleResponse);
  }

  useEffect(() => {
    loadCountries();
  });

  return (
    <div className="Countries">
      <div className="countries-wrapper">
        {countries.map((country) => {
          return (
            <div className="card">
              <img src={country.flags.png} alt={country.name.common} />
              <div className="card-contents">
                <h3>{country.name.common}</h3>
                <ul>
                  <li>
                    Population:{" "}
                    <span className="data-font-weight">
                      {country.population}
                    </span>
                  </li>
                  <li>
                    Region:{" "}
                    <span className="data-font-weight">{country.region}</span>
                  </li>
                  <li>
                    Capital:{" "}
                    <span className="data-font-weight">{country.capital}</span>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
