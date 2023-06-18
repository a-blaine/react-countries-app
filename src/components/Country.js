import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function Country() {
  const [country, setCountry] = useState([]);
  const { countryName } = useParams();

  function handleCountryResponse(response) {
    const data = response.data;
    setCountry(data);
  }

  function getCountryByName() {
    let apiUrl = `https://restcountries.com/v3.1/name/${countryName}`;
    axios.get(apiUrl).then(handleCountryResponse);
  }

  useEffect(() => {
    getCountryByName();
  }, [countryName]);

  return (
    <div className="Country">
      <button>
        <Link to={"/"}>Back</Link>
      </button>
      {country.map((country, index) => {
        return (
          <div className="country-container" key={index}>
            <img src={country.flags.png} alt={country.name.common} />
            <h2>{country.name.common}</h2>
            <ul>
              <li>
                Native Name:{" "}
                <span className="data-font-weight">
                  {country.name.nativeName}
                </span>
              </li>
              <li>
                Population:{" "}
                <span className="data-font-weight">{country.population}</span>
              </li>
              <li>
                Region:{" "}
                <span className="data-font-weight">{country.region}</span>
              </li>
              <li>
                Sub Region:{" "}
                <span className="data-font-weight">{country.subRegion}</span>
              </li>
              <li>
                Capital:{" "}
                <span className="data-font-weight">{country.capital}</span>
              </li>
            </ul>
            <ul>
              <li>
                Top Level Domain:{" "}
                <span className="data-font-weight">{country.tld}</span>
              </li>
              <li>
                Currencies:
                <span className="data-font-weight"></span>{" "}
              </li>
              <li>
                Languages:<span className="data-font-weight"></span>{" "}
              </li>
            </ul>
            <p>
              Border Countries:{" "}
              <span className="data-font-weight">
                {country.borderCountries}
              </span>
            </p>
          </div>
        );
      })}
    </div>
  );
}
