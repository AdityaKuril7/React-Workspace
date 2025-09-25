import Favourite from "./pages/Favourite.jsx"
import Home from "./pages/Home.jsx"
import { Routes, Route } from "react-router-dom"
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favourite" element={<Favourite />}/>
            </Routes>
        </>
    )
}
export default App