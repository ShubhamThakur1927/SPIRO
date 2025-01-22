import { UsersRound } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function Video() {
  return (
    <div className="max-w-screen min-h-screen bg-main flex">
      <div className="sidebar w-1/4 shadow-2xl shadow-black border-4 border-main rounded-r-3xl">
        <div className="my-5 mx-20">
          <Link to="/">
            <span className="text-h1 font-semibold text-primary leading-h1 text-center">
              SPIRO
            </span>
          </Link>
        </div>
        <div className="w-auto h-auto">
          <ul className="grid gap-5 mt-20">
            <li className="flex text-h2 leading-h2 items-center text-center justify-center gap-3"><UsersRound size={24} /><span className="pb-2">classes</span></li>
            <li className="flex text-h2 leading-h2 items-center text-center justify-center gap-3"><UsersRound size={24} /><span className="pb-2">classes</span></li>
            <li className="flex text-h2 leading-h2 items-center text-center justify-center gap-3"><UsersRound size={24} /><span className="pb-2">classes</span></li>
            <li className="flex text-h2 leading-h2 items-center text-center justify-center gap-3"><UsersRound size={24} /><span className="pb-2">classes</span></li>
            <li className="flex text-h2 leading-h2 items-center text-center justify-center gap-3"><UsersRound size={24} /><span className="pb-2">classes</span></li>
            <li className="flex text-h2 leading-h2 items-center text-center justify-center gap-3"><UsersRound size={24} /><span className="pb-2">classes</span></li>
          </ul>
        </div>
      </div>
      <div className="middle  w-full"></div>
      <div className="Left-Sidebar w-1/12 border-4 border-red-900"></div>
    </div>
  );
}

export default Video;
