import react from "react";
import axios from "axios";
import {MarkdownTyper} from "react-markdown-typer";
import {FaDeleteLeft} from "react-icons/fa6";
import {BsTrash} from "react-icons/bs";
import Markdown from "react-markdown";
function App(){
    const [message, setMessage] = react.useState("");
    const [data,setData] = react.useState([]);
    const handleSend = async () => {
        if (!message.trim()) return;

        setData(prev => [...prev, { sender: "user", text: message }, { sender: "bot", text: "" }]);
        await handleResponse(message);
        setMessage("");
    };
    const handleClear = () => {
        setData([]);
        setMessage("");
    }
    const handleResponse = async (message) => {
        try {
            const response = await fetch("http://localhost:11434/api/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    model: "qwen2.5-coder:1.5b-instruct",
                    prompt: message,
                    stream: true

                })
            });

            const reader = response.body.getReader();
            const decoder = new TextDecoder("utf-8");
            let botReply = "";

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value);
                const lines = chunk.split("\n").filter(line => line.trim() !== "");

                for (const line of lines) {
                    const parsed = JSON.parse(line);
                    botReply += parsed.response || "";
                }

                // Optional: live update
                setData(prev => [...prev.slice(0, -1), { sender: "bot", text: botReply }]);
            }

            // Final update
            setData(prev => [...prev.slice(0, -1), { sender: "bot", text: botReply }]);
        } catch (error) {
            console.error("Streaming error:", error);
            setData(prev => [...prev, { sender: "bot", text: "Error: Unable to stream response." }]);
        }
    };

    return(
        <div className={"AiChatbot flex flex-col h-screen w-screen "}>
            <header className={"w-full h-16 "}>
                <h1 className={"text-3xl font-bold text-center"}>Claude Ai</h1>
                <button className={" "} onClick={handleClear}><BsTrash /></button>
            </header>
            <main className={"w-full h-full overflow-y-auto p-4"}>
                {data.map((item, index) => (
                    <div key={index} className={`flex ${item.sender === "user" ? "justify-end" : "justify-start"} items-center w-full p-2`}>
                        <div className={`p-2 rounded-md ${item.sender === "user" ? "bg-blue-200" : "bg-gray-200"} max-w-[70%]`}>
                            <p className="text-black"><Markdown>{item.text}</Markdown></p>
                        </div>
                    </div>
                ))}
            </main>
            <footer className={" w-full h-16"}>
                <div className={"flex justify-center items-center h-full"}>
                    <input
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}
                        type={"text"}
                        onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        placeholder={"Enter your message"}
                        className={"border-2 border-black rounded-md p-2 w-[70vw] placeholder:text-gray-400"}
                    />
                    <button onClick={handleSend} className={"bg-blue-900 text-white rounded-md w-20 p-2 font-bold ml-5"}>Send</button>
                </div>
            </footer>
        </div>
    )
}
export default App;