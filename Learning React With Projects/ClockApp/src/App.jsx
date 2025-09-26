import {useState,useEffect} from "react"
function App(){
  const [time,setTime] = useState(new Date().toLocaleTimeString())
  useEffect(()=>{
    const interval = setInterval(()=>{
      setTime(new Date().toLocaleTimeString())
    },1000)

    return () => clearInterval(interval);
  },[]);
  return(
    <div className="card">
      <h1>{time}</h1>
    </div>
    
  );
}
export default App