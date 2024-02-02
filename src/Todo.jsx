import React, { createContext, useState } from 'react'

export const Context=createContext();

export const TodoContext = ({children}) => {
    const [todo,setTodo]=useState([]);
    const [input,setInput]=useState("");

    const handleInputChange=(e)=>{
        setInput(e.target.value);
    }

    const handleAddTdo=(e)=>{
        if(input.trim()!==''){
            setTodo([...todo,input]);
            setInput('');
        }
    }

    const deleteTodo=(index)=>{
        const updateTodo=todo.filter((_,i)=>i!==index);
        setTodo(updateTodo);
    }

  return (
    <Context.Provider value={{handleAddTdo,handleInputChange,deleteTodo}}>
        {children}
    </Context.Provider>
  )
}



