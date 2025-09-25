import { Link } from "react-router-dom"

function NavBar(){
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/favourite">Favourite</Link> 
                </li>
            </ul>
        </nav>
    )
}
export default NavBar