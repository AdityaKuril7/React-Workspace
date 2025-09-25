import { useEffect, useState } from "react"

function App(){
  const [pins,setPins] = useState([]);
  const url = "http://www.omdbapi.com/?i=tt3896198&apikey=e7c1a319"
  useEffect(()=>{
    const get = async () =>{
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      
    }
    get();
  },[])
  return(
    <div className="view grid grid-cols-5 m-5">
      {pins.map((value,index)=>(
        <div className="photo m-5">
          <img className="" src={value.image} alt={value.title} />
          <p className="text-center mt-5 border rounded-2xl bg-violet-900 text-white p-2">{value.title}</p>
        </div>
      ))}
    </div>
  )
}
export default App