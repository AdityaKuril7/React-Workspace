import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { mycontext } from "../context/MyContext";
import AddCard from "../components/AddCard";
import axios from "axios";
import { useEffect } from "react";
import DisplayCard from "../components/DisplayCard";
function Home() {
  const { addCard, setAddCard, data, setData } = useContext(mycontext);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://127.0.0.1:8000/api/v1/Userpost/");
      setData(res.data);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <Navbar />
      <Sidebar />
      {addCard ? (
        <AddCard />
      ) : (
        <div className="main w-[calc(100vw-64px)] overflow-scroll h-[calc(100vh-64px)] ml-16 mt-16 bg-gray-950">
          <div className="flex flex-wrap p-15 gap-x-15 gap-y-10 ">
            {data.map((post, index) => (
              <DisplayCard key={index} post={post} index={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
