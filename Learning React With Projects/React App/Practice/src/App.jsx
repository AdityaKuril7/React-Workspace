import {useState} from "react";
import History from "./History.jsx";
function App(){
    const [balense,setBalense] = useState(0);
    const [income,setIncome] = useState(0);
    const [expense,setExpense] = useState(0);
    const handleClick = () =>{
        // let getDescription = document.getElementById("getDescription");
        let getAmount = document.getElementById("getAmount").value;
        // let getDate = document.getElementById("getDate");
        const result = Number(getAmount)
        setBalense(balense=> balense+result);
    }
    return(
        <div className={"container"}>
            <div className={"heading"}>
                <h1>Expense Tracker</h1>
                <button id={"clear-all"}>Clear All</button>
            </div>
            <div className={"container-card"}>
            <div className={"card"}>
                <span>Balense</span>
                <p>${balense}</p>
            </div>
            <div className={"card"}>
                <span>Income</span>
                <p>$0.00</p>
            </div>
            <div className={"card"}>
                <span>Expense</span>
                <p>-$0.00</p>
            </div>
            </div>
            <div className="Transaction">
                {/* Description full width */}
                <div className="form-group full">
                    <label htmlFor="Description">Description</label>
                    <input id={"getDescription"} className="inpDescription" type="text" placeholder="e.g. Coffee, Salary, Uber" />
                </div>

                {/* Amount */}
                <div className="form-group">
                    <label htmlFor="Amount">Amount</label>
                    <input id={"getAmount"} type="number" className="inpAmount" placeholder="0.00" />
                </div>

                {/* Date */}
                <div className="form-group">
                    <label htmlFor="Date">Date</label>
                    <input id={"getDate"} type="date" className="inpDate" defaultValue={new Date().toISOString().split("T")[0]} />
                </div>

                {/* Type */}
                <div className="form-group">
                    <label htmlFor="type">Type</label>
                    <select>
                        <option value="Expense">Expense</option>
                        <option value="Income">Income</option>
                    </select>
                </div>

                {/* Category */}
                <div className="form-group">
                    <label htmlFor="Category">Category</label>
                    <select>
                        <option value="Transport">Transport</option>
                        <option value="Food">Food</option>
                        <option value="Bills">Bills</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Entertainment">Entertainment</option>
                    </select>
                </div>

                {/* Button full width */}
                <div className="form-group full">
                    <button onClick={handleClick}>Add</button>
                </div>
            </div>
            <div>
                <History title={} amount={} date={} />
            </div>
        </div>
    )
}
export default App