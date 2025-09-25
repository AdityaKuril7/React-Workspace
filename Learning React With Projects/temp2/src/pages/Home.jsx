import Card from "../components/Card"
import NavBar from "../components/NavBar"
import { useEffect,useState } from "react"
function Home() {
    const url = "./getMovies.json"
    const [info, setInfo] = useState([]);
    useEffect(() => {
        const get = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) { // Check if the response was successful
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setInfo(data);
                console.log(data);
                
            } catch (error) {
                console.error("Could not fetch the data:", error);
            }
        };
        get();
    }, []);
    return (
        <>
            <header className="bg-red-500">
                <NavBar />
            </header>

            <main className="flex gap-20 m-10 flex-wrap justify-center items-center">
                {info.map((value,index)=>(
                    <Card URL={value.imglink} title={value.title} releaseDate={value.releaseDate} />
                ))}
            </main>

            <footer>

            </footer>
        </>
    )
}
export default Home