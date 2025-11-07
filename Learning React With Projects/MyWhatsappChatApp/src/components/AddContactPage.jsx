import {useContext, useState} from "react";
import {FaPhone, FaUser} from "react-icons/fa";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {mycontext} from "../context/Mycontext.js";
function AddContactPage() {
    const {contact,setContact} = useContext(mycontext);
    const [firstName,setFirstName] = useState("");
    const [secondName,setSecondName] = useState("");
    const [number,setNumber] = useState("");
    const navigate = useNavigate();
    const handleFormSubmit = (e) => {
        e.preventDefault();
        setContact(prev=>[...prev,{id:contact.length+1,firstName:firstName,secondName:secondName,number:number}])
        setFirstName("");
        setNumber("");
        navigate("/");
    }
    return(
        <div className={"Card bg-white p-4 rounded-lg"}>
            <form onSubmit={(e)=>handleFormSubmit(e)}>

            <div className={"flex flex-col gap-2"}>
                <label><FaUser /></label>
                <input value={firstName} placeholder={"First Name"} onChange={(e)=>setFirstName(e.target.value)} type="text" className={"bg-gray-200" +
                    " h-13" +
                    " mb-5" +
                    " w-[370px] p-4" +
                    " rounded-full "} />
                <input value={secondName} placeholder={"Last Name"} onChange={(e)=>setSecondName(e.target.value)} type="text" className={"bg-gray-200" +
                    " h-13" +
                    " mb-5" +
                    " w-[370px] p-4" +
                    " rounded-full "} />

            </div>
            <div>
                <label><FaPhone /></label>
                <input placeholder={"Eg.. +91 1234567890"} value={number} onChange={(e)=>setNumber(e.target.value)} type="number" className={"bg-gray-200 h-13" +
                    " mb-5 w-[370px] p-4 rounded-full "} />

            </div>
            <div className={"flex justify-center gap-4 items-center"}>
                <button className={"bg-green-500 rounded-2xl text-white  h-10 w-20"} type={"submit"}>Add</button>
                <button className={"bg-red-500 h-10 rounded-2xl text-white w-20"}><Link to={"/"}>Cancle</Link> </button>
            </div>
            </form>

        </div>
    )
}
export default AddContactPage;