import React from "react";

export default function Country({ data }) {
  return (
    <div className="Country">
      <h1>{data.name.common}</h1>
      <ul>
        <li>Native Name: </li>
        <li>Population: {data.population}</li>
        <li>Region: {data.region}</li>
        <li>Sub Region: {data.subRegion}</li>
        <li>Capital: {data.capital}</li>
      </ul>
      <ul>
        <li>Top Level Domain: {data.domain}</li>
        <li>Currencies: </li>
        <li>Languages: </li>
      </ul>
      <p>Border Countries: {data.borderCountries}</p>
    </div>
  );
}
