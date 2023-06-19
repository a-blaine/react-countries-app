import React from "react";

export default function Borders({ borders, code }) {
  return (
    <div className="Borders">
      {code}
      <div>
        {borders.map((border, index) => {
          return <span key={index}>{border} </span>;
        })}
      </div>
    </div>
  );
}
