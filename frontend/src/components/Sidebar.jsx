import { useState } from "react";
import { ChevronDown, ChevronRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Sidebar = ({ menuItems }) => {
  const [openSections, setOpenSections] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="flex">
      <Button className="m-2" onClick={() => setSidebarOpen(!sidebarOpen)}>
        <Menu />
      </Button>
      {sidebarOpen && (
        <aside className="bg-gray-900 text-white w-64 min-h-screen p-4">
          {menuItems.map((item, index) => (
            <div key={index} className="mb-2">
              <button
                className="flex justify-between w-full px-3 py-2 rounded hover:bg-gray-700"
                onClick={() => toggleSection(index)}
              >
                {item.title} {openSections[index] ? <ChevronDown /> : <ChevronRight />}
              </button>
              {openSections[index] && (
                <ul className="ml-4 mt-2">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex} className="py-1 px-2 hover:bg-gray-600 rounded">
                      {subItem}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </aside>
      )}
    </div>
  );
};

export default Sidebar;