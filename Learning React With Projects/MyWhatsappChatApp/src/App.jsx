
import Home from "./pages/Home.jsx";
import {Route, Routes} from "react-router-dom";
import ContactPage from "./pages/ContactPage.jsx";
import AddContactPage from "./components/AddContactPage.jsx";
import {mycontext} from "./context/Mycontext.js";
import {useEffect} from "react";
import {useState} from "react";
function App() {
    const [contact, setContact] = useState([]);
    const [search,setSearch] = useState("");
    const [filter,setFilter] = useState([]);
    return(
        <mycontext.Provider value={{contact,setContact,search,setSearch,filter,setFilter}}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path={"/addContact"} element={<AddContactPage />} />
                <Route path={"contact/:id"} element={<ContactPage />} />
            </Routes>
        </mycontext.Provider>
    )
}

export default App;
