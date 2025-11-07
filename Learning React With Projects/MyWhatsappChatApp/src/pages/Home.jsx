import {FaCamera, FaQrcode} from "react-icons/fa";
import {HiDotsVertical} from "react-icons/hi";
import {Link} from "react-router-dom";
import AddContactPage from "../components/AddContactPage.jsx";
import {useContext, useEffect, useState} from "react";
import {mycontext} from "../context/Mycontext.js";
function Home() {
    const {contact,setContact,search,setSearch,filter,setFilter} = useContext(mycontext);
    useEffect(()=>{
        setFilter(contact);
    },[contact])
    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch(value);
        e.preventDefault();
        if(value === ""){
            setFilter(contact);
        }else{
            const filted = contact.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()));
            setFilter(filted);
        }
    }
    return (
        <div className={"ChatApp"}>
            <header className={"header bg-gray-100 h-30 flex flex-col justify-between items-center px-4"}>
                <div className={"Actions pt-3 flex w-full justify-between items-center "}>
                    <div>
                        <h1 className={"text-[20px] font-bold text-green-500 "}>WhatsApp</h1>
                    </div>
                    <div className={"icons flex gap-4 text-[20px]"}>
                        <FaQrcode />
                        <FaCamera />
                        <HiDotsVertical />
                    </div>
                </div>
                <div className={"search pb-5 mt-3"}>
                    <div>
                        <input value={search} onChange={(e)=>handleSearch(e)} type="text" className={"bg-gray-200" +
                            " h-13" +
                            " mb-5" +
                            " w-[370px] p-4" +
                            " rounded-full "} placeholder={"Search or start new chat"} />
                    </div>
                </div>
            </header>
            <main className={"main overflow-y-auto bg-gray-100 h-[calc(100vh-253px)]"}>
                {filter.map((item) => (

                    <div key={item.id} className={"flex" +
                        " justify-between items-center p-4  border-gray-300"}>
                        <Link to={`/contact/${item.id}`} state={{item}} key={item.id} className={"flex justify-between" +
                            " items-center" +
                            " p-4 "}>

                        <div  className={"flex gap-4 items-center"}>
                            <p className={"text-[20px]"}>{item.firstName} {item.secondName}</p>
                        </div>
                    </Link>

                    </div>

                ))}
                <button className={"bg-green-500 fixed bottom-25 right-5 h-10" +
                    " w-20 rounded-2xl flex" +
                    " justify-center" +
                    " items-center font-bold text-[18px] text-white"}><Link to={"addContact"}> Add </Link></button>
            </main>
            <footer className={"footer fixed bottom-0 w-screen  h-20 pb-3  flex" +
                " justify-between" +
                " items-end px-4"}>
                <div className={"bg-green-500 h-10 w-20 rounded-2xl flex justify-center items-center"}>
                    <h1 className={"text-[20px] text-white  font-bold "}>Chats</h1>
                </div>
                <div>
                    <h1 className={"text-[20px] font-bold "}>Updates</h1>
                </div>
                <div>
                    <h1 className={"text-[20px] font-bold"}>Communities</h1>
                </div>
                <div>
                    <h1 className={"text-[20px] font-bold"}>Calls</h1>
                </div>
            </footer>
        </div>
    );
}
export default Home;