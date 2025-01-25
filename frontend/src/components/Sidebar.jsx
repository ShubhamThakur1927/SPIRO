import React,{useState} from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import { Bot, Calendar, CalendarRange, CheckCheck, ClapperboardIcon, Gamepad2, Gamepad2Icon, LogOut, MessageSquareCode, MessageSquareWarning, NotebookTabs, UsersRound } from "lucide-react";

function Sidebar(props) {
    const [isClicked, setIsClicked] = useState(false);
      const handleClick = () => {
        setIsClicked(!isClicked);
      };
    const title = props.title;
    title.map((item, index) => {
        return (
            <div key={index}>
                {item}
            </div>
        )
    })
  return (
    <>
      <div className="min-h-screen w-64 bg-white shadow-lg shadow-black rounded-r-3xl flex flex-col justify-between">

           {/*LOGO*/} 
        <div className="text-display leading-display text-primary font-semibold p-10">
          <Link to="/dashboard">SPIRO</Link>
        </div>
             {/*mid*/} 
        <div className="p-4 mx-5 flex-grow">
          <ul className="grid gap-10">
            <li className="text-h3 leading-h3 flex items-center gap-2">
              <Dropdown title={props.title[0]} subtitle={props.subtitle} icon={<UsersRound size={28} />}/>
            </li>
            <Link to="/*">
            <li className="text-h3 leading-h3 flex items-center gap-2">
              <span className="pt-1">
              <NotebookTabs size={28} />
              </span>
              {title[1]}
            </li>
            </Link>
            <Link to="/*">
            <li className="text-h3 leading-h3 flex items-center gap-2">
              <span className="pt-1">
                <CheckCheck size={28} />
              </span>
              {title[2]}
            </li>
            </Link>
            <Link to="/*">
            <li className="text-h3 leading-h3 flex items-center gap-2">
              <span className="pt-1">
                <CalendarRange size={28} />
              </span>
              {title[3]}
            </li>
            </Link>
            <Link to="/*">
            <li className="text-h3 leading-h3 flex items-center gap-2">
              <span className="pt-1">
                <MessageSquareCode size={28} />
              </span>
              {title[4]}
            </li>
            </Link>
            <li className="text-h3 leading-h3">
              <Dropdown
                title={title[5]}
                subtitle={["Games", "Simulations", "Quiz"]}
                icon={<Gamepad2 size={28} />}
              />
            </li>
          </ul>
        </div>
        {/* Logout */}
      <div className="p-4 mx-5">
        <button onClick={props.logout} className=" flex text-h3 leading-h3 items-center gap-2">
          <LogOut size={28} />
          Logout
        </button>
      </div>

      </div>
    </>
  );
}

export default Sidebar;
