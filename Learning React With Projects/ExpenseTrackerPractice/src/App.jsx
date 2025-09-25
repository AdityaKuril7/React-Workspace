import { Component, useState, useEffect } from "react";
import Card from "./Card";
function App() {
  const [component,setComponenet] = useState([]);
  const [title,setTitle] = useState();
  const [amount,setAmount] = useState();
  const [time,setTime] = useState(new Date().toLocaleTimeString());
  const [count,setCount] = useState(0);
  useEffect(()=>{
    setInterval(()=>{
      setTime(new Date().toLocaleTimeString())
    },1000)
    return
  },[])

  const handleClick = () =>{
    event.preventDefault()
    let title = document.getElementById("getTitle").value;
    let amount = document.getElementById("getAmount").value;
    setComponenet([...component,<Card title={title} amount={amount}/>])
  }
  const handleRemove = () =>{

  }
  return (
    <div className="card">
      <div className="heading">
        <h1>Expense Tracker {time}</h1>
        <p>Total Expense  {new Date().toLocaleDateString()} </p>
      </div>
      <div className="content">
        <form action="@">
          <label htmlFor="title">Title {count}</label>
          <input id="getTitle" type="text" name="title" required /><br />
          <label htmlFor="amount">Amount</label>
          <input id="getAmount" type="Number" name="amount" required />
          <br />
          <div className="forbutton">
            <button onClick={handleClick} type="submit">Add Expense</button>
          </div>
        </form>
        <div  onClick={handleRemove} className="history">
          {component}
        </div>
      </div>
    </div>
  )
}
export default App;