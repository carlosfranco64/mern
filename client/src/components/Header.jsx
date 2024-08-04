import React from "react";

import { FaTasks } from "react-icons/fa";


import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
// import { MdOutlineLightMode } from "react-icons/md";

import { useTask } from "../context/TaskContext";
import { useAuth } from "../context/AuthContext";

export const Header = () => {
  const { mode, handleModeDark, handleModeLight } = useTask();
  const { user } = useAuth();



  return (
    <div className={`${mode ? "text-white" :"text-black"} bg-zinc-900 w-full h-12 flex justify-between px-4 ${mode ? "bg-[#353535]  tex":"bg-[#3333332c] "}`}>
      <div className=" flex my-auto">
      <FaTasks className="h-8 w-8 mr-2" />
      <span className={`text-2xl font-bold  `}>Gestor De Tareas</span>
      </div>
      <div className="my-auto cursor-pointer text-4xl ">
        {mode ? (
          <MdDarkMode className="" onClick={handleModeDark} />
        ) : (
          <MdOutlineLightMode className="" onClick={handleModeLight} />
        )}
      </div>
    </div>
  );
};
function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}