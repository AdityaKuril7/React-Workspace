import React, { useEffect, useState } from "react";
import {
  FaBook,
  FaBorderAll,
  FaHome,
  FaPause,
  FaSearch,
  FaUser,
} from "react-icons/fa";
import Cards from "./components/Cards";
import { FaBookSkull } from "react-icons/fa6";
import BottomBar from "./components/BottomBar";
import NavBar from "./components/NavBar";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("MusicRecords.json");
      const jsondata = await response.json();
      setData(jsondata);
    };
    fetchData();
  }, []);

  return (
    <div className="App bg-blue-200 h-screen w-screen overflow-scroll">
      <NavBar />
      <div className="main grid grid-cols-5 overflow-scroll h-[84%]">
        {data.map((value, index) => (
          <Cards key={index} imageurl={value.thumbnail} author={value.author} />
        ))}
      </div>
      <BottomBar />
    </div>
  );
}

export default App;
