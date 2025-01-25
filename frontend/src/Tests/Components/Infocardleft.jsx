import React from "react";

function Infocardleft({ title, description, backgroundColor, width, height }) {
  return (
    <div
      className="relative p-4 shadow bg-main"
      style={{
        
        width: width || "300px", 
        height: height || "auto", 
        borderRadius: "8px", // Slight rounding
        clipPath: "polygon(5% 0, 100% 0, 100% 85%, 95% 100%, 0 100%, 0 15%)", // Cut corners: top-left & bottom-right
      }}
    >
      <h2 className="text-lg font-semibold mb-2 text-center">{title}</h2>
      <p className="text-sm text-gray-700 text-center">{description}</p>
    </div>
  );
}

export default Infocardleft;
