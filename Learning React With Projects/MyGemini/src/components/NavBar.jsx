import React from "react";

function NavBar() {
  return (
    <div className="navbar flex bg-gray-900 text-white w-screen  top-0 justify-between">
      <div className="heading m-7 ml-20">
        <p className="font-semibold text-[25px]">Gemini</p>
      </div>
      <div>
        <img
          src="src/assets/tree.jpg"
          className="w-10 m-7 h-10 rounded-[50%] "
          alt="Profile"
        />
      </div>
    </div>
  );
}

export default NavBar;
