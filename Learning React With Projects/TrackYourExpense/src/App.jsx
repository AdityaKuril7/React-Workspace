import { useState } from "react";
function App() {
	const [expense, setExpense] = useState(() => {
		const savedExpenses = localStorage.getItem("Expenses")
		return savedExpenses ? JSON.parse(savedExpenses) : []
	})
	const [total, setTotal] = useState(() => {
		return Number(localStorage.getItem("Total")) || 0
	})
	const [v,setV] = useState("");
	const [filteredExpenses,setFilteredExpenses] = useState(expense)

	function handleAdd(e) {
		e.preventDefault();
		const getTitle = document.getElementById("getTitle")
		const getAmount = document.getElementById("getAmount")
		const updateExpense = [{ id: Date.now(),Title: getTitle.value, Amount: getAmount.value,Time:new Date().toLocaleTimeString(),Date:new Date().toLocaleDateString()},...expense]
		setExpense(updateExpense)
		localStorage.setItem("Expenses", JSON.stringify(updateExpense))
		const newTotal = total - Number(getAmount.value)   // or + if it's income
		setTotal(newTotal)
		localStorage.setItem("Total", newTotal)
		getTitle.value = ""
		getAmount.value = ""
	}
	function handleRemove(value, index) {
		const updateExpense = expense.filter((val, i) => i !== index)
		setExpense(updateExpense)
		localStorage.setItem("Expenses", JSON.stringify(updateExpense))
		setTotal((t) => t += Number(value.Amount))
	}
	function handleSearch(e){
		const value = e.target.value.toLowerCase();
		if(value==""){
			setFilteredExpenses(expense)
		}
		setV(value)
		const updateExpense = expense.filter(
			(exp)=> exp.Title.toLowerCase().includes(value) 
			)
		setFilteredExpenses(updateExpense)
	}
	return (
		<div className="container">
			<div className="header">
				<div className="heading">
					<p>Expense Tracker</p>
				</div>
				<div className="Total-expense">
					<p style={{ display: "inline-block" }}>Total Expense</p>
					<p style={{ display: "inline-block", marginLeft: "20px", color: "red" }}>₹{total}</p>
				</div>
				<div className="Balence">
				</div>
			</div>
			<div className="main">
				<form action="#">
					<div className="title">
						<label htmlFor="title">Title</label>
						<input id="getTitle" type="text" />
					</div>
					<div className="amount">
						<label htmlFor="amount">Amount</label>
						<input id="getAmount" type="Number" />
					</div>
					<div className="btn">
						<button onClick={(e)=>handleAdd(e)}>Add Expense</button>
					</div>
				</form>
			</div>
			<div>
				<input type="text" value={v} onChange={(e)=>handleSearch(e)} />
			</div>
			<div className="history">
				{filteredExpenses.map((value, index) => {
					return (
						<div key={value.id} className="card">
							<div className="card-title">
								<p className="c-title" style={{marginBottom:"6px"}}>{value.Title}</p>
								<p style={{ color: "lightgreen",marginBottom:"5px",display:"inline" }}>₹{value.Amount}</p>
								<p style={{ color: "white",marginBottom:"0px" }}>Time - {value.Time} {value.Date }</p>

							</div>
							<div className="card-button">
								<button onClick={() => handleRemove(value, index)}>❌</button>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}
export default App