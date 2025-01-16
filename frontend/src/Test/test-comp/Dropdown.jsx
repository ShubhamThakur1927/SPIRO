import React, { useState } from "react";

const DropdownMenu = ({ buttonLabel, buttonStyles, menuStyles, items, onItemClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className={`${buttonStyles} flex justify-between items-center w-full px-4 py-2 text-sm font-medium rounded-md shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2`}
      >
        {buttonLabel}
        <svg
          className="ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={`${menuStyles} absolute right-0 z-10 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5`}
          role="menu"
          aria-orientation="vertical"
        >
          <ul className="py-1">
            {items.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    onItemClick(item);
                    setIsOpen(false);
                  }}
                  className="flex items-center gap-2 px-4 py-2 text-sm text-black hover:bg-blue-100 hover:text-blue-600 focus:outline-none focus:bg-blue-200"
                  role="menuitem"
                >
                  <span className="font-bold text-gray-600">{index + 1}.</span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
