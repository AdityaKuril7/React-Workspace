import React from "react";

function Card(props) {
  const handleClick = () =>{
    window.location.href =`https://www.pokemon.com/us/pokedex/${props.name}`
  }
  return (
    <div onClick={handleClick} className="card h-45 w-full shadow-lg transition-all duration-300 hover:translate-y-[-5px] shadow-black/50 rounded-3xl backdrop-blur-sm bg-white/10 p-4 flex flex-col items-center justify-center">
      <img src={props.image} alt="" className="h-100" />
      <p className="text-2xl mb-2 text-black font-bold">{props.name}</p>
    </div>
  );
}

export default Card;
