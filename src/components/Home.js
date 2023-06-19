import React from "react";
import Countries from "./Countries";

export default function Home() {
  return (
    <div className="Home">
      <div className="navbar">
        <h1>Where in the world?</h1>
      </div>
      <Countries />
    </div>
  );
}
