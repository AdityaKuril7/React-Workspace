import { useEffect, useState } from "react"
function App() {
    const [task, setTask] = useState(()=>{
        const savedTask = localStorage.getItem("TaskList")
        return savedTask ? JSON.parse(savedTask) : []
    })
    const [state,setState] = useState(false);
    function handleClick() {
        let newTask = document.getElementById("getTask");
        const updatedTask = [...task, { Tasks: newTask.value,dates:new Date().toLocaleDateString(),Time:new Date().toLocaleTimeString()}]
        setTask(updatedTask)
        localStorage.setItem("TaskList",JSON.stringify(updatedTask))
    }
    function handleRemoveClick(index) {
        const removeTask = task.filter((value, i) => i !== index)
        setTask(removeTask)
        localStorage.setItem("TaskList",JSON.stringify(removeTask))
    }
    function handleHeading(){
        let heading = document.getElementById("heading")
        if(state){
            heading.textContent = "Made By Adi"
            setState(!state)
        }else{
            heading.textContent = "Task"
            setState(!state)
        }
    }
    return (
        <div className="container">
            <h1 onClick={handleHeading} id="heading">Task</h1>
            <form action={handleClick}>
            <div className="getter">

                <div className="getter-input">
                    <input required type="text" id="getTask" placeholder="Enter Task"/>
                </div>
                <div className="getter-button">
                    <button id="add-btn" type="submit">Add</button><br />
                </div>
            </div>
            </form>
            <div>
                <div className="card-container">
                    {task.map((value, index) => (
                        <div className="card">
                            <div className="card-task">
                                <p style={{color:"white",marginBottom:"0px"}}>{value.Tasks}</p>
                                <p style={{color:"wheat",fontSize:"15px",marginBottom:"0px"}}>{value.dates}</p>
                                <p style={{color:"wheat",fontSize:"15px",marginTop:"0px"}}>{value.Time}</p>
                            </div>
                            <div className="card-button">
                                <button onClick={() => handleRemoveClick(index)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}
export default App