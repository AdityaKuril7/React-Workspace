import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { mycontext } from "../context/MyContext";
function Navbar() {
  const { search, setSearch, data, setData } = useContext(mycontext);

  const handleSearch = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/v1/Userpost/");
      const filtered = res.data.filter(
        (item) => item.Username.toLowerCase() === search.toLowerCase()
      );
      setData(filtered);
      
    } catch (e) {
      console.log(e);
    }
  };
  

  return (
    <div className="bg-gray-900 fixed top-0 border-b-2 border-gray-700 text-white items-center w-screen overflow-hidden h-18 flex">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value) }
        onKeyDown={(e) => e.key === "Enter" && handleSearch(e)}
        type="text"
        placeholder="Search"
        className="flex-1 border placeholder:pl-0 border-white ml-[70px] pl-5 font-mono h-10 rounded-full"
      />
      <button className="btns ml-5" onClick={handleSearch}>
        Search
      </button>
      <div className="ml-3 border-l-2 border-gray-700 flex items-center h-15">
        <p className="px-5">Aditya Kuril</p>
      </div>
    </div>
  );
}

export default Navbar;
