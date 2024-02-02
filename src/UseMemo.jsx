import React, { useMemo, useState } from 'react'

function UseMemo() {
    const [counterOne,setCounterOne]=useState(0);
    const [counterTwo,setCounterTwo]=useState(0);

    

    const increment=()=>{
        setCounterOne(counterOne+1);
    }
    const decrement=()=>{
        setCounterTwo(counterTwo+1);
    }

    const isEven =useMemo(()=>{
        let i=0;
        while(i<20000000) i++
        return counterOne%2===0;
},[counterOne])
        
  return (
    <div>
        <div>
      <button onClick={increment}>added- {counterOne}</button>
      <span>{isEven()?"even":"odd"}</span>
      </div>
      <div>
        <button onClick={decrement}>added-{counterTwo}</button>
      </div>
    </div>
  )
}

export default UseMemo
