import React, { useReducer } from 'react'
const initalState=0;
const reducer =(state,action)=>{
switch(action){
  case 'Increment':
    return state+1;
    case 'Decrement':
      return state-1;
      case 'reset':
        return initalState;
}
}

function CounterOne() {
  const [count,dispatch]=useReducer(reducer,initalState);
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={()=>dispatch('Increment')}>Increment</button>
      <button onClick={()=>dispatch('reset')}>Reset</button>
      <button onClick={()=>dispatch('Decrement')}>Decrement</button>
    </div>
  )
}

export default CounterOne
