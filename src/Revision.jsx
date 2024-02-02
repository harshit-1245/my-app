import React, { useReducer } from 'react'

const initialState={
    firstCounter:0,
    secondCount:10
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'Increment':
            return {...state,firstCounter: state.firstCounter+action.value}
            case 'Decrement':
                return {...state,firstCounter:state.firstCounter-action.value}
                case 'reset':
                    return initialState;
                    case 'Increment2':
                        return {...state,secondCount:state.secondCount+action.value}
                        case 'Decrement2':
                        return {...state,secondCount:state.secondCount-action.value}
                    default :
                    return state;
    }
}

function Revision() {
    const [count,dispatch]=useReducer(reducer,initialState);
    

  return (
    <div>
        <p>first Counter-{count.firstCounter}</p>
        <p>Second Counter-{count.secondCount}</p>
      <button onClick={()=>dispatch({type:'Increment',value:1})}>Increment</button>
      <button onClick={()=>dispatch({type:'reset',value:1})}>Reset</button>
      <button onClick={()=>dispatch({type:'Decrement',value:1})}>Decreset</button>
      <button onClick={()=>dispatch({type:'Increment',value:5})}>Increment 5</button>
      <button onClick={()=>dispatch({type:'Decrement',value:5})}>Decrement 5</button>
      <button onClick={()=>dispatch({type:'Increment2',value:2})}>increment 2</button>
      <button onClick={()=>dispatch({type:'Decrement2',value:2})}>Decrement 2</button>
    </div>
  )
}

export default Revision
