import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Circulargraphcard({ title, percentage, isActive, width, height }) {
  return (
    <div
      className={`border rounded-lg shadow p-4 flex items-center justify-between bg-gray-100`}
      style={{
        width: width || "256px", // Default width 256px if not provided
        height: height || "128px", // Default height 128px if not provided
      }}
    >
      {/* Title Section */}
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="mt-2 space-y-1">
          {/* Active Status */}
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded bg-blue-600"></div>
            <span className="text-sm">Active</span>
          </div>
          {/* Inactive Status */}
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded bg-white border border-gray-400"></div>
            <span className="text-sm">Inactive</span>
          </div>
        </div>
      </div>

      {/* Circular Progress Graph */}
      <div className="w-16 h-16">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textSize: "30px",
            textColor: "#3b82f6",
            pathColor: isActive ? "#3b82f6" : "#9ca3af", // Gray path for inactive
            trailColor: "#e5e7eb",
          })}
        />
      </div>
    </div>
  );
}

export default Circulargraphcard;
