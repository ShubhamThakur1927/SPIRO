import React from "react";

const Modulecard = ({ image, pages, title, description, author, onView }) => {
  return (
    <div className="flex w-full max-w-[800px] h-[150px] rounded-lg border border-gray-200 shadow-md overflow-hidden mb-4">
      {/* Left Section: Image */}
      <div className="relative w-[150px] h-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 left-2 bg-black text-white text-xs font-medium py-1 px-2 rounded">
          {pages} pages
        </div>
      </div>

      {/* Middle Section: Content */}
      <div className="flex flex-col justify-center px-4 w-full">
        <h2 className="text-lg font-semibold text-black">{title}</h2>
        <p className="text-sm text-gray-700">{description}</p>
        <p className="text-xs text-gray-500 mt-2">By {author}</p>
      </div>

      {/* Right Section: Action */}
      <div className="flex items-center justify-end pr-4">
        <button
          onClick={onView}
          className="bg-[#015bf8] text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-[#0048c7] transition duration-200"
        >
          View
        </button>
      </div>
    </div>
  );
};

export default Modulecard;
