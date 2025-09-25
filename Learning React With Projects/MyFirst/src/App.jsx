import { useState } from "react"
function App() {
  const [color,setColor]=useState("")

  const handleClick = () => {
    console.log(input)
  }
  return (
    <>
      <div className="box" style``={{backgroundColor: color}}>
          <h1>color = {color}</h1>
      </div>
      <input type="color" value={color} onChange={(e)=>setColor(e.target.value)} />

    </>
  )
}

export default App