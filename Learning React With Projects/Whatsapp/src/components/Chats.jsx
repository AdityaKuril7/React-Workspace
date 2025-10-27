import React from "react";
import { FaCamera } from "react-icons/fa";

function Chats(props) {
  return (
    <div className="m-3 rounded-2xl border border-white">
        <ul>
             <li className="py-3 sm:py-4">
                <div className="flex items-center">
                    <div className="shrink-0">
                        <img className="ml-4 w-8 h-8 rounded-full" src={props.imageurl} alt="Neil image" />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {props.name}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {props.email}
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold mr-5 text-gray-900 dark:text-white">
                        <FaCamera />
                    </div>
                </div>
            </li>
        </ul>
    </div>
  );
}

export default Chats;
