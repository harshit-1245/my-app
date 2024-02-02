import React, { useCallback, useState } from 'react'
import TestCall from './TestCall';

function Addition() {
    const [add,setAdd] =useState(0);
    const [count,setCount]=useState(0);
    const decrement=()=>{
        setCount(count-1);
    }
    const Learning=useCallback(()=>{
       
    },[count])

    
  return (
    <div>
      <h1>Addition-{add}</h1>
      
      <button onClick={()=>setAdd(add+1)}>add</button>
      
      <TestCall Learning={Learning} Count={count}/>
       <h1>count-{count}</h1> 
       <button onClick={()=>setCount(count+2)}>count</button>
      
    </div>
  )
}

export default Addition
