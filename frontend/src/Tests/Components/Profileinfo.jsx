import React from 'react';

function Profileinfo({ details }) {
  return (
    <div className="bg-white p-4 md:p-6 rounded-xl shadow-md">
      {/* Heading */}
      <h3 className="text-xl md:text-2xl font-semibold mb-4">Personal Detail</h3>

      {/* Details Section */}
      <div className="space-y-3 md:space-y-4">
        {/* Full Name */}
        <p className="text-base md:text-lg">
          Full Name: <span className="font-semibold text-gray-700">{details.name}</span>
        </p>

        {/* College Email */}
        <p className="text-base md:text-lg">
          College Email: <span className="font-medium text-gray-700">{details.email}</span>
        </p>

        {/* Phone */}
        <p className="text-base md:text-lg">
          Phone: +91 <span className="font-medium text-gray-700">{details.phone}</span>
        </p>

        {/* Branch */}
        <p className="text-base md:text-lg">
          Branch: <span className="font-medium text-gray-700">{details.branch}</span>
        </p>

        {/* Class */}
        <p className="text-base md:text-lg">
          Class: <span className="font-medium text-gray-700">{details.yearAndDivision}</span>
        </p>

        {/* Gender */}
        <p className="text-base md:text-lg">
          Gender: <span className="font-medium text-gray-700">{details.gender}</span>
        </p>
      </div>
    </div>
  );
}

export default Profileinfo;