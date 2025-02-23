import React from 'react'

function Suggestionsectioncard({ suggestions }) {
    return (
      <div className="flex-1 border p-4 rounded-lg shadow-md overflow-y-scroll max-h-80 scrollbar-hide">
        <h2 className="font-semibold">SUGGESTIONS</h2>
        {suggestions.map((suggestion, index) => (
          <div key={index} className="p-4 border rounded-lg mt-2 bg-gray-200 flex flex-col items-center">
            <img src={suggestion.image} alt={suggestion.title} className="w-full h-24 object-cover rounded-lg mb-2" />
            <span>{suggestion.title}</span>
          </div>
        ))}
      </div>
    );
  }

export default Suggestionsectioncard
