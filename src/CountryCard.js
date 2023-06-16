import React from "react";

export default function CountryCard({ country }) {
  console.log(country);

  return (
    <div className="CountryCard">
      <div className="card">
        <img src={country.flagUrl} alt="Country's flag" />
        <div className="card-contents">
          <h3>{country.name}</h3>
          <ul>
            <li>Population: {country.population}</li>
            <li>Region: {country.region}</li>
            <li>Capital: {country.capital}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
