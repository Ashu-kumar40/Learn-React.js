import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "./todo/todoSlice";

export default function Todos() {
    const todos = useSelector (state => state.todos);
    const dispatch = useDispatch()
    return(
    <>
        <h1 className="text-center m-3 text-xl">Todo List</h1>
        {
            todos.map((todo) => (
                <li 
                key={todo.id}
                className="my-5 bg-slate-200 flex justify-between items-center p-3 rounded-md"
                >
                    {todo.text}
                    <button 
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="bg-lime-500 rounded-md text-white px-3 py-2 mx-2"
                    >done</button>
                </li>
            ))
        }
    </>
    )
}