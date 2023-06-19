import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Borders from "./Borders";
import axios from "axios";

export default function Country() {
  const [country, setCountry] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const { countryName } = useParams();

  function handleCountryResponse(response) {
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
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={country.flagUrl} alt={country.name} />
            </div>
            <div className="col">
              <h2>{country.name}</h2>
              <h5>
                Native Name: <span>{country.nativeName[0].common}</span>
              </h5>
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
                Sub Region: <span>{country.subRegion}</span>
              </h5>
              <h5>
                Capital: <span>{country.capital}</span>
              </h5>
            </div>
            <div className="col">
              <h5>
                Top Level Domain:{" "}
                <span>
                  {country.domain.map((domain, index) => {
                    return (
                      <span key={index} className="map-spacing">
                        {domain}
                      </span>
                    );
                  })}
                </span>
              </h5>
              <h5>
                Currencies:
                <span>
                  {country.currencies.map((currency, index) => {
                    return (
                      <span key={index} className="map-spacing">
                        {currency.name}
                      </span>
                    );
                  })}
                </span>{" "}
              </h5>
              <h5>
                Languages:
                <span>
                  {country.languages.map((language, index) => {
                    return (
                      <span key={index} className="map-spacing">
                        {language}
                      </span>
                    );
                  })}
                </span>
              </h5>
            </div>
          </div>
          <Borders borders={country.borderCountries} />
        </div>
      </div>
    );
  } else {
    return <div>LOADING..</div>;
  }
}
