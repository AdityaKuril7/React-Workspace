import React from "react";
import { FaCamera, FaLine, FaQrcode } from "react-icons/fa";
import { TfiMoreAlt } from "react-icons/tfi";

function NavBar() {
  return (
    <nav className="grid grid-rows-3 mb-0 bg-gray-950 text-white rounded-bl-2xl rounded-br-2xl">
      <div className="heading flex">
        <div className="name flex-1">
          <h1 className="text-2xl m-5 font-bold">Whatsapp</h1>
        </div>
        <div className="icons flex items-center space-x-6 text-3xl mr-3">
          <div>
            <FaQrcode />
          </div>
          <div>
            <FaCamera />
          </div>
          <div>
            <TfiMoreAlt />
          </div>
        </div>
      </div>
      <div className="input justify-center mt-0 items-center flex">
        <input
          type="text"
          placeholder="Ask Meta ai or Search"
          className="border w-[95vw] h-15 rounded-4xl placeholder:pl-4 placeholder:text-white "
        />
      </div>
      <div className="buttons overflow-scroll grid grid-cols-4 justify-center items-center space-x-2 ml-2 ">
        <button className="btn">All</button>
        <button className="btn">Friends</button>
        <button className="btn">Unread</button>
        <button className="btn">+</button>
      </div>
    </nav>
  );
}

export default NavBar;
