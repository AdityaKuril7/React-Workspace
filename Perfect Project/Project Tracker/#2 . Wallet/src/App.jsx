// App.jsx
import { useState, useEffect } from "react";
import Card from "./Card.jsx";

function App() {
    const [expenses, setExpenses] = useState(() => {
        const savedExpenses = localStorage.getItem("expenses");
        return savedExpenses ? JSON.parse(savedExpenses) : [];
    });

    const [filterExpense, setFilterExpense] = useState([]);
    const [total, setTotal] = useState(0);
    const [search, setSearch] = useState("");
    const [showCard, setShowCard] = useState(false);

    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenses));

        setFilterExpense(
            expenses.filter((expense) =>
                expense.title.toLowerCase().includes(search.toLowerCase())
            )
        );

        const totalAmount = expenses.reduce(
            (acc, curr) => acc + Number(curr.amount),
            0
        );
        setTotal(totalAmount);
    }, [expenses, search]);

    const handleAdd = () => {
        setShowCard(!showCard);
    };
    const handleRemove = (index) => {
        const update = expenses.filter((_, i) => i !== index);
        setExpenses(update);
    };

    return (
        <div className="container bg-gradient-to-b from-black to-red-800 w-[100vw] h-[100vh]">
            <div className="heading flex flex-row gap-10 p-5">
                <h1 className="heading text-5xl mt-5 text-white mb-5">
                    Wallet
                </h1>
                <input
                placeholder="Search Expenses"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                className="border mt-5 w-[80%] bg-white rounded-2xl p-2 text-2xl text-center"
            />
            </div>
            <p className="text-2xl text-red-600 font-bold">-₹{total}</p>
            <button
                onClick={handleAdd}
                className="bg-gradient-to-r text-white border-none bg-blue-800 transition-transform hover:scale-105 p-3 font-bold mt-5 mb-5 rounded-2xl text-2xl"
            >
                Add Expense
            </button>
            

            {showCard && (
                <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm">
                    <div className="bg-white p-6 rounded-2xl shadow-xl w-96">
                        <Card
                            showCard={showCard}
                            setShowCard={setShowCard}
                            setExpenses={setExpenses}
                        />
                    </div>
                </div>
            )}

            {filterExpense.map((value, index) => (
                <div className="cards flex justify-center" key={value.id}>
                    <div className="bg-gradient-to-r from-blue-950 to-red-950 text-white rounded-2xl shadow-lg p-5 m-3 w-[80%] md:w-[50%] transition-transform transform hover:scale-105">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-semibold">{value.title}</h2>
                            <button
                                className="text-red-300 hover:text-red-500 text-2xl"
                                onClick={() => handleRemove(index)}
                            >
                                ❌
                            </button>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <p className="text-3xl font-bold">₹{value.amount}</p>
                            <span className="text-sm opacity-80">{value.date}</span>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    );
}

export default App;
