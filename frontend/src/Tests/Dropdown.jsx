import React, { useState } from "react";

const Dropdown = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <div>
      <h2>Browse Courses</h2>
      {/* Course Categories */}
      <div>
        <button onClick={() => toggleDropdown("categories")}>
          Course Categories
        </button>
        {activeDropdown === "categories" && (
          <ul>
            <li>Development</li>
            <li>Business</li>
            <li>Design</li>
            <li>Marketing</li>
          </ul>
        )}
      </div>

      {/* Levels */}
      <div>
        <button onClick={() => toggleDropdown("levels")}>Levels</button>
        {activeDropdown === "levels" && (
          <ul>
            <li>Beginner</li>
            <li>Intermediate</li>
            <li>Advanced</li>
          </ul>
        )}
      </div>

      {/* Languages */}
      <div>
        <button onClick={() => toggleDropdown("languages")}>Languages</button>
        {activeDropdown === "languages" && (
          <ul>
            <li>English</li>
            <li>Spanish</li>
            <li>French</li>
            <li>German</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
