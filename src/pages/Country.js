import React from "react";

export default function Country({ data }) {
  console.log(data);
  return (
    <div className="Country">
      <h1>{data.name}</h1>
    </div>
  );
}
