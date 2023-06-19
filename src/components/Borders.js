import React from "react";

export default function Borders({ borders, code }) {
  if (typeof borders === "undefined") {
    return null;
  } else {
    return (
      <div className="Borders">
        <h5>
          Border Countries:
          <div>{code}</div>
          <br />
          {borders.map((border, index) => {
            return (
              <span className="border-btn" key={index}>
                {border}
              </span>
            );
          })}
        </h5>
      </div>
    );
  }
}
