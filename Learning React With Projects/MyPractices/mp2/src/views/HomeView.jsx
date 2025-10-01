import { FaDownload, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import { useContext, createContext } from "react"
import { motion } from "motion/react"
import PassionContext from "../context/passionContext"
function HomeView() {
    const { passion, setPassion, index, setIndex } = useContext(PassionContext)
    return (
        <div className="grid grid-cols-2">
            <div className="h-[100vh] text-white flex flex-col justify-center ">
                <div className="mr-30 ml-30 mb-30 mt-0">
                    <h2 className="text-6xl font-bold text-white">Kuril Aditya</h2>
                    <h3 className="text-4xl font-semibold mb-3 mt-3">I am <span className="text-green-500">{passion[index]}</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, rem obcaecati alias amet ex eligendi, velit tenetur quos sit quod sapiente dolorum pariatur nihil asperiores. Sed quas dolor sequi quae.</p>
                    <div className="mt-10 flex space-x-7 text-2xl text-center items-center">
                        <button className="shadow-green-500 shadow-md rounded-4xl p-3 bg-green-500">Download Cv</button>
                        <button className="icons-buttons"><FaLinkedin /></button>
                        <button className="icons-buttons"><FaGithub /></button>
                        <button className="icons-buttons"><FaTwitter /></button>
                        <button className="icons-buttons"><FaInstagram /></button>
                    </div>
                </div>
            </div>
            <div className="h-[100vh] justify-center mt-10 flex">
                <motion.img
                    whileHover={{
                        scale: [null, 1.0500, 1.1500],
                        transition: { duration: 0.5 },
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeOut",
                    }}
                    className=" w-auto h-[80vh] rounded-3xl" src={"src/assets/second.jpg"} alt="" />
            </div>
        </div>
    )
}
export default HomeView