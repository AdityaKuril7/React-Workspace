import React from "react";
import { FaSearch } from "react-icons/fa";

function NavBar() {
  return (
    <div className="header flex justify-between items-center">
      <div className="title mt-5 text-white ml-5 text-3xl font-bold font-serif">
        Weakely Hits
      </div>
      <div className="search mt-5 mr-10 text-3xl text-white">
        <FaSearch />
      </div>
    </div>
  );
}

export default NavBar;
