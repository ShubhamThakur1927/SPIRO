import React from "react";


const GoHomeButton = () => {
  return (
    <button
      className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      onClick={() => (window.location.href = "/")}
    >
      Go Back to Home
    </button>
  );
};

export default GoHomeButton;
