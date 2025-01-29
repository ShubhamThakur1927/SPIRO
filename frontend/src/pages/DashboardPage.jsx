import React, { useState } from "react";
import { useAuthstore } from "../Stores/authstores";
import { StudentStores } from "../Stores/StudentStores";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Dashboard from "./Dashboard-Pages/Dashboard";
import { Bell } from "lucide-react";

function DashboardPage() {
  const { logout } = useAuthstore();
  const { getClasses, joinClass } = StudentStores();
  const [classes, setClasses] = useState([]);
  const [classLink, setClassLink] = useState("");
  const [content, setContent] = useState(<Dashboard />);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const classesData = await getClasses();
        setClasses(classesData?.enrolledClasses || []);
      } catch (error) {
        console.log(error);
      }
    };

    fetchClasses();
  }, [getClasses]);

  const handleLogout = () => {
    logout();
  };

  const handleJoinClass = async () => {
    try {
      console.log(classLink);
      await joinClass(classLink);
    } catch (error) {
      console.log(error);
    }
  };

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  return (
    <div className="container mx-auto h-screen bg-main flex">
      <Sidebar
        classes={classes}
        handleLogout={handleLogout}
        onContentChange={handleContentChange}
      />
      <div className=" flex w-screen h-screen overflow-auto">
        <div className="h-screen w-80 overflow-auto"></div>
        <div className="w-full content-area p-4">{content}
        <div className="w-auto fixed right-0 top-0 h-screen bg-white rounded-xl">
          {" "}
          <div className="px-5">
            <div className="my-10 grid gap-5">
              <div></div>
              <ul className="grid gap-5">
                <li><Bell /></li>
                <li><Bell /></li>
                <li><Bell /></li>
              </ul>
            </div>
            
          </div>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default DashboardPage;
