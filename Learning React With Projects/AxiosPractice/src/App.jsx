import React, { useState } from 'react'
import axios from 'axios';
function App() {
  const [inp,setInp] = useState("");
  const handleClick = (e) =>{
    if(e.key=="Enter"){
      axios.post()
    }
  }
  return (
    <div className="App">
      <input type="text" className='border h-10' onKeyDown={(e)=>handleClick(e)} />
    </div>
  )
}

export default App