import React from 'react'

function Dropdown({ options, selectedOption, setSelectedOption }) {
    return (
      <div className="w-1/5 bg-white p-4 shadow-lg">
        
        <div className="mt-6 relative">
          <select
            className="w-full bg-gray-200 p-2 rounded-lg"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }

export default Dropdown
