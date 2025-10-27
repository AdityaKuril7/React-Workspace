import React from "react";
import NavBar from "../components/NavBar";
import Chats from "../components/Chats";
import Navigations from "../components/Navigations";

function Home() {
  return (
    <div className="Home bg-gray-950 h-screen w-screen overflow-scroll">
      <NavBar />
      <main className="overflow-scroll h-[63vh]">
        <Chats
          name={"Aditya"}
          imageurl={"src/assets/user.jpg"}
          email={"abc@gmail.com"}
        />
        <Chats
          name={"Ritesh"}
          imageurl={"src/assets/user.jpg"}
          email={"abc@gmail.com"}
        />
        <Chats
          name={"Rahul"}
          imageurl={"src/assets/user.jpg"}
          email={"abc@gmail.com"}
        />
        <Chats
          name={"Bake"}
          imageurl={"src/assets/user.jpg"}
          email={"abc@gmail.com"}
        />
        <Chats
          name={"Bhima"}
          imageurl={"src/assets/user.jpg"}
          email={"abc@gmail.com"}
        />
        <Chats
          name={"Mummy"}
          imageurl={"src/assets/user.jpg"}
          email={"abc@gmail.com"}
        />
        <Chats
          name={"Pappa"}
          imageurl={"src/assets/user.jpg"}
          email={"abc@gmail.com"}
        />
        <Chats
          name={"Rajesh"}
          imageurl={"src/assets/user.jpg"}
          email={"abc@gmail.com"}
        />
        <Chats
          name={"Bhakti"}
          imageurl={"src/assets/user.jpg"}
          email={"abc@gmail.com"}
        />
        <Chats
          name={"Radhika"}
          imageurl={"src/assets/user.jpg"}
          email={"abc@gmail.com"}
        />
      </main>
      <Navigations />
    </div>
  );
}

export default Home;
