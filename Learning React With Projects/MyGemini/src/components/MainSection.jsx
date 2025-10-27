import React, { useContext } from "react";
import { InputContext } from "../context/inputContext";
import ReactMarkdown from 'react-markdown'
import { MarkdownTypewriter } from "react-markdown-typewriter";
function MainSection() {
  const { userinput, setUserInput, data, setData } = useContext(InputContext);
  return (
    <div className="display bg-white overflow-scroll h-[650px]">
      {data.map((res, i) => (
        <div key={i}>
          <p
            className={`${
              i % 2 == 0
                ? "text-green-700 text-right mr-10 mt-5"
                : "text-black ml-10 mt-5"
            } text-2xl font-bold`}
          >
            <MarkdownTypewriter delay={30}>{res}</MarkdownTypewriter>
          </p>
        </div>
      ))}
    </div>
  );
}

export default MainSection;
