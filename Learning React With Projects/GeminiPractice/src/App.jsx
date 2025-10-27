import React, { useState } from "react";
import {
  BsLine,
  BsSend,
  BsShare,
  BsShareFill,
  BsThreeDots,
} from "react-icons/bs";
import {
  FaCopy,
  FaEdit,
  FaNewspaper,
  FaPage4,
  FaStethoscope,
} from "react-icons/fa";
import { FaShare } from "react-icons/fa6";
import { GenerativeModel, GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from "react-markdown";

function App() {
  const api_key = "AIzaSyAUqhkqsSVIRJC1M-AU46C7Dfzc2odUhZA";
  const [userinput, setUserInput] = useState();
  const genAi = new GoogleGenerativeAI(api_key);
  const [history, setHistory] = useState([]);
  const [answer, setAnswer] = useState(false);

  const handleInput = () => {
    setHistory((h) => [...h, userinput]);
    setUserInput("");
    setAnswer(!answer);
    handleClick();
  };

  const handleClick = async () => {
    const model = genAi.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(userinput);
    const text = result.response.text();

    setHistory((h) => [...h, text]);
  };
  return (
    <>
      <div className="App bg-gray-900 h-screen w-auto flex flex-col justify-between items-center">
        <div className="header mt-10 flex w-[90%] mb-10 justify-between text-2xl text-white font-semibold font-serif">
          <div>
            <BsThreeDots />
          </div>
          <div>
            <h2>New Conversation</h2>
            <hr />
          </div>
          <div onClick={()=>location.reload()}>
            <FaEdit />
          </div>
        </div>
        <div className="main flex flex-col box-content break-words overflow-scroll scroll-auto text-black h-[100%] w-[90vw] ">
          {history.map((value, index) => (
            <div key={index}>
              <div className="mb-5">
                {index % 2 == 0 ? (
                  <span className="block bg-blue-900/20 text-white  p-2 rounded-2xl font-semibold font-serif">
                    <ReactMarkdown>{value}</ReactMarkdown>
                  </span>
                ) : (
                  <span className="block bg-cyan-500/20 text-white p-2 rounded-2xl  font-semibold font-serif">
                    <ReactMarkdown>{value}</ReactMarkdown>
                  </span>
                )}
                <button className="text-white">
                  <FaCopy />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="footer mt-10 flex justify-center items-center mb-10 text-white">
          <input
            value={userinput}
            onChange={(e) => setUserInput(e.target.value)}
            type="text"
            className="border font-serif font-semibold text-center w-[80vw] h-15 pl-2 mr-2 text-2xl text-white rounded-2xl"
          />
          <button
            onClick={handleInput}
            className="text-2xl rounded-2xl hover:bg-white hover:text-black font-extrabold duration-200 ease-in transition-all border h-15 justify-center items-center flex w-15"
          >
            <BsSend />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
