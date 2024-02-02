import React, { useEffect, useState } from 'react'
import Child from './Child'
import Child2 from './Child2';

function Parent() {
    const [count,setCount]=useState(0);

    const Decrement=()=>{
        setCount(count-1)
    }

    const handleClick=()=>{
        setCount(prevCount=>prevCount+1)
    }

  return (
    <div>
      <h1>Parent Here</h1>
      <p>Count -{count}</p>
      <p>Decrement-{count}</p> 
      <Child2 minus={Decrement}/>
      <Child onButtonClick={handleClick}/>
    </div>
  )
}

export default Parent
