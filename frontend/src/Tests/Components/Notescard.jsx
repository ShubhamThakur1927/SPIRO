import { FaRegEdit } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const Notescard = () => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white w-full sm:w-[280px] h-52">
      {/* Create Notes */}
      <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-500 transition-all duration-300">
        <FaRegEdit className="text-xl" />
        <span className="text-lg font-medium">Make your own notes</span>
      </div>

      {/* Download Notes */}
      <div className="flex items-center space-x-2 mt-4 cursor-pointer hover:text-blue-500 transition-all duration-300">
        <FiDownload className="text-xl" />
        <span className="text-lg font-medium">Downloads</span>
      </div>
    </div>
  );
};

export default Notescard;
