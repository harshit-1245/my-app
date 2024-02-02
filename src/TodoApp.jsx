import React, { useReducer } from 'react';

// Reducer function to handle state changes
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.text }];
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
};

function TodoApp() {
    const initalState=[];
  // Initial state for the todo list
  const [state,dispatch] = useReducer(todoReducer,initalState);

  const addTodo =text=>{
    dispatch({type:'ADD_TODO',text});
  }
  const removeTodo =id=>{
    dispatch({type:'REMOVE_TODO',id});
  }

  return (
    <div>
      <h1>Todo List App using useReducer</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          const text = e.target.todo.value;
          if (text) {
            addTodo(text);
            e.target.todo.value = '';
          }
        }}
      >
        <input type="text" name="todo" placeholder="Add a new task" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {state.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
