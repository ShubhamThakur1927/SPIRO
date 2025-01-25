import React from "react";

function Spirologo({ logoSrc, logoSize = "40px", fontSize = "20px" }) {
  return (
    <div className="flex items-center space-x-2">
      {/* Logo Image */}
      <div
        className="flex items-center justify-center border rounded"
        style={{
          width: logoSize,
          height: logoSize,
          borderColor: "#3b82f6", // Blue border color
        }}
      >
        <img
          
          alt="Logo"
          style={{
            width: "80%", // Adjust to fit inside the border
            height: "80%",
            objectFit: "contain",
          }}
        />
      </div>

      {/* Logo Text */}
      <span
        className="text-blue-600 font-semibold"
        style={{
          fontSize: fontSize,
        }}
      >
        SPIRO
      </span>
    </div>
  );
}

export default Spirologo;
