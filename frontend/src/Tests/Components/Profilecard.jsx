import React from "react";
import PropTypes from "prop-types";

const Profilecard = ({ image, name, onUpdateVisibility }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 w-full sm:w-[280px] h-[280px] border border-gray-200 shadow-md rounded-lg bg-white">
      {/* Profile Image */}
      <div className="w-24 h-24 rounded-full bg-gray-100 overflow-hidden flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-gray-400">
            {/* Placeholder Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a9.75 9.75 0 1115 0H4.5z"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Name */}
      <h2 className="text-lg font-semibold text-gray-900 mt-4">{name}</h2>

      {/* Update Profile Button */}
      <button
        onClick={onUpdateVisibility}
        className="text-blue-600 text-sm mt-2 hover:underline"
      >
        Update profile visibility
      </button>
    </div>
  );
};

// Default Props
Profilecard.defaultProps = {
  image: "",
  name: "Unknown User",
  onUpdateVisibility: () => {
    console.log("Update profile visibility clicked");
  },
};

// Prop Types
Profilecard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  onUpdateVisibility: PropTypes.func,
};

export default Profilecard;
