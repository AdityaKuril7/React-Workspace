import React, { useState } from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/sidebar";
import MainSection from "./components/MainSection";
import Inputbox from "./components/Inputbox";
import { InputContext } from "./context/inputContext";
function App() {
  const [userinput, setUserInput] = useState("");
  const [inpHistory,setInpHistory] = useState([]);
  const [data, setData] = useState([]);
  const value = {
    userinput,
    setUserInput,
    data,
    setData,
    inpHistory,
    setInpHistory
  };
  return (
    <div className="App min-h-screen flex flex-col">
      <nav className="bg-white">
        <NavBar />
      </nav>

      <div className="flex flex-1">
        <aside className="bg-green-100 w-15 p-4">
          <SideBar />
        </aside>

        <main className="main  h-0 flex-1 p-4">
          <InputContext.Provider value={value}>
            <MainSection />
          </InputContext.Provider>
        </main>
      </div>

      <footer className="bg-white flex justify-center items-center ml-15 p-4 text-center fixed bottom-5 rounded-4xl right-50">
        <InputContext.Provider value={value}>
          <Inputbox />
        </InputContext.Provider>
      </footer>
    </div>
  );
}

export default App;
