import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

/**
 * A reusable Dropdown component.
 *
 * @param {string} title - The title of the dropdown.
 * @param {Array} items - The array of items to display in the dropdown. Each item should be an object with `label` and `value`.
 * @param {Function} onItemSelect - Callback function called with the item's value when clicked.
 * @param {React.ReactNode} icon - Optional icon to display next to the title.
 * @param {React.ReactNode} children - Optional children elements to render inside the dropdown.
 */
function Dropdown({ title, items = [], onItemSelect, icon, children }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => setIsClicked(!isClicked);

  return (
    <div className="dropdown">
      <button
        onClick={handleClick}
        className={`flex items-center gap-2 ${isClicked ? 'text-primary' : ''}`}
      >
        {icon && <span className="pt-1">{icon}</span>}
        {title}
        <div className="pt-2">
          {!isClicked ? <ChevronDown size={28} /> : <ChevronUp size={28} />}
        </div>
      </button>
      {isClicked && (
        <div className="dropdown-content my-2">
          {children}
          <ul className="mx-2 grid gap-2">
            {items.map((item) => (
              <li
                key={item.value}
                onClick={() => onItemSelect(item.value)}
                className="text-h4 font-normal leading-h4 cursor-pointer"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
