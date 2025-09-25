
import React, { useState } from "react";

function App() {
  const [expense, setExpense] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : {};
  });

  const handleClick = () => {
    const title = document.getElementById("getTitle").value.trim();
    const amount = document.getElementById("getAmount").value;
    if (title && amount) {
      setExpense((prevExpense) => {
        const newExpense = { ...prevExpense, [title]: Number(amount) };
        localStorage.setItem("expenses", JSON.stringify(newExpense));
        return newExpense;
      });
      document.getElementById("getTitle").value = "";
      document.getElementById("getAmount").value = "";
    } else {
      alert("Please enter valid title and amount");
    }
  };

  const handleRemove = (e) => {
    const title = e.target.getAttribute("data-title");
    setExpense((prevExpense) => {
      const newExpense = { ...prevExpense };
      delete newExpense[title];
      localStorage.setItem("expenses", JSON.stringify(newExpense));
      return newExpense;
    });
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>TrackExpense</h1>
        <p className="subtitle">Manage your expenses efficiently</p>
      </header>
      <main className="app-main">
        <section className="form-section">
          <h2>Add New Expense</h2>
          <div className="form-group">
            <label htmlFor="getTitle">Title</label>
            <input type="text" id="getTitle" className="input-title" placeholder="e.g. Groceries" />
          </div>
          <div className="form-group">
            <label htmlFor="getAmount">Amount</label>
            <input type="number" id="getAmount" className="input-amount" placeholder="e.g. 100" />
          </div>
          <button className="add-btn" onClick={handleClick}>Add Expense</button>
        </section>
        <section className="expenses-section">
          <h2>Expenses</h2>
          <div className="expenses-list">
            {Object.entries(expense).length === 0 ? (
              <p className="empty-msg">No expenses added yet.</p>
            ) : (
              Object.entries(expense).map(([key, value]) => (
                <div className="expense-item" key={key}>
                  <span className="expense-title">{key}</span>
                  <span className="expense-amount">${value}</span>
                  <button className="remove-btn" data-title={key} onClick={handleRemove} title="Remove">Remove</button>
                </div>
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;