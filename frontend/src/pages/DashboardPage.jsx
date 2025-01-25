import React, { useEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import { useAuthstore } from "../Stores/authstores";
import Sidebar from "../components/Sidebar";

const DashboardPage = () => {
  const { getClasses, logout } = useAuthstore();
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const classesData = await getClasses();
        setClasses(classesData);
        console.log(classesData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchClasses();
  }, [getClasses]);

  const handleLogout = () => {
    logout();
  };

  return (
    <>
    <section className="min-h-screen">
    <Sidebar title={["Classes", "Assignment", "To Do List", "Calender", "Chatbox","Activity"]}  subtitle={classes} logout={handleLogout}/>
    </section>
    </>
  );
};

export default DashboardPage;
