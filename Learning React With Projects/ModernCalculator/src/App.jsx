import React, { useEffect, useState } from 'react'

function App() {
  const [val,setVal] = useState('');
  const [time,setTime] = useState(new Date().toLocaleTimeString())

  useEffect(()=>{
    setInterval(()=>{
      setTime(new Date().toLocaleTimeString())
    },1000)
    return
  },[time])

  const handleKey = (e) =>{
    if(e.target.value =="Ac"){
      setVal(v=>"")
    }else if (e.target.value == "="){
        let result = eval(val)
        setVal(result)
    }else{
      setVal(val=>val+=e.target.value)
    }
    
    
  }
  return (
    <div className="App flex justify-center w-[100vw] bg-blue-300 items-center h-[100vh] ">
        <div className="calculator rounded-4xl  flex flex-col h-auto w-auto justify-center items-center p-12 shadow-black shadow-lg ">
          
          <div className="time">
            <p className='text-black text-5xl mb-10 font-bold stroke-3 font-mono '>{time}</p>
          </div>

          <div className="date">
            <p className='text-black text-5xl mb-10 font-bold stroke-3 font-mono '>{new Date().toLocaleDateString()}</p>
          </div>

          <div className="inputfield flex justify-center items-center">
            <input type="text" readOnly value={val} className=' shadow-md mb-10 text-black shadow-black w-150 m-2 rounded-2xl text-6xl font-extrabold text-right pr-10 h-20' />
          </div>

          <div className="keys grid grid-cols-4 justify-center items-center grid-rows-4 w-150">
            <button onClick={(e)=>handleKey(e)} value={"="} className='btns'>=</button>
            <button onClick={(e)=>handleKey(e)} value={"Ac"} className='btns'>Ac</button>
            <button onClick={(e)=>handleKey(e)} value={"."} className='btns'>.</button>
            <button onClick={(e)=>handleKey(e)} value={"+"} className='btns'>+</button>
            <button onClick={(e)=>handleKey(e)} value={"7"} className='btns'>7</button>
            <button onClick={(e)=>handleKey(e)} value={"8"} className='btns'>8</button>
            <button onClick={(e)=>handleKey(e)} value={"9"} className='btns'>9</button>
            <button onClick={(e)=>handleKey(e)} value={"-"} className='btns'>-</button>
            <button onClick={(e)=>handleKey(e)} value={"4"} className='btns'>4</button>
            <button onClick={(e)=>handleKey(e)} value={"5"} className='btns'>5</button>
            <button onClick={(e)=>handleKey(e)} value={"6"} className='btns'>6</button>
            <button onClick={(e)=>handleKey(e)} value={"*"} className='btns'>*</button>
            <button onClick={(e)=>handleKey(e)} value={"1"} className='btns'>1</button>
            <button onClick={(e)=>handleKey(e)} value={"2"} className='btns'>2</button>
            <button onClick={(e)=>handleKey(e)} value={"3"} className='btns'>3</button>
            <button onClick={(e)=>handleKey(e)} value={"/"} className='btns'>/</button>
            <button onClick={(e)=>handleKey(e)} value={"0"} className='btns'>0</button>
          </div>
        </div>
    </div>
  )
}

export default App