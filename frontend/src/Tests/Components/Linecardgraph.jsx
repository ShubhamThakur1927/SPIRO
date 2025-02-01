import React from "react";

function Linecardgraph({ subject, percentage, width, height, image }) {
  return (
    <div
      className="p-10 flex items-center border rounded-lg shadow bg-main"
      style={{
        width: width || "300px", // Default width is 300px
        height: height || "80px", // Default height is 80px
      }}
    >
      {/* Circle Image Section */}
      <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4 overflow-hidden">
        <img
          src={image}
          alt="Subject Icon"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1">
        {/* Subject */}
        <h2 className="text-h4 font-semibold">{subject}</h2>

        {/* Progress Bar */}
        <div className="w-full bg-gray-300 rounded-full h-2 mt-2 relative">
          <div
            className="h-2 rounded-full"
            style={{
              width: `${percentage}%`,
              backgroundColor: "#ffffff", // Occupied percentage in white
            }}
          ></div>
        </div>
      </div>

      {/* Percentage Display */}
      <div className="ml-4 text-sm font-medium">{`${percentage}%`}</div>
    </div>
  );
}

export default Linecardgraph;
