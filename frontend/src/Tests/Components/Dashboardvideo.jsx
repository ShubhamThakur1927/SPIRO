import React, { useState } from "react";
import Descriptioncard from "./Descriptioncard";
import Dropdown from "../Thrashbotlipit/Dropdown";
import Suggestionsectioncard from "./Suggestionsectioncard";

function Dashboardvideo() {
  
  const [selectedOption, setSelectedOption] = useState("Select an Option");
  const options = ["Select an Option", "Option 1", "Option 2", "Option 3"];
  const suggestions = [
    { image: "/path-to-image1.png", title: "MODULE 1 (1.2)" },
    { image: "/path-to-image2.png", title: "MODULE 2 (1.3)" }
  ];
  return (
    <div className="bg-main w-screen">
      <div className=" p-3">
       <h1 className="text-primary text-h1 font-semibold p-2">SPIRO</h1>
      </div>
      <div className="p-6  min-h-screen flex">
      <div>
        
      </div>
      {/* Sidebar */}
      <Dropdown options={options} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      
      {/* Main Content */}
      <div className="w-4/5 p-6">
        <h1 className="text-xl font-bold">Welcome, to our Community !!!</h1>
        <div className="mt-4">
          <video className="w-full rounded-lg" controls>
            <source src="https://www.youtube.com/watch?v=8N2k-gv6xNE" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="mt-6 flex gap-4">
          {/* Description Section */}
          <Descriptioncard 
          title="Timepass" 
          referenceLink="https://www.youtube.com/results?search_query=timepass+movie" 
          />
          {/* Suggestions Section */}
          <Suggestionsectioncard suggestions={suggestions}/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Dashboardvideo;