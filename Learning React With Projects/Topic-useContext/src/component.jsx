import { useContext } from "react"
import { counterContext } from "./context/Context"

function Card() {
    const count = useContext(counterContext);
    return(
        <div>
            {count}
        </div>
    )
}
export default Card