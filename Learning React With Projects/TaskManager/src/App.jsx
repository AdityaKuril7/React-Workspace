import {useState,useEffect} from 'react'
function App(){
  const [expense,setExpense] = useState(()=>{
    const savedTask = localStorage.getItem("expenseList");
    return savedTask ? JSON.parse(savedTask) : {}
  })
  useEffect(()=>{
    localStorage.setItem("expenseList",JSON.stringify(expense))
  },[expense])
  const handleClick = () =>{
    const getExpense = document.getElementById("getExpense");
    const getAmount = document.getElementById("getAmount");
    setExpense((prev)=> ({...prev,[getExpense]:Number(getAmount)}))
  }
  return(
    <div>
      <h1>Expense Tracker</h1>
      <label htmlFor="">Title</label>
      <input type="text" id="getExpense" /><br />
      <label htmlFor="">Amount</label>
      <input type="text" id="getAmount" />
      <button onClick={handleClick}>Add Expense</button>
      {Object.entries(expense).map(([key,pair])=>(
        <div key={key}>
          <ul>
            <li>{key}</li>
          </ul>
        </div>
      ))}
    </div>
    
  )
}
export default App