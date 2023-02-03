import React from "react";
import { useState } from "react";
const ToDoForm =()=>{
    const [inputTodo, setInputTodo] = useState('')

    const addTask =(e)=>{
        setInputTodo(e.target.value);
    }
    return(
        <div className="container">
            <input type="text" name="inputtodo" value={inputTodo} placeholder="add task" onChange={addTask}/>
            <button className="btn">+</button>
   
        </div>
    );

}
export default ToDoForm;

