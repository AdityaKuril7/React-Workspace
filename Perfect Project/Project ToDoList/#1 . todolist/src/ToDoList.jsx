import React from 'react'
import {useState} from "react"
export default function ToDoList() {
	const [task, setTask] = useState([]);
	const [input, setInput] = useState("");
	const handleAdd = (event) =>{
		setTask(t => [...task,input]);
	}
	const handleRemove = (index)=>{
		const updateTask = task.filter((_,i)=>i!==index);
		setTask(updateTask);
	}
	const handleMoveUp = (index) =>{
		if(index>0){
			const updateUp = [...task];
			[updateUp[index],updateUp[index-1]] = [updateUp[index-1],updateUp[index]];
			setTask(updateUp);
		}
	}
	const handleMoveDown = (index) =>{
		if(index<task.length-1){
			const updateUp = [...task];
			[updateUp[index],updateUp[index+1]] = [updateUp[index+1],updateUp[index]];
			setTask(updateUp);
		}
	}
	return (
		<div className="contaienr">
			<h1>To Do List</h1>
			<div className="forms">
				<input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
				<button onClick={handleAdd}>Add</button>
			</div>
			<div className="card-container">	
			{task.map((element,index)=>(
				<div className="card" key={index}>
					<span>{element}</span>
					<button onClick={()=>handleRemove(index)}>❌</button>
					<button onClick={()=>handleMoveUp(index)}>👆</button>
					<button onClick={()=>handleMoveDown(index)}>👇</button>
				</div>
			))}
			</div>
		</div>
	)
}