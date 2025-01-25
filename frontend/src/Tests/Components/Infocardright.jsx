import React from "react";

function Infocardright({ title, description, width, height }) {
  return (
    <div
      className="relative p-4 shadow"
      style={{
        backgroundColor: "#f1f1f2", // Background color
        width: width || "300px", // Default width
        height: height || "auto", // Default height adjusts based on content
        borderRadius: "8px", // Slight rounding
        clipPath: "polygon(0 0, 95% 0, 100% 10%, 100% 100%, 5% 100%, 0 90%)", // Adjusted for given card
      }}
    >
      <h2 className="text-lg font-semibold mb-2 text-blue-600 text-center">{title}</h2>
      <p className="text-sm text-gray-700 text-center">{description}</p>
    </div>
  );
}

export default Infocardright    ;
