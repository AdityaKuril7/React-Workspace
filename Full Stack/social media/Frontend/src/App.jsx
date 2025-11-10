import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { mycontext } from "../context/MyContext";

function App() {
  const [addCard, setAddCard] = useState(false);
  const [data,setData] = useState([])
  const [search, setSearch] = useState("");

  return (
    <mycontext.Provider value={{ search,setSearch,addCard, setAddCard,data,setData }}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </mycontext.Provider>
  );
}

export default App;
