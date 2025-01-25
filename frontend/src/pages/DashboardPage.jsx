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
    <section>
    <Sidebar title="Classes" subtitle={classes}/>
    </section>
    </>
  );
};

export default DashboardPage;
