import React from "react";
import LectureList from "./LectureList";
import { ArrowDown, ArrowUp, ChevronDown, ChevronUp } from "lucide-react";

function ModuleCard({ ModuleTitle,title, items = [], onItemSelect, icon, author }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => setIsOpen(!isOpen);
  return (
    <div className="w-auto h-screen mx-10 p-4">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="bg-white flex justify-between items-center w-full p-4 rounded-lg cursor-pointer" onClick={handleClick}>
        <div className="grid gap-4 ">
          <span className="text-h4">{ModuleTitle}</span>
          <span className="text-gray-500 text-h5">Author: {author}</span>
        </div>
        {isOpen ? (
            <ChevronUp/>
          ):(
            <ChevronDown/>
          )}
      </div>
      {isOpen && <LectureList items={items} onItemSelect={onItemSelect} />}
    </div>
  );
}

export default ModuleCard;
