import React from 'react'

import Dropdown from './Dropdown';

function Stuctclm() {
        const menuItems = [
          { label: "Profile", value: "profile" },
          { label: "Settings", value: "settings" },
          { label: "Logout", value: "logout" },
        ]
        const handleItemClick = (item) => {
            console.log(`You selected: ${item.label}`);
          };
  return (
    <div className="p-4">
    <Dropdown
      buttonLabel="Options"
      buttonStyles="text-black bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"
      menuStyles="bg-white"
      items={menuItems}
      onItemClick={handleItemClick}
    />
  </div>
  );
}

export default Stuctclm;
