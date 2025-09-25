function MovieCard(props){
    return(
        <div className="card">
        <div className="image"><img src={props.image} alt="Image" /></div>
        <div className="title"><p>{props.title}</p></div>
    </div>
    )
}
export default MovieCard