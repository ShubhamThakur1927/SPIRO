import React from "react";
import Dropdown from "../components/Dropdown";
import { useNavigate } from "react-router-dom";
import ToDoList from "../pages/Dashboard-Pages/ToDoList";
import Dashboard from "../pages/Dashboard-Pages/Dashboard";
import ClassesPage from "../pages/Dashboard-Pages/ClassesPage";

const Sidebar = ({ classes, handleLogout, onContentChange }) => {
  const navigate = useNavigate();

  if (typeof onContentChange !== "function") {
    console.error("onContentChange is not a function");
    return null;
  }

  return (
    <div className="sidebar bg-white h-full w-auto fixed top-0 left-0 shadow-lg shadow-black rounded-r-xl overflow-y-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-100 flex flex-col justify-between">
      <div>
        <h1
          className="text-primary text-wrap text-display font-semibold p-4 m-10 cursor-pointer"
          onClick={() => onContentChange(<Dashboard/>)}
        >
          SPIRO
        </h1>
        <div className="p-2 mx-10">
          <ul className="grid gap-10 cursor-pointer">
            <li className="text-h3 font-semibold leading-h3">
              <Dropdown
                title="Classes"
                items={classes.map((cls) => ({
                  label: cls.subjectname,
                  value: cls._id,
                }))}
                onItemSelect={(id) => onContentChange(<ClassesPage id={id} />)}
              />
            </li>
            <li className="text-h3 font-semibold leading-h3 " onClick={() => onContentChange(<ToDoList/>)}>
              To Do List
            </li>
            <li className="text-h3 font-semibold leading-h3 " onClick={() => onContentChange("Assignment Content")}>
              Assignment
            </li>
            <li className="text-h3 font-semibold leading-h3 " onClick={() => onContentChange("Calendar Content")}>
              Calendar
            </li>
            <li className="text-h3 font-semibold leading-h3 ">
              <Dropdown
                title="Activity"
                items={[
                  { label: "Games", value: "games" },
                  { label: "Simulation", value: "simulation" },
                  { label: "Quiz", value: "quiz" },
                ]}
                onItemSelect={(value) => onContentChange(`Activity content for ${value}`)}
              />
            </li>
          </ul>
        </div>
      </div>
      <button
        onClick={handleLogout}
        className="text-h3 leading-h3 p-2 text-start my-5 mx-10 font-semibold"
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
