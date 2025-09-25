import { useState } from "react";
function App() {
  const [expense, setExpense] = useState(() => {
    const savedExpense = localStorage.getItem("ExpenseList");
    return savedExpense ? JSON.parse(savedExpense) : []
  });
  function handleClick(e) {
    e.preventDefault()
    let getTitle = document.getElementById("getTitle");
    let getAmount = document.getElementById("getAmount");
    // const updatedExpense = ((e)=> [{id:Date.now(),title:getTitle.value,amount:getAmount.value,date:new Date().toLocaleDateString()},...e]);
    // localStorage.setItem("ExpenseList",JSON.stringify(updatedExpense));
    // setExpense(updatedExpense);
    setExpense(prev => {
      const update = [{
        id: Date.now(),
        title: getTitle.value,
        amount: getAmount.value,
        date: new Date().toLocaleDateString()
      }, ...prev]
      localStorage.setItem("ExpenseList", JSON.stringify(update))
      return update
    })

  }
  function removeItem(index) {
    // const updatedExpense = expense.filter((value,i)=> i!==index);
    // setExpense(updatedExpense)
    // localStorage.setItem("ExpenseList",JSON.stringify(updatedExpense));
    setExpense(prev => {
      const update = prev.filter((_, i) => i !== index);
      localStorage.setItem("ExpenseList", JSON.stringify(update))
      return update
    })
  }
  return (
    <>
      <div className="Bigcontainer flex justify-center h-[100vh]">

        <div className="container w-[100vh] m-5 p-5 flex flex-col rounded-3xl bg-blue-900 text-white items-center">
          <div className="heading flex flex-col items-center">
            <p className="text-5xl font-serif mt-10 mb-5">
              Expense Tracker
            </p>
            <p className="inline text-2xl">
              Total Expense
              <p className="inline"> ${ }</p>
            </p>
          </div>
          <div className="main flex flex-col justify-center items- mt-10 text-2xl w-[100%]">
            <label htmlFor="title" className="block text-left">
              Title
            </label>
            <input className="border p-3 mt-5 mb-5 rounded-2xl" id="getTitle" type="text" placeholder="Enter Title" />
            <label htmlFor="amount" className="block text-left ">
              Amount
            </label>
            <input className="border p-3 mt-5 mb-5 rounded-2xl" id="getAmount" type="text" placeholder="Enter Amount" />
            <div className="flex justify-center">
              <button className="border w-50 shadow-2xl shadow-black rounded-2xl p-3" onClick={handleClick}>Add Expense</button>
            </div>
          </div>
          <div className="footer overflow-auto flex flex-col justify-center items-center mt-10 w-[100%] p-10">
            {expense.map((value, index) => (
              // Second card design
              <div key={value.id} className="w-full max-w-md mb-6 mt-10">
                <div className="flex items-center bg-gradient-to-r from-blue-500 to-blue-300 rounded-2xl shadow-xl p-6 transition-transform hover:scale-105">
                  <div className="flex-1">
                    <h3 className="text-2xl font-extrabold mb-1 text-white">{value.title}</h3>
                    <div className="flex items-center mb-1">
                      <span className="text-lg font-bold text-yellow-200 mr-2">${value.amount}</span>
                      <span className="text-xs text-blue-100 bg-blue-700 px-2 py-1 rounded-full">{value.date}</span>
                    </div>
                  </div>
                  <button
                    className="ml-6 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-4 py-2 rounded-xl shadow-lg transition-colors"
                    onClick={() => removeItem(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App