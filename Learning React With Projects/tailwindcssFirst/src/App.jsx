import { useEffect, useState } from "react"

function App(){
   const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  let x = false; // store state globally

const handleClicked = () => {
  let getContainer = document.getElementById("contai")

  if (x) {
    getContainer.classList.remove("changecolortoblack")
    getContainer.classList.add("changecolortowheat")
  } else {
    getContainer.classList.remove("changecolortowheat")
    getContainer.classList.add("changecolortoblack")
  }

  x = !x  // flip value
}
  return(
    <div className="flex bg-gray-800 text-white justify-center items-center h-[100vh]">
      <div  id="contai" className="container flex h-[630px] w-[1000px] shadow-2xl rounded-2xl shadow-gray-950">
        <div onMouseOver={handleClicked} className="sidebar h-[630px] w-[70px] bg-blue-400 rounded-l-2xl">
        </div>
        <div className="headings font-serif">
          <p className="ml-10 mt-10 font-bold text-5xl">Revolution</p>
          <p className="text-[30px] ml-10 mt-3 font-bold mb-0">Nike Revolution 7</p>
          <p className="text-[30px] ml-10 mt-0 font-bold text-green-400">₹ 3 695.00</p>
          <p className="text-[30px] ml-10 mt-5">Step In.</p>
          <p className="text-[30px] ml-10 mt-0">Run Free.</p>
          <p className="text-[30px] ml-10 mt-0">Feel the Cushion</p>
          <p className="text-[30px] ml-10 mt-0">Grip the Road.</p>
          <p className="text-[30px] ml-10 mt-0">Own Every Mile</p>
          <button className="border-none ml-10 mt-10 bg-violet-950 text-w p-2 rounded-2xl text-lg">Add Cart</button>
        </div>
        <div className="images">
          <h1 className="flex-10 h-10 text-2xl font-serif items-center justify-end text-right mt-2 mb-0">{time.toLocaleDateString()}</h1>
          <img className="scale-125 rotate-340 translate-y-[-80px]" src="./src/assets/shoose.png" alt="shoose image" />
        </div>
      </div>
    </div>
  )
}
export default App