import React, { useState } from "react";

function LectureList({ items, onItemSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
        <ul className="lectures-list mx-2 mt-5 grid gap-2">
          {Array.isArray(items) && items.length > 0 ? (
            items.map((item) => (
              <li
                key={item.value} // Use unique `value` as the key
                onClick={() => onItemSelect && onItemSelect(item.value)}
                className="w-auto h-auto cursor-pointer bg-white rounded-xl p-4 flex flex-col"
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={item.watched}
                    readOnly
                    className="mr-2"
                  />
                  {item.label}
                </div>
                <div className="text-gray-500 text-sm mt-1">
                  Description: {item.description || "No description"}
                </div>
                <div className="text-gray-500 text-sm mt-1">
                  Author: {item.author}
                </div>
              </li>
            ))
          ) : (
            <li className="text-gray-500">No lectures available</li>
          )}
        </ul>
  );
}

export default LectureList;
