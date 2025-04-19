import React, { useState, useEffect } from "react";
import { useAuthstore } from "../Stores/authstores";
import { StudentStores } from "../Stores/StudentStores";
import Sidebar from "../components/Sidebar";
import Dashboard from "./Dashboard-Pages/Dashboard";
import { Bell, Home, Plus, Settings } from "lucide-react";
import Profilepage from "./Dashboard-Pages/Profilepage";
import profilealt from "../assets/profile-alt.svg";
import { useNavigate } from "react-router-dom";
import Dashboardstudent from "../Tests/Thrashbotlipit/Dashboardstudent"

function DashboardPage() {
  const {getClasses, joinClass ,classes} = StudentStores();
  const {user,logout} = useAuthstore();
  const [content, setContent] = useState(<Dashboardstudent/>);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [link, setLink] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        await getClasses();
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
      await joinClass(link);
    } catch (error) {
      console.log(error);
    }
  };

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  const handlePlusClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleLinkSubmit = () => {
    setLink(link);
    console.log(link);
    handleJoinClass();
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto h-screen bg-main flex">
      <Sidebar
        classes={classes}
        handleLogout={handleLogout}
        onContentChange={handleContentChange}
      />
      <div className=" flex w-screen h-screen overflow-auto">
        <div className="w-9/12 xl:ml-72 ml-52 xl:place-items-center content-area px-8 mt-2">{content}
        <div className="w-auto fixed right-0 top-0 h-screen bg-white rounded-xl">
          {" "}
          <div className="px-5">
            <div className="grid gap-5 my-10">
              <ul className="grid gap-5">
                <li>
                  <div className="cursor-pointer" onClick={() => setContent(<Profilepage profilePic={user?.ProfilePicUrl} />)}>
                  <img src={user?.ProfilePicUrl|| profilealt} alt="Profile" className="w-10 h-10 rounded-full" />
                  </div>
                </li>
                <li className="place-items-center"><Bell /></li>
                <li className="place-items-center"><Settings/></li>
                <li className="place-items-center cursor-pointer" onClick={handlePlusClick}><Plus/></li>
                <li className="place-items-center cursor-pointer" onClick={()=>{
                  navigate("/")
                }}><Home/></li>
              </ul>
            </div>
            
          </div>
        </div>
        </div>
        
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl mb-4">Enter Link</h2>
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="border p-2 w-full mb-4"
            />
            <div className="flex justify-end space-x-4">
              <button onClick={handleModalClose} className="bg-gray-500 text-white p-2 rounded">Cancel</button>
              <button onClick={handleLinkSubmit} className="bg-blue-500 text-white p-2 rounded">Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DashboardPage;
