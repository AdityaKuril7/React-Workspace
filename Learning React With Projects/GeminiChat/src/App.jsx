import React, { useState } from 'react'
import { FaShare } from 'react-icons/fa'
import { GenerativeModel, GoogleGenerativeAI } from '@google/generative-ai';

function App() {

  const api_key = 'AIzaSyAUqhkqsSVIRJC1M-AU46C7Dfzc2odUhZA'
  const genAI = new GoogleGenerativeAI(api_key)

  const [inp, setInp] = useState();
  const [data, setData] = useState([]);
  const handleClick = () => {
    setData(data=>[...data,inp])
    setInp("")
    generateContent()
  }
  const generateContent = async () => {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" })
    const result = await model.generateContent(inp);
    const text = result.response.text();
    setData(data => [...data, text])
  }
  const handleKeyDown = (e) => e.key == "Enter" ? handleClick() : null;
  return (
    <div className="App flex justify-center items-center h-[100vh]  ">
      <div className="container flex flex-col bg-gray-950 overflow-scroll text-white h-[100vh] w-[100vw] justify-center   p-10 ">
        <div className="chats overflow-scroll h-[90vh]">
          {data.map((value, index) => (
            <div>
              <p key={index} className={`text-4xl font-semibold font-serif mb-10 mt-10 ${index%2==0 ? 'text-green-500':'text-white'} `}>{value}</p>
              <hr />
            </div>
            
          ))}
        </div>
        <div className="inputs flex justify-center">
          <div>
            <input type="text" onKeyDown={(e) => handleKeyDown(e)} value={inp} onChange={(e) => setInp(e.target.value)} className='border pl-5 text-4xl font-semibold font-serif  w-[70vw] h-15 rounded-2xl' />
          </div>
          <div className='w-20 flex justify-center items-center'>
            <button className='text-5xl ml-5' onClick={handleClick}>{<FaShare />}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App