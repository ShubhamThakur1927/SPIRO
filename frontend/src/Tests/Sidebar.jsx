import React, { useState } from "react";
import {
  FaChalkboardTeacher,
  FaHome,
  FaCalendar,
  FaTasks,
  FaSignOutAlt,
  FaClipboardList,
} from "react-icons/fa";

const SidebarItem = ({ title, icon, onClick, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full">
      <button
        className="flex items-center justify-between w-full p-2 text-left hover:bg-gray-100 focus:outline-none"
        onClick={children ? handleDropdownToggle : onClick}
      >
        <div className="flex items-center">
          <span className="mr-2">{icon}</span>
          {title}
        </div>
        {children && <span>{isOpen ? "▲" : "▼"}</span>}
      </button>
      {isOpen && children && <div className="ml-4">{children}</div>}
    </div>
  );
};

const Sidebar = () => {
  const handleOptionClick = (option) => {
    alert(`You clicked on ${option}`);
  };

  return (
    <div className="w-64 h-screen bg-gray-50 shadow-md">
      {/* Header */}
      <div className="p-4 font-bold text-blue-600 text-lg border-b">SPIRO</div>

      {/* Sidebar Items */}
      <div className="p-4 space-y-2">
        {/* Classes Dropdown */}
        <SidebarItem title="Classes" icon={<FaChalkboardTeacher />}>
          <div className="space-y-1">
            {["Class 1", "Class 2", "Class 3", "Class 4"].map((className) => (
              <button
                key={className}
                className="w-full p-2 text-left hover:bg-gray-100"
                onClick={() => handleOptionClick(className)}
              >
                {className}
              </button>
            ))}
          </div>
        </SidebarItem>

        {/* Other Sidebar Items */}
        <SidebarItem
          title="Chats"
          icon={<FaHome />}
          onClick={() => alert("Chats clicked")}
        />
        <SidebarItem
          title="Calendar"
          icon={<FaCalendar />}
          onClick={() => alert("Calendar clicked")}
        />
        <SidebarItem
          title="Assignments"
          icon={<FaTasks />}
          onClick={() => alert("Assignments clicked")}
        />
        <SidebarItem
          title="To Do List"
          icon={<FaTasks />}
          onClick={() => alert("To Do List clicked")}
        />

        {/* Activity Dropdown */}
        <SidebarItem title="Activity" icon={<FaClipboardList />}>
          <div className="space-y-1">
            {["Activity 1", "Activity 2", "Activity 3", "Activity 4"].map(
              (activity) => (
                <button
                  key={activity}
                  className="w-full p-2 text-left hover:bg-gray-100"
                  onClick={() => handleOptionClick(activity)}
                >
                  {activity}
                </button>
              )
            )}
          </div>
        </SidebarItem>

        {/* Logout */}
        <SidebarItem
          title="Logout"
          icon={<FaSignOutAlt />}
          onClick={() => alert("Logout clicked")}
        />
      </div>
    </div>
  );
};

export default Sidebar;
