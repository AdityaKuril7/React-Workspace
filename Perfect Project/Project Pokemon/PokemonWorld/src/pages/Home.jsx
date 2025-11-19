import React, { useEffect, useRef, useState } from "react";
import bg from "../assets/Pikachu.jpg";
import Card from "../components/Card";

function Home() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    const fetchData = async () => {
      inputRef.current.focus();

      const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const d = await res.json();

      // Fetch details for each Pokémon
      const detailedData = await Promise.all(
        d.results.map(async (p) => {
          const res2 = await fetch(p.url);
          return await res2.json(); // contains sprites
        })
      );
      setData(detailedData);
    };

    fetchData();
  }, []);
  const filterd = data.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div
      className="App bg-cover flex flex-col bg-center bg-no-repeat  h-screen w-screen"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="heading w-screen mt-5 h-45 flex flex-col  items-center">
        <div className="w-100 text-center">
          <h1 className="text-[30px] text-center text-black/50 font-extrabold">
            Welcome to Pokemon World
          </h1>
        </div>
        <input
          ref={inputRef}
          type="text"
          className="bg-gray-200 placeholder:text-center pl-5 font-bold mt-5 text-2xl w-90 h-15 rounded-4xl"
          placeholder="Search Pokemon"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="main m-2 overflow-scroll grid mt-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 ">
        {filterd.map((value, index) => (
          <Card
            key={index}
            value={value}
            image={value.sprites.front_default}
            name={value.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
