function MiniCards(props){
    return(
        <div className="minicards">
            <p>{props.title}</p>
            <p>{props.amount}</p>
        </div>
    );
}
export default MiniCards