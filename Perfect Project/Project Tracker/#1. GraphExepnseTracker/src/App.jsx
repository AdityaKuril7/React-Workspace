import { useState } from "react"
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";



function Buttons(props) {
  return (
    <button
      className="w-30 bg-blue-500 p-3 rounded-2xl border-none text-[20px] transition-all hover:scale-105"
      onClick={() => props.setView(props.name)}
    >
      {props.name}
    </button>
  )
}
function AddExpense({ setExpense, expense, setView, total, setTotal }) {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const handleAdd = () => {
    const updateTotal = total += Number(amount)
    setTotal(updateTotal)
    localStorage.setItem("Total", JSON.stringify(updateTotal));
    const updateExpense = [{
      category: category,
      description: description,
      amount: amount,
      date: date
    }, ...expense]
    setExpense(updateExpense);
    localStorage.setItem("Expenses", JSON.stringify(updateExpense))
    setView("List")
  }
  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-[450px] h-[103%] flex flex-col gap-4 text-white">
      <h2 className="text-2xl font-semibold text-center mb-4">Add Expense</h2>

      <div className="flex flex-col">
        <label className="mb-1 font-medium">Category</label>
        <select
          className="p-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Shopping">Shopping</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label className="mb-1 font-medium">Description</label>
        <input
          className="p-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="e.g. Coffee With Friends"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 font-medium">Amount</label>
        <input
          className="p-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 font-medium">Date</label>
        <input
          className="p-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <button
        onClick={handleAdd}
        className="mt-4 bg-blue-500 hover:bg-blue-600 transition-all rounded-xl p-3 font-semibold text-white">
        Add Expense
      </button>
    </div>
  );
}
function ShowLists({ expense, setExpense, setTotal }) {
  const handleDelete = (index) => {
    const updateExpense = expense.filter((_, i) => i !== index)
    setExpense(updateExpense)
    localStorage.setItem("Expenses", JSON.stringify(updateExpense))

    const newTotal = updateExpense.reduce(
      (acc, item) => acc + Number(item.amount),
      0
    );
    setTotal(newTotal);
    localStorage.setItem("Total", newTotal);
  }
  return (
    <div className="list-container bg-gray-800 overflow-scroll p-6 rounded-2xl shadow-lg w-[450px] h-[103%] flex flex-col gap-4 text-white">
      <div className="flex items-center justify-center">
        <p className="font-semibold text-[20px]">History</p>
      </div>
      {expense.map((value, index) => (
        <div
          key={index}
          className="bg-gray-700 rounded-lg p-4 flex flex-col gap-3 shadow-md hover:shadow-xl transition-all duration-200"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-green-400">{value.category}</h3>
            <span className="text-xs text-gray-400">{value.date}</span>
          </div>

          <p className="text-gray-300">{value.description}</p>

          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-green-300">₹{value.amount}</span>

            <button
              onClick={() => handleDelete(index)}
              className="bg-red-500 hover:bg-red-800 text-black font-semibold px-3 py-1 rounded-md shadow-md transition">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}


function Stats({ expense }) {
  const categoryTotals = expense.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + Number(item.amount);
    return acc;
  }, {});

  const data = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        label: "Expenses by Category",
        data: Object.values(categoryTotals),
        backgroundColor: ["#f87171", "#60a5fa", "#34d399", "#facc15", "#a78bfa"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-[450px] h-[103%] text-white">
      <h2 className="text-xl font-semibold mb-4 text-center">Expense Breakdown</h2>
      <Pie data={data} />
    </div>
  );
}




function App() {
  const [total, setTotal] = useState(() => {
    const savedTotal = localStorage.getItem("Total");
    return savedTotal ? JSON.parse(savedTotal) : 0
  });
  const [view, setView] = useState("App");
  const [expense, setExpense] = useState(() => {
    const savedExpense = localStorage.getItem("Expenses")
    return savedExpense ? JSON.parse(savedExpense) : []
  });
  return (
    <div className="App flex flex-col items-center bg-gray-900 w-[100vw] h-[100vh] text-white">
      <header className="flex flex-col items-center mt-5">
        <p className="text-3xl font-semibold" >
          Expense Tracker
        </p>
        <p className="mt-3 text-2xl">
          Total Expense <span className="text-red-700">₹{total}</span>
        </p>
      </header>
      <nav className="flex gap-10 mt-5">
        <Buttons setView={setView} name="App" />
        <Buttons setView={setView} name="List" />
        <Buttons setView={setView} name="Stats" />
      </nav>
      <main className="w-[90vw] h-[70vh] mt-10 p-5 flex justify-center">
        {view == "App" ? <AddExpense total={total} setTotal={setTotal} setExpense={setExpense} expense={expense} setView={setView} /> : null}
        {view == "List" ? <ShowLists setTotal={setTotal} setExpense={setExpense} expense={expense} /> : null}
        {view == "Stats" ? <Stats expense={expense} /> : null}
      </main>
    </div>
  )
}
export default App