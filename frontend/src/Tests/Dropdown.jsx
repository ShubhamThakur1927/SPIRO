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

import { FiSettings, FiSun, FiMoon, FiUser, FiBell } from "react-icons/fi"; // Icons including notifications

function Dashboard() {
  const [isClassesOpen, setClassesOpen] = useState(false);
  const [isActivityOpen, setActivityOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false); // Theme toggle

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
    <div className="flex relative bg-main">
      {/* Left Sidebar */}
      <div className="sticky-left w-[332px] h-[1024px] bg-white rounded-r-3xl">
        {/* Logo Section */}
        <div className="logo rounded-3xl p-10">
          <h1 className="text-h1 text-primary font-semibold text-center">SPIRO</h1>
        </div>

        {/* Navigation Menu */}
        <div className="p-10">
          <ul>
            {/* Classes Dropdown */}
            <li className="text-h3 cursor-pointer mt-4">
              <div
                className="flex items-center justify-between"
                onClick={() => setClassesOpen(!isClassesOpen)}
              >
                <div className="flex items-center">
                  <FaChalkboardTeacher className="mr-2 text-black" />
                  <span>Classes</span>
                </div>
                <Arrow isOpen={isClassesOpen} />
              </div>
              {isClassesOpen && (
                <ul className="ml-6 mt-2">
                  <li className="mt-2">Class 1</li>
                  <li className="mt-2">Class 2</li>
                  <li className="mt-2">Class 3</li>
                </ul>
              )}
            </li>

            {/* Chats */}
            <li className="text-h3 mt-4">
              <div className="flex items-center">
                <FaComments className="mr-2 text-black" />
                <span>Chats</span>
              </div>
            </li>

            {/* Calendar */}
            <li className="text-h3 mt-4">
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2 text-black" />
                <span>Calendar</span>
              </div>
            </li>

            {/* Assignments */}
            <li className="text-h3 mt-4">
              <div className="flex items-center">
                <FaTasks className="mr-2 text-black" />
                <span>Assignments</span>
              </div>
            </li>

            {/* To-Do List */}
            <li className="text-h3 mt-4">
              <div className="flex items-center">
                <FaClipboardList className="mr-2 text-black" />
                <span>To Do List</span>
              </div>
            </li>

            {/* Activity Dropdown */}
            <li className="text-h3 mt-4 cursor-pointer">
              <div
                className="flex items-center justify-between"
                onClick={() => setActivityOpen(!isActivityOpen)}
              >
                <div className="flex items-center">
                  <FaTasks className="mr-2 text-black" />
                  <span>Activity</span>
                </div>
                <Arrow isOpen={isActivityOpen} />
              </div>
              {isActivityOpen && (
                <ul className="ml-6 mt-2">
                  <li className="mt-2">Activity 1</li>
                  <li className="mt-2">Activity 2</li>
                  <li className="mt-2">Activity 3</li>
                </ul>
              )}
            </li>
          </ul>
        </div>

        {/* Logout */}
        <div className="p-10">
          <div className="flex items-center text-h2">
            <FaSignOutAlt className="mr-2 text-black" />
            <span>Logout</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1">
        {/* Search Bar */}
        <div
          className="absolute bg-gray-200 border border-gray-300 rounded-full flex items-center"
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
      </div>

      {/* Right Sidebar */}
      <div
        className="fixed bg-white rounded-l-3xl"
        style={{
          width: "60px", // Width Hug (60px)
          height: "216px", // Height Hug (216px)
          top: "55px", // Top 55px
          left: "1338px", // Left 1338px
          padding: "10px", // Padding 10px
        }}
      >
        <div className="flex flex-col items-center">
          {/* Profile Icon */}
          <div className="mb-4 cursor-pointer">
            <FiUser className="text-black text-xl" />
          </div>

          {/* Notification Icon */}
          <div className="mb-4 cursor-pointer">
            <FiBell className="text-black text-xl" />
          </div>

          {/* Theme Icon (Toggle between Dark and Light) */}
          <div
            className="mb-4 cursor-pointer"
            onClick={() => setIsDarkTheme(!isDarkTheme)}
          >
            {isDarkTheme ? (
              <FiMoon className="text-black text-xl" />
            ) : (
              <FiSun className="text-black text-xl" />
            )}
          </div>

          {/* Settings Icon */}
          <div className="mb-4 cursor-pointer">
            <FiSettings className="text-black text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
