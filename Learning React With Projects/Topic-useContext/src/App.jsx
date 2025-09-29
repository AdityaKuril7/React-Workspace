import {useState,createContext,useContext} from "react"
import { counterContext } from "./context/Context"
import Card from "./component";
function App(){
  const [count, setCount] = useState(0);
  return(
      <counterContext.Provider value={count}>
        <Card />
      </counterContext.Provider>
  )
}
export default App