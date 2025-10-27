import React from "react";
import {
  FaAlignJustify,
  FaHistory,
  FaPlus,
  FaQuestion,
  FaQuestionCircle,
} from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

function SideBar() {
  return (
    <div className="sidebar grid grid-rows-2 bg-gray-900 text-white fixed top-0 left-0 h-screen w-15">
      <div className="mt-8 space-y-10 text-2xl">
        <div className="ml-5">
          <FaAlignJustify />
        </div>
        <div onClick={()=>location.reload()} className="h-10 w-10 ml-3 flex justify-center items-center rounded-[50%] bg-black/50 text-white">
          <FaPlus />
        </div>
      </div>
      <div className="flex flex-col justify-end m-5 space-y-5 text-2xl">
        <FaHistory />
        <FaQuestionCircle />
        <FaGear />
      </div>
    </div>
  );
}

export default SideBar;
