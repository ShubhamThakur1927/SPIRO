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

function Dashboardadmin() {
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
    <div className="flex relative bg-white h-screen">
      {/* Left Sidebar */}
      <div
        className="w-[332px] h-full bg-white rounded-r-3xl overflow-y-auto"
        style={{
          boxShadow: "4px 0 10px 0 #f1f1f2",
          scrollbarWidth: "thin", // For Firefox
          scrollbarColor: "#6076DD #f1f1f2", // Thumb and track color for Firefox
        }}
      >
        <style>
          {`
            .left-sidebar::-webkit-scrollbar {
              width: 8px;
            }
            .left-sidebar::-webkit-scrollbar-thumb {
              background-color: #6076DD;
              border-radius: 4px;
            }
            .left-sidebar::-webkit-scrollbar-thumb:hover {
              background-color: #4e63b9;
            }
            .left-sidebar::-webkit-scrollbar-track {
              background: #f1f1f2;
            }
          `}
        </style>
        {/* Logo Section */}
        <div className="logo rounded-3xl p-10">
          <h1 className="text-h1 text-primary font-semibold text-center">SPIRO</h1>
        </div>

        {/* Navigation Menu */}
        <div className="p-10">
          <ul>
            <li className="text-h4 cursor-pointer mt-4">
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
            <li className="text-h4 mt-4">
              <div className="flex items-center">
                <FaComments className="mr-2 text-black" />
                <span>Chats</span>
              </div>
            </li>
            <li className="text-h4 mt-4">
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2 text-black" />
                <span>Calendar</span>
              </div>
            </li>
            <li className="text-h4 mt-4">
              <div className="flex items-center">
                <FaTasks className="mr-2 text-black" />
                <span>Assignments</span>
              </div>
            </li>
            <li className="text-h4 mt-4">
              <div className="flex items-center">
                <FaClipboardList className="mr-2 text-black" />
                <span>To Do List</span>
              </div>
            </li>
            <li className="text-h4 mt-4 cursor-pointer">
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
          <div className="flex items-center text-h4">
            <FaSignOutAlt className="mr-2 text-black" />
            <span>Logout</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
  <div className="overflow-y-auto" style={{ flex: 1 }}>
    {/* Search Bar */}
    <div
      className="absolute bg-gray-200 border border-gray-300 rounded-full items-center"
      style={{
        width: "800px",
        height: "50px",
        top: "20px",
        left: "400px",
        borderRadius: "32px",
      }}
    >
      <input
        type="text"
        placeholder="Search"
        className="w-full h-full px-6 pr-12 bg-transparent text-lg "
      />
      
    </div>

    {/* Banner Section */}
    <div
      className="relative mt-[80px] mx-auto rounded-xl flex items-center justify-center p-8"
      style={{
        width: "1100px",
        height: "280px",
        backgroundColor: "#0056d2",
        overflow: "hidden",
      }}
    >
      <img
        src="https://s3-alpha-sig.figma.com/img/11c9/164c/abf54060170229aec039010b5d97c203?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VI37dDPgT~f1QWillKjaqEauehWjRNssQil0jKtyGk0Bq7bAzPzOmJ0grvPMwbFwZWUr2UOY27PGxIAgZy2jwW4MgIsBnKRIaiz0z8vUrkhAxE1NYZmW81tBUz6Gjeevc5VuS7kDrIK0AoK33lK8YnNkg~ZiCb5Uq~kEk7VM3picQy0ZS8ae5taXE45DH9S-mio4pypDem0gWFxCyxZzgeII2sESiDO6P4EupbbISk~8JMATI84urMBp0ELnStNGF4AI8jnDpjO9PVLXVwzgmr~2W2LA-VeLHGwpMHA8hNn96XjLfbCei85f32-VfJ4NR6lLuOYebzrUzfBLdTJ-Zg__"
        alt="Banner"
        className="absolute w-full h-full object-cover"
        style={{ opacity: 0.3 }}
      />
      <div className="relative z-10 text-white text-left">
        <h1 className="text-4xl font-bold mb-4">Your Vision, Our Platform</h1>
        <p className="text-2xl">Let’s Connect Today!</p>
        <button
          className="mt-6 px-8 py-4 bg-primary text-white text-lg font-semibold rounded-xl"
          style={{ border: "2px solid white" }}
        >
          Get Started
        </button>
      </div>
    </div>

    {/* Main Dashboard Content */}
    <div className="mt-12 px-8">
      {/* Statistics Section */}
      <div className="grid grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold mb-2">Total no. of Teachers</h2>
          <p className="text-4xl font-bold">50</p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold mb-2">Total no. of Students</h2>
          <p className="text-4xl font-bold">2000</p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold mb-2">Total no. of Subjects</h2>
          <p className="text-4xl font-bold">50</p>
        </div>
      </div>

      {/* Top Teachers Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Top 3 Teachers Rated by Students</h2>
        <div className="flex gap-8">
          {["Prof. Shravani Shewale", "Prof. John Doe", "Prof. Jane Smith"].map(
            (teacher, index) => (
              <div key={index} className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center">
                <div className="w-20 h-20 bg-gray-300 rounded-full mb-4"></div>
                <p className="text-lg font-semibold">{teacher}</p>
                <p className="text-sm text-gray-500">Artificial Intelligence & Data Science</p>
              </div>
            )
          )}
        </div>
      </div>

      {/* Attendance Overview */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Attendance Overview</h2>
        <div className="flex gap-8">
          <div className="flex-1 bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Teacher’s Attendance Overview</h3>
            <p className="text-xl">Prof. Shravani: 90%</p>
          </div>
          <div className="flex-1 bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Student’s Attendance Overview</h3>
            <p className="text-xl">FE: 88%</p>
          </div>
        </div>
      </div>
      {/* Teacher and Student Records Section */}
<div className="mt-12">
  <h2 className="text-2xl font-bold mb-4">Records Overview</h2>

  {/* Teacher Records */}
  <div className="mt-6">
    <h3 className="text-xl font-semibold mb-4">Teacher Records</h3>
    <div className="grid grid-cols-3 gap-8">
      <div className="bg-white shadow-lg rounded-xl p-6">
        <h4 className="text-lg font-semibold">Artificial Intelligence & Data Science</h4>
        <div className="flex items-center mt-2">
          <input type="radio" id="active1" name="teacher1" value="active" />
          <label htmlFor="active1" className="ml-2">Active</label>
          <input type="radio" id="inactive1" name="teacher1" value="inactive" className="ml-4" />
          <label htmlFor="inactive1" className="ml-2">Inactive</label>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-xl p-6">
        <h4 className="text-lg font-semibold">Computer Science</h4>
        <div className="flex items-center mt-2">
          <input type="radio" id="active2" name="teacher2" value="active" />
          <label htmlFor="active2" className="ml-2">Active</label>
          <input type="radio" id="inactive2" name="teacher2" value="inactive" className="ml-4" />
          <label htmlFor="inactive2" className="ml-2">Inactive</label>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-xl p-6">
        <h4 className="text-lg font-semibold">Electronics & Computer Science</h4>
        <div className="flex items-center mt-2">
          <input type="radio" id="active3" name="teacher3" value="active" />
          <label htmlFor="active3" className="ml-2">Active</label>
          <input type="radio" id="inactive3" name="teacher3" value="inactive" className="ml-4" />
          <label htmlFor="inactive3" className="ml-2">Inactive</label>
        </div>
      </div>
    </div>
  </div>

  {/* Student Records */}
  <div className="mt-12">
    <h3 className="text-xl font-semibold mb-4">Student Records</h3>
    <div className="grid grid-cols-3 gap-8">
      <div className="bg-white shadow-lg rounded-xl p-6">
        <h4 className="text-lg font-semibold">Artificial Intelligence & Data Science</h4>
        <div className="flex items-center mt-2">
          <input type="radio" id="studentActive1" name="student1" value="active" />
          <label htmlFor="studentActive1" className="ml-2">Active</label>
          <input type="radio" id="studentInactive1" name="student1" value="inactive" className="ml-4" />
          <label htmlFor="studentInactive1" className="ml-2">Inactive</label>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-xl p-6">
        <h4 className="text-lg font-semibold">Computer Science</h4>
        <div className="flex items-center mt-2">
          <input type="radio" id="studentActive2" name="student2" value="active" />
          <label htmlFor="studentActive2" className="ml-2">Active</label>
          <input type="radio" id="studentInactive2" name="student2" value="inactive" className="ml-4" />
          <label htmlFor="studentInactive2" className="ml-2">Inactive</label>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-xl p-6">
        <h4 className="text-lg font-semibold">Electronics & Computer Science</h4>
        <div className="flex items-center mt-2">
          <input type="radio" id="studentActive3" name="student3" value="active" />
          <label htmlFor="studentActive3" className="ml-2">Active</label>
          <input type="radio" id="studentInactive3" name="student3" value="inactive" className="ml-4" />
          <label htmlFor="studentInactive3" className="ml-2">Inactive</label>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* New Section: Recent Announcements */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Recent Announcements</h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">Holiday Announcement</h3>
            <p className="text-lg">The campus will remain closed on January 26th for Republic Day.</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">Exam Schedule</h3>
            <p className="text-lg">Mid-term exams will begin from February 5th, 2025.</p>
          </div>
        </div>
      </div>

      {/* New Section: Upcoming Events */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Hackathon</h3>
            <p className="text-lg">February 15, 2025</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Cultural Fest</h3>
            <p className="text-lg">March 10, 2025</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Convocation</h3>
            <p className="text-lg">April 25, 2025</p>
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

export default Dashboardadmin;
