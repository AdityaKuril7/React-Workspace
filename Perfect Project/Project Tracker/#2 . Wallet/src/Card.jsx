// Card.jsx
import { useState } from "react";

function Card({ showCard, setShowCard, setExpenses }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  function handleToggle() {
    setShowCard(!showCard);
  }
  function AddExpense(e) {
    e.preventDefault();
    if (!title || !amount) return;

    setExpenses((prev) => [
      {
        id: Date.now(),
        title: title,
        amount: amount,
        date: new Date().toLocaleDateString(),
      },
      ...prev,
    ]);

    setTitle("");
    setAmount("");
    setShowCard(false);
  }

  return (
    <div className="card-container flex flex-col items-center justify-center">
      <h1 className="font-bold text-3xl">Add Expense</h1>
      <label className="block mt-5" htmlFor="title">
        Title
      </label>
      <input
        id="getTitle"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border w-[100%] p-2 rounded-2xl ml-0 shadow shadow-black"
        type="text"
        placeholder="Enter Title"
      />
      <label className="block mt-5" htmlFor="amount">
        Amount
      </label>
      <input
        id="getAmount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border mb-5 w-[100%] p-2 rounded-2xl ml-0 shadow shadow-black"
        type="Number"
        placeholder="Enter Amount"
      />
      <div className="grid grid-cols-2 items-center justify-center gap-2">
        <button
          type="button"
          className="border bg-red-950 transition-transform hover:scale-105 text-white p-2 w-30 h-10 rounded-2xl"
          onClick={handleToggle}
        >
          Cancel
        </button>
        <button
          type="button"
          className="border bg-blue-950 transition-transform hover:scale-105 text-white p-2 w-30 h-10 rounded-2xl"
          onClick={AddExpense}
        >
          Add Expense
        </button>
      </div>
    </div>
  );
}

export default Card;
