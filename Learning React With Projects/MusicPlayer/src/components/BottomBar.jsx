import React from "react";
import {
  FaBook,
  FaBorderAll,
  FaHome,
  FaPause,
  FaSearch,
  FaUser,
} from "react-icons/fa";
function BottomBar() {
  return (
    <div className="footer flex justify-center rounded-tr-4xl rounded-tl-4xl bg-white w-screen h-20 fixed bottom-0">
      <div className="icons flex justify-evenly w-screen items-center">
        <div className="home flex justify-center flex-col items-center">
          <p className="text-4xl text-black/85">
            <FaHome />
          </p>
          <p>Home</p>
        </div>
        <div className="search flex justify-center flex-col items-center">
          <p className="text-4xl text-black/85">
            <FaSearch />
          </p>
          <p>Search</p>
        </div>
        <div className="search flex justify-center flex-col items-center">
          <p className="text-4xl text-black/85">
            <FaPause />
          </p>
          <p>Stop</p>
        </div>
        <div className="Library flex justify-center flex-col items-center">
          <p className="text-4xl text-black/85">
            <FaBook />
          </p>
          <p>Library</p>
        </div>
        <div className="Library flex justify-center flex-col items-center">
          <p className="text-4xl text-black/85">
            <FaUser />
          </p>
          <p>Profile</p>
        </div>
      </div>
    </div>
  );
}

export default BottomBar;
