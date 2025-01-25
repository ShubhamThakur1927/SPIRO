import React from "react";

function Cardfritbeta(props) {
  const { image, duration, title, description, author, onPlayClick } = props;

  return (
    <div className="flex items-center border border-gray-300 rounded-md shadow-sm p-4 space-x-4 hover:shadow-md transition">
      {/* Image Section with Time Badge */}
      <div className="relative w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
        <img src={image} alt="Thumbnail" className="w-full h-full object-cover" />
        <span className="absolute top-2 left-2 bg-gray-900 text-white text-xs px-2 py-1 rounded">
          {duration}
        </span>
      </div>

      {/* Text Section */}
      <div className="flex flex-col flex-grow">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-700 text-sm mb-2">{description}</p>
        <span className="text-gray-500 text-xs">By {author}</span>
      </div>

      {/* Play Button */}
      <button
        onClick={onPlayClick}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition flex items-center"
      >
        Play
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 ml-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.25 5.25l13.5 6.75-13.5 6.75V5.25z"
          />
        </svg>
      </button>
    </div>
  );
}

export default Cardfritbeta;
