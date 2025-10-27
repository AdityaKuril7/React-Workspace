import React from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
function Cards(props) {
  return (
    <div>
      <div className="card h-40 hover:scale-105 transition-all duration-200 rounded-3xl ml-5 mt-5">
        <img className="w-70" src={props.imageurl} />
      </div>
      <div className="flex justify-center items-center">
        <p className="ml-5 font-semibold font-serif mt-2 text-white text-[15px]">
          {props.author}
        </p>
      </div>
    </div>
  );
}

export default Cards;
