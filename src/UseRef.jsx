import React, { useRef, useEffect, useState } from 'react';

function UseRef() {
  // Creating a ref for a DOM element
  const myElementRef = useRef("");
  const [name,setName]=useState("harshit");

  const reset =()=>{
    setName('')
    myElementRef.current.focus()
  }
  const handleClick=()=>{
    myElementRef.current.style.color="red"
  }
  

  // Creating a ref for some value
  const countRef = useRef(0);

  console.log(countRef)

 return (
    <div>
        <input ref={myElementRef} type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <button onClick={reset}>reset</button>
        <button onClick={handleClick}>handle</button>
    </div>
 )
  
}

export default UseRef;
