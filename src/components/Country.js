import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Borders from "./Borders";
import axios from "axios";

export default function Country() {
  const [country, setCountry] = useState(null);
  const [loaded, setLoaded] = useState(false);
  let { countryName } = useParams();

  function handleCountryResponse(response) {
    console.log(response.data);
    let data = {
      name: response.data[0].name.common,
      nativeName: Object.values(response.data[0].name.nativeName),
      borderCountries: response.data[0].borders,
      capital: response.data[0].capital[0],
      code: response.data[0].cca3,
      currencies: Object.values(response.data[0].currencies),
      domain: response.data[0].tld,
      languages: Object.values(response.data[0].languages),
      population: response.data[0].population,
      region: response.data[0].region,
      subRegion: response.data[0].subregion,
      flagUrl: response.data[0].flags.png,
    };
    setCountry(data);
    setLoaded(true);
  }

  function getCountryByName() {
    let apiUrl = `https://restcountries.com/v3.1/name/${countryName}`;
    axios.get(apiUrl).then(handleCountryResponse);
  }

  useEffect(() => {
    getCountryByName();
  }, [countryName]);

  if (loaded) {
    return (
      <div className="Country">
        <button>
          <Link to={"/"}>Back</Link>
        </button>
        <div className="country-container">
          <img src={country.flagUrl} alt={country.name.common} />
          <h2>{country.name.common}</h2>
          <ul>
            <li>
              Native Name:{" "}
              <span className="data-font-weight">
                {country.nativeName[0].common}
              </span>
            </li>
            <li>
              Population:{" "}
              <span className="data-font-weight">{country.population}</span>
            </li>
            <li>
              Region: <span className="data-font-weight">{country.region}</span>
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
              <span className="data-font-weight">
                {country.domain.map((domain, index) => {
                  return (
                    <span key={index} className="map-spacing">
                      {domain}
                    </span>
                  );
                })}
              </span>
            </li>
            <li>
              Currencies:
              <span className="data-font-weight">
                {country.currencies.map((currency, index) => {
                  return (
                    <span key={index} className="map-spacing">
                      {currency.name}
                    </span>
                  );
                })}
              </span>{" "}
            </li>
            <li>
              Languages:
              <span className="data-font-weight">
                {country.languages.map((language, index) => {
                  return (
                    <span key={index} className="map-spacing">
                      {language}
                    </span>
                  );
                })}{" "}
              </span>{" "}
            </li>
            <li>
              Border Countries:{" "}
              <span className="data-font-weight">
                <Borders
                  borders={country.borderCountries}
                  code={country.code}
                />
                {country.borderCountries.map((border, index) => {
                  return <span key={index}>{border} </span>;
                })}{" "}
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return <div>LOADING..</div>;
  }
}
