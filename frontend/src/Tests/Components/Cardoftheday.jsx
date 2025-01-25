import React from "react";

function Cardoftheday({ title, value, width, height }) {
  return (
    <div
      className="border rounded-lg shadow p-4 flex flex-col justify-center"
      style={{
        width: width || "250px", // Default width is 250px
        height: height || "150px", // Default height is 150px
      }}
    >
      {/* Title */}
      <h2 className="text-h3 font-semibold mb-2 p-6 ">{title}</h2>

      {/* Value */}
      <p className="text-h4 font-bold p-6">{value}</p>
    </div>
  );
}

export default Cardoftheday;
