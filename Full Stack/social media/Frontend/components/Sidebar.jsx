import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import { mycontext } from "../context/MyContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
function Sidebar() {
  const { addCard, setAddCard } = useContext(mycontext);
  const handleAddClick = () => {
    setAddCard(!addCard);
  };
  return (
    <div className="fixed top-0 flex flex-col h-screen border-r-2 border-gray-700 w-16 bg-gray-900 ">
      <div className="h-18 p-2 border-b-2 border-gray-700 ">
        <img src="assets/@.png" className="rounded-full" alt="" />
      </div>
      <div className="buttons flex justify-center mt-5 text-3xl">
        <button className="text-white " onClick={handleAddClick}>
          <FaPlusCircle />
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
