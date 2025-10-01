import { FaDownload, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import { useEffect, useState } from 'react';
import HomeView from "./views/HomeView";
import PassionContext from "./context/passionContext"
import AboutView from "./views/AboutView";
import ProjectView from "./views/ProjectView";
function App() {
    const [passion, setPassion] = useState(["Frontend Developer", "Backend Developer", "Data Analysis", "Game Developer"])
    const [index, setIndex] = useState(0)
    const [view,setView] = useState("Home")
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    let i = 0;
    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex(prev => (prev + 1) % passion.length)
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])

    return (

        <div className="">
            <PassionContext.Provider value={{ passion, setPassion,index,setIndex }}>
                <nav className="grid text-white grid-cols-2 mt-10 text-[25px] font-semibold">
                    <div className="ml-10">
                        <p className='font-extrabold text-[30px]'>Portfolio</p>
                    </div>
                    <div className="flex space-x-10 items-center justify-end mr-10">
                        <p onClick={(e)=>setView(e.target.innerText)} className="text-green-500">Home</p>
                        <p onClick={(e)=>setView(e.target.innerText)}>About</p>
                        <p onClick={(e)=>setView(e.target.innerText)}>Projects</p>
                        <p onClick={(e)=>setView(e.target.innerText)}>Service</p>
                        <p onClick={(e)=>setView(e.target.innerText)}>Contact</p>
                    </div>
                </nav>
                {
                    view =="Home" ? <HomeView /> :null
                }
                {
                    view =="About" ? <AboutView /> :null
                }
                {
                    view =="Projects" ? <ProjectView /> :null
                }
                
            </PassionContext.Provider>
        </div>
    )
}
export default App