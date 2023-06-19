import React from "react";

export default function Borders({ borders }) {
  if (typeof borders === "undefined") {
    return null;
  } else {
    return (
      <div className="Borders">
        <h5>
          Border Countries:
          <br />
          {borders.map((border, index) => {
            return (
              <span className="borders-btn" key={index}>
                {border}
              </span>
            );
          })}
        </h5>
      </div>
    );
  }
}
