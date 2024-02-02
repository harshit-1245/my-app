import React, { useEffect, useRef, useState } from 'react'

function UseRef2() {
    const [timer,setTimer]=useState(0);
    const intervalRef = useRef();

    useEffect(()=>{
       intervalRef.current=setInterval(() => {
        setTimer(prevTimer =>prevTimer+1);
       }, 1000);
       return ()=>{
        clearInterval(intervalRef.current);
       }
    })
  return (
    <div>
      <h1>Hook timer-{timer}</h1>
      <button onClick={()=>clearInterval(intervalRef.current)}>stop</button>
    </div>
  )
}

export default UseRef2
