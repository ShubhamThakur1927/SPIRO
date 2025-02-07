import React, { useState } from "react";
import {
  FaChalkboardTeacher,
  FaComments,
  FaCalendarAlt,
  FaTasks,
  FaClipboardList,
  FaSignOutAlt,
  FaSearch,
} from "react-icons/fa";

import { FiSettings, FiSun, FiMoon, FiUser, FiBell } from "react-icons/fi";

function Dashboardstudent() {
  const [isClassesOpen, setClassesOpen] = useState(false);
  const [isActivityOpen, setActivityOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const Arrow = ({ isOpen }) => (
    <span
      className={`ml-2 transition-transform duration-200 ${
        isOpen ? "rotate-180" : ""
      }`}
      style={{
        display: "inline-block",
        width: "12px",
        height: "12px",
        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </span>
  );

  return (
    <div className="flex relative bg-transparent h-screen">
      {/* Main Content */}
      <div className="overflow-y-auto scrollbar-hide" style={{ flex: 1 }}>
        {/* Search Bar */}
        <div
          className="absolute  bg-gray-200 border border-gray-300 rounded-full flex items-center"
          style={{
            width: "684px",
            height: "41px",
            top: "13px",
            left: "496px",
            borderRadius: "32px",
          }}
        >
          <input
            type="text"
            placeholder="Search"
            className="w-full h-full px-4 pr-10 bg-transparent focus:outline-none"
          />
          <FaSearch className="absolute right-4 text-gray-500" />
        </div>

        {/* Banner Section */}
        <div
          className="relative mt-[64px] mx-auto rounded-xl flex items-center justify-center align-middle p-3"
          style={{
            width: "1014px",
            height: "232px",
            backgroundColor: "#0056d2",
            overflow: "hidden",
          }}
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/11c9/164c/abf54060170229aec039010b5d97c203?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VI37dDPgT~f1QWillKjaqEauehWjRNssQil0jKtyGk0Bq7bAzPzOmJ0grvPMwbFwZWUr2UOY27PGxIAgZy2jwW4MgIsBnKRIaiz0z8vUrkhAxE1NYZmW81tBUz6Gjeevc5VuS7kDrIK0AoK33lK8YnNkg~ZiCb5Uq~kEk7VM3picQy0ZS8ae5taXE45DH9S-mio4pypDem0gWFxCyxZzgeII2sESiDO6P4EupbbISk~8JMATI84urMBp0ELnStNGF4AI8jnDpjO9PVLXVwzgmr~2W2LA-VeLHGwpMHA8hNn96XjLfbCei85f32-VfJ4NR6lLuOYebzrUzfBLdTJ-Zg__"
            alt="Banner"
            className="absolute w-full h-full object-cover"
            style={{ opacity: 0.2 }}
          />
          <div className="relative z-10 text-white text-left">
            <h1 className="text-h1 font-bold">Your Vision, Our Platform</h1>
            <p className="text-h5">Let’s Connect Today!</p>
            <button
              className="mt-4 px-6 py-2 bg-primary text-white font-semibold rounded-xl"
              style={{ border: "2px solid white" }}
            >
              Get Started
            </button>
          </div>
        </div>

        {/* New Section */}
        <div className="mt-10 px-10">
          {/* Frequently Viewed Classes */}
          <div className="mb-8">
            <h2 className="text-h2 font-bold mb-4">Frequently Viewed Classes</h2>
            <div className="flex space-x-4">
              <div className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md">Chemistry</div>
              {/* Add more classes as needed */}
            </div>
          </div>

          {/* Continue Playing */}
          <div className="mb-8">
            <h2 className="text-h2 font-bold mb-4">Continue Playing</h2>
            <div className="grid grid-cols-3 gap-4">
              {/* Placeholder cards */}
              <div className="bg-gray-200 h-32 rounded-lg"></div>
              <div className="bg-gray-200 h-32 rounded-lg"></div>
              <div className="bg-gray-200 h-32 rounded-lg"></div>
            </div>
          </div>

          {/* Syllabus Overview */}
          <div>
            <h2 className="text-h2 font-bold mb-4">Syllabus Overview</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white shadow-md p-4 rounded-lg">
                <h3 className="text-h3 font-semibold mb-2">Eng. Mathematics - IV</h3>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white">Active</div>
                  <div className="ml-4">Inactive</div>
                </div>
              </div>
              <div className="bg-white shadow-md p-4 rounded-lg">
                <h3 className="text-h3 font-semibold mb-2">Database Management Systems</h3>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white">Active</div>
                  <div className="ml-4">Inactive</div>
                </div>
              </div>
              <div className="bg-white shadow-md p-4 rounded-lg">
                <h3 className="text-h3 font-semibold mb-2">Operating Systems</h3>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white">Active</div>
                  <div className="ml-4">Inactive</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div
        className="fixed bg-white rounded-l-3xl h-full flex flex-col items-center p-4 shadow-lg"
        style={{
          width: "80px",
          top: "0",
          right: "0",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="mb-8 cursor-pointer flex flex-col items-center">
          <FiUser className="text-black text-3xl mb-2" />
        </div>
        <div className="mb-8 cursor-pointer flex flex-col items-center">
          <FiBell className="text-black text-3xl mb-2" />
        </div>
        <div
          className="mb-8 cursor-pointer flex flex-col items-center"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          {isDarkTheme ? <FiMoon className="text-black text-3xl mb-2" /> : <FiSun className="text-black text-3xl mb-2" />}
        </div>
        <div className="cursor-pointer flex flex-col items-center">
          <FiSettings className="text-black text-3xl mb-2" />
        </div>
      </div>
    </div>
  );
}

export default Dashboardstudent;
