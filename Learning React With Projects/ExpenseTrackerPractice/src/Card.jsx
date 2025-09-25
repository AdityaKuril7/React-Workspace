function Card(props) {
    return (
        <div className="smallCards">
            <div className="title">
                <p>{props.title}</p>
            </div>
            <div className="amount">
                <p>{props.amount} 💵</p>
            </div>
            <div className="time">
                <p>{new Date().toLocaleTimeString()}</p>
            </div>
        </div>
    )
}
export default Card