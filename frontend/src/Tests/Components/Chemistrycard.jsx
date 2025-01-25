import React from "react";

function Chemistrycard(props) {
  const { image, title, author, onMenuClick } = props;

  return (
    <div className="relative w-64 h-40 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
      {/* Background Image */}
      <img
        src={image}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Text Content */}
      <div className="absolute bottom-4 left-4 text-white">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm">{author}</p>
      </div>

      {/* Menu Button */}
      <button
        onClick={onMenuClick}
        className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm6 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm6 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </button>
    </div>
  );
}

export default Chemistrycard;
