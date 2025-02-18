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
import banner from "../../assets/Banner.png"
import Search from "../../components/Search";

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
    <div className="flex relative pr-14 bg-transparent h-screen">
      {/* Main Content */}
      <div className="overflow-y-auto place-items-center scrollbar-hide" style={{ flex: 1 }}>
        <Search/>
        {/* Banner Section */}
        <div
          className="relative mx-auto rounded-xl flex items-center justify-center align-middle p-3"
          style={{
            width: "1014px",
            height: "232px",
            backgroundColor: "#0056d2",
            overflow: "hidden",
          }}
        >
          <img
            src={banner}
            alt="Banner"
            className="absolute w-full h-full object-cover"
            style={{ opacity: 0.2 }}
          />
          <div className="relative z-10 w-full mx-10 text-white text-left">
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
    </div>
  );
}

export default Dashboardstudent;
