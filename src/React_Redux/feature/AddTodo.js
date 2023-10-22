import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todo/todoSlice";

export default function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        if(input !== '') dispatch(addTodo(input))
        else alert("Add Todo First")
        setInput('')
    }

    return(
        <form 
        onSubmit={addTodoHandler} 
        className="h-100vh bg-slate-300 p-4 rounded-md"
        >
            <input
                type="text"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="rounded-md px-3 py-2 mx-2"
            />
            <button 
            type="submit" 
            className=" bg-black rounded-md text-white px-3 py-2 mx-2"
            >Add Todo</button>
        </form>
    )
}