import React from "react";
import { FaImage, FaMicrophone } from "react-icons/fa";
import { useContext } from "react";
import { InputContext } from "../context/inputContext";
import { GenerativeModel, GoogleGenerativeAI } from "@google/generative-ai";

function Inputbox() {
  const { userinput, setUserInput, data, setData, inpHistory, setInpHistory } =
    useContext(InputContext);
  const api_key = "AIzaSyAUqhkqsSVIRJC1M-AU46C7Dfzc2odUhZA";
  const genAI = new GoogleGenerativeAI(api_key);
  const handlePrompt = async (event) => {
    if (event.key == "Enter") {
      setData((p) => [...p, userinput]);
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
      const result = await model.generateContent(userinput);
      const text = result.response.text();
      setData((data) => [...data, text]);
      setInpHistory((p) => [...p, userinput]);
      setUserInput("");
    }
  };
  return (
    <div className="flex justify-center items-center">
      <input
        type="text"
        className="border w-[60vw] h-10 rounded-4xl bg-gray-200 placeholder:pl-5 pl-5 text-[20px] font-semibold placeholder:text-[2z-0x]"
        placeholder="Enter a Prompt"
        onChange={(e) => setUserInput(e.target.value)}
        value={userinput}
        onKeyDown={(e) => handlePrompt(e)}
      />
      <div className="flex space-x-2 text-2xl bg-gray-900 p-2 ml-4 rounded-4xl text-white ">
        <FaMicrophone />
        <FaImage />
      </div>
    </div>
  );
}

export default Inputbox;
