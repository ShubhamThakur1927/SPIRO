import React, { useEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import { useAuthstore } from "../Stores/authstores";
import Sidebar from "../components/Sidebar";
import { StudentStores } from "../Stores/StudentStores";
import Search from "../components/Search";

const DashboardPage = () => {
  const { logout } = useAuthstore();
  const { getClasses, joinClass } = StudentStores();
  const [classes, setClasses] = useState([]);
  const [classLink, setClassLink] = useState("");

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const classesData = await getClasses();
        setClasses(classesData);
        //console.log(classesData);
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

  return (
    <section className="min-h-screen flex">
      <section className="min-h-screen flex">
        <Sidebar title={["Classes", "Assignment", "To Do List", "Calender", "Chatbox", "Activity"]} subtitle={classes} logout={handleLogout} />
      </section>
      <section className="min-h-screen  w-full border-2 grid justify-items-center border-black">
        <div>
          <Search/>
        </div>
      </section>

      <section className="w-auto border-2 border-red-900"></section>
      </section>
  );
};

export default DashboardPage;
