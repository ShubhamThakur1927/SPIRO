import React, { useEffect, useState } from "react";
import { useAuthstore } from "../Stores/authstores";
import Sidebar from "../components/Sidebar";
import DashboardPage from "./DashboardPage";
import Dashboard from "./Dashboard-Pages/Dashboard";
import {
  Bell,
  CalendarDays,
  GamepadIcon,
  Home,
  LogOut,
  NotebookPen,
  PencilRuler,
  Plus,
  School,
  Settings,
} from "lucide-react";
import ClassesPage from "./Dashboard-Pages/ClassesPage";
import Dropdown from "../components/Dropdown";
import ToDoList from "./Dashboard-Pages/ToDoList";
import Modal from "../components/Modal";
import { useTeacherStore } from "../Stores/teacherStores";
import { useNavigate } from "react-router-dom";
import { StudentStores } from "../Stores/StudentStores";

function Dashboardteacher() {
  const { logout } = useAuthstore();
  const [content, setContent] = useState(<Dashboard />);
  const [classes, setClasses] = useState([]);
  const { getClasses } = StudentStores();
  const [newClassName, setNewClassName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { CreateClass, profile, joinLink } = useTeacherStore();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await profile();
        setClasses(response?.classes_name || []);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchClasses = async () => {
      try {
        const classesData = await getClasses();
        setClasses(classesData?.enrolledClasses || []);
      } catch (error) {
        console.log(error);
      } 
    };
    fetchClasses();
    fetchProfile();
  }, []);

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  const handleLogout = () => {
    logout();
  };

  const handleCreateClass = () => {
    if (newClassName.trim() !== "") {
      CreateClass(newClassName); // Send class name to CreateClasses
      setClasses([...classes, newClassName]);
      setNewClassName("");
      setIsModalOpen(false);
    }
  };

  const join = async () => {
    const response = await joinLink(classes[0]);
    console.log(response);
  };
  return (
    <div className="container mx-auto h-screen bg-main flex">
      {/* <Sidebar
                    classes={[]}
                    handleLogout={() => {}}
                    onContentChange={() => {}}
                /> */}

      {/* sidebar */}
      <div className="sidebar bg-white h-full w-auto fixed top-0 left-0 shadow-lg shadow-black rounded-r-xl overflow-y-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-100 flex flex-col justify-between">
        <div>
          <h1
            className="text-primary text-wrap text-display font-semibold p-4 m-10 cursor-pointer"
            onClick={() => handleContentChange(<Dashboard />)}
          >
            SPIRO
          </h1>
          <div className="p-2 mx-10">
            <ul className="grid gap-10 cursor-pointer">
              <li className="text-h3 font-semibold leading-h3">
                <Dropdown title="Classes" icon={<School />}>
                {/* <Dropdown title="Classes" icon={<School />}
                  items={classes.map((cls) => ({
                    label: cls,
                    value: cls,
                  }))}
                  onItemSelect={(id) => {
                    console.log("class id",id);
                    handleContentChange(<ClassesPage id={id} />)} }
                > */}
                  <ul>
                    {classes.map((className, index) => (
                      <li
                        key={index}
                        className="p-2 text-h4 leading-h4 flex justify-between items-center"
                      >
                        <span
                          onClick={(id) =>
                            handleContentChange(
                              <ClassesPage className={className}  />
                            )
                          }
                        >
                          {className}
                        </span>
                        <Plus onClick={join} />
                      </li>
                    ))}
                  </ul>
                  <div className="p-2">
                    <button
                      className="text-small text-gray-500 flex items-center gap-2"
                      onClick={() => setIsModalOpen(true)}
                    >
                      <Plus />
                      Create Class
                    </button>
                  </div>
                </Dropdown>
              </li>
              <li
                className="text-h3 font-semibold leading-h3 "
                onClick={() => handleContentChange(<ToDoList />)}
              >
                <span className="flex items-center gap-2">
                  <NotebookPen />
                  To Do List
                </span>
              </li>
              <li
                className="text-h3 font-semibold leading-h3 "
                onClick={() => handleContentChange("Assignment Content")}
              >
                <span className="flex items-center gap-2">
                  <PencilRuler />
                  Assignment
                </span>
              </li>
              <li
                className="text-h3 font-semibold leading-h3 "
                onClick={() => handleContentChange("Calendar Content")}
              >
                <span className="flex items-center gap-2">
                  <CalendarDays />
                  Calendar
                </span>
              </li>
            </ul>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="text-h3 leading-h3 p-2 text-start my-5 mx-10 font-semibold"
        >
          <span className="flex items-center gap-2">
            <LogOut />
            Logout
          </span>
        </button>
      </div>

      {/* content */}

      <div className="w-9/12 xl:ml-72 ml-52 xl:place-items-center content-area px-8 mt-2">
        {content}
        <div className="w-auto fixed right-0 top-0 h-screen bg-white rounded-xl">
          {" "}
          <div className="px-5">
            <div className="grid gap-5 my-10">
              <ul className="grid gap-5">
                <li className="place-items-center">
                  <Bell />
                </li>
                <li className="place-items-center">
                  <Settings />
                </li>
                <li
                  className="place-items-center cursor-pointer"
                  onClick={() => navigate("/")}
                >
                  <Home />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* class creataion Modal */}

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <div className="p-4">
            <h2 className="text-h3 font-semibold mb-4">Create New Class</h2>
            <input
              type="text"
              value={newClassName}
              onChange={(e) => setNewClassName(e.target.value)}
              placeholder="Class Name"
              className="border p-2 rounded w-full mb-4"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={handleCreateClass}
                className="p-2 bg-primary text-white rounded"
              >
                Create
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 bg-gray-300 text-black rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* class link creataion modal  */}
    </div>
  );
}

export default Dashboardteacher;
