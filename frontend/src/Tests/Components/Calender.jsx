import React, { useState } from "react";

function Calender() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const changeMonth = (direction) => {
    setCurrentDate(new Date(year, month + direction, 1));
  };

  const selectDate = (date) => {
    setSelectedDate(new Date(year, month, date));
  };

  const generateCalendar = () => {
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="text-gray-300"></div>);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      const isSelected = selectedDate && selectedDate.getDate() === i;
      days.push(
        <div
          key={i}
          className={`p-2 text-center cursor-pointer rounded ${
            isSelected
              ? "bg-blue-500 text-white font-bold"
              : "hover:bg-gray-200 text-gray-700"
          }`}
          onClick={() => selectDate(i)}
        >
          {i}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="max-w-md mx-auto bg-gray-100 shadow-md rounded-lg p-4">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => changeMonth(-1)}
          className="p-2 bg-gray-200 rounded-md hover:bg-gray-300"
        >
          {"<"}
        </button>
        <h2 className="text-xl font-semibold text-gray-800">
          {currentDate.toLocaleDateString("en-US", { month: "long" })} {year}
        </h2>
        <button
          onClick={() => changeMonth(1)}
          className="p-2 bg-gray-200 rounded-md hover:bg-gray-300"
        >
          {">"}
        </button>
      </div>

      {/* Weekday Headers */}
      <div className="grid grid-cols-7 text-center text-gray-500 font-medium mb-2">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-2">{generateCalendar()}</div>

      {/* Selected Date */}
      {selectedDate && (
        <div className="mt-4 text-center text-gray-700">
          Selected Date:{" "}
          <span className="font-bold text-blue-500">
            {selectedDate.toDateString()}
          </span>
        </div>
      )}
    </div>
  );
}

export default Calender;
