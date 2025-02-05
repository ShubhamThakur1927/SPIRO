import { Pencil, SaveAll } from 'lucide-react';
import React, { useState } from 'react';

function Profileinfo({ details, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValues, setEditValues] = useState({ ...details });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(editValues);
    setIsEditing(false);
  };

  const handleChange = (field, value) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

  return (
    <div className="bg-white xl:w-full w-5/6 p-4 md:p-6 rounded-xl shadow-md">
      {/* Heading */}
      <h3 className="text-xl md:text-2xl font-semibold mb-4">Personal Detail</h3>

      {/* Details Section */}
      <div className="space-y-3 md:space-y-4">
        {/* Full Name */}
        <div className="flex items-center justify-between border-b pb-2">
          <p className="text-base md:text-lg">
            Full Name: 
            {isEditing ? (
              <input
                type="text"
                value={editValues.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder={details.name}
                className="ml-2 bg-transparent outline-none"
              />
            ) : (
              <span className="font-semibold text-gray-700 ml-2">{details.name}</span>
            )}
          </p>
        </div>

        {/* College Email */}
        <div className="flex items-center justify-between border-b pb-2">
          <p className="text-base md:text-lg">
            College Email: 
            <span className="font-medium text-gray-700 ml-2">{details.email}</span>
          </p>
        </div>

        {/* Phone */}
        <div className="flex items-center justify-between border-b pb-2">
          <p className="text-base md:text-lg">
            Phone: +91 
            {isEditing ? (
              <input
                type="text"
                value={editValues.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder={details.phone}
                className="ml-2 bg-transparent outline-none"
              />
            ) : (
              <span className="font-medium text-gray-700 ml-2">{details.phone}</span>
            )}
          </p>
        </div>

        {/* Branch */}
        <div className="flex items-center justify-between border-b pb-2">
          <p className="text-base md:text-lg">
            Branch: 
            {isEditing ? (
              <input
                type="text"
                value={editValues.branch}
                onChange={(e) => handleChange("branch", e.target.value)}
                placeholder={details.branch}
                className="ml-2 bg-transparent outline-none"
              />
            ) : (
              <span className="font-medium text-gray-700 ml-2">{details.branch}</span>
            )}
          </p>
        </div>

        {/* Class */}
        <div className="flex items-center justify-between border-b pb-2">
          <p className="text-base md:text-lg">
            Class: 
            {isEditing ? (
              <input
                type="text"
                value={editValues.yearAndDivision}
                onChange={(e) => handleChange("yearAndDivision", e.target.value)}
                placeholder={details.yearAndDivision}
                className="ml-2 bg-transparent outline-none"
              />
            ) : (
              <span className="font-medium text-gray-700 ml-2">{details.yearAndDivision}</span>
            )}
          </p>
        </div>

        {/* Gender */}
        <div className="flex items-center justify-between border-b pb-2">
          <p className="text-base md:text-lg">
            Gender: 
            {isEditing ? (
              <div className="ml-2">
                <label className="mr-2">
                  <input
                    type="radio"
                    value="Male"
                    checked={editValues.gender === "Male"}
                    onChange={(e) => handleChange("gender", e.target.value)}
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    value="Female"
                    checked={editValues.gender === "Female"}
                    onChange={(e) => handleChange("gender", e.target.value)}
                  />
                  Female
                </label>
              </div>
            ) : (
              <span className="font-medium text-gray-700 ml-2">{details.gender}</span>
            )}
          </p>
        </div>
      </div>

      {/* Edit Button */}
      <div className="mt-4 justify-items-end">
        {isEditing ? (
          <button onClick={handleSaveClick} className="flex items-center gap-2 hover:underline"><SaveAll size={18} />Save</button>
        ) : (
          <button onClick={handleEditClick} className="flex items-center gap-2 hover:underline"><Pencil size={18} />Edit</button>
        )}
      </div>
    </div>
  );
}

export default Profileinfo;