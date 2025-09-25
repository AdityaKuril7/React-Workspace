import Button from "./Button.jsx"
import { useState, useEffect } from "react"
import MiniCards from "./MiniCards.jsx"
function Card() {
    const [components, setComponents] = useState([])
    const [Balense, setBalense] = useState(0)
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState(0)
    const handleClick = () => {
        setComponents([...components, <MiniCards key={components.length} title={title} amount={amount} />])
        setBalense(Balense + Number(amount))
        setTitle("")
        setAmount(0)
    }
    useEffect(()=>{
        localStorage.setItem()
    },[title])
    return (
        <div className="Card">
            <h1>Expense Tracker</h1>
            <p>Total Expense {new Date().getDate()} / {new Date().getMonth()} / {new Date().getFullYear()}</p>
            <h2>💵{ Balense}</h2>
            <label>Title</label>
            <input className="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter Title Expense" />
            <label>Amount</label>
            <input className="Amount" type="Number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <button onClick={handleClick}>Add Expense</button>
            <div className="miniCardsSection">
                {components}
            </div>
        </div>
    );
}
export default Card