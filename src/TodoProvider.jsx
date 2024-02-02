import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

 const deleteTodo=(index)=>{
    const updateTodo=todos.filter((_,i)=>i!==index);
    setTodos(updateTodo)
 }

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        placeholder="Enter a to-do item"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
      {todos.map((todo,index)=>(
        <li key={index}>{todo}
        <button onClick={()=>deleteTodo(index)}>delete</button>
        </li>
      ))}
      
           </ul>
    </div>
  );
}

export default TodoList;
