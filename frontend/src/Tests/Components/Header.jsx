import React from "react";

const Header = ({ profileImage, onImageUpload }) => {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
      {/* Logo */}
      <div className="text-blue-600 text-xl font-bold">SPIRO</div>

      {/* Navigation Links */}
      <nav className="flex space-x-6 text-gray-700">
        <a href="#classes" className="hover:text-blue-600">
          Classes
        </a>
        <a href="#contact" className="hover:text-blue-600">
          Contact us
        </a>
        <a href="#about" className="hover:text-blue-600">
          About us
        </a>
      </nav>

      {/* Profile Image */}
      <div className="relative">
        <label htmlFor="profileImage" className="cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden border border-gray-300 flex items-center justify-center">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a9.75 9.75 0 1115 0H4.5z"
                />
              </svg>
            )}
          </div>
        </label>
        <input
          id="profileImage"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={onImageUpload}
        />
      </div>
    </header>
  );
};

export default Header;
