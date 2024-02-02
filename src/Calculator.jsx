import React, { useState } from 'react'
import "./Calculator.css"

const Calculator = () => {
    const [input1,setInput1]=useState(0)
    const [input2,setInput2]=useState(0)
    const [results,setResults]=useState(0)
    // console.log(results/10)

     //math.floor 
    // const shownResults=(results)=>{
    //     //just use the sum of digits you got in result
    //   //getting last digit and then add up using loop
      
    //     let sum=0; //we store the value of sum
    //     while(results){
    //     sum +=results%10; // 0+4
    //     //using math to get results
    //     // results +=
    //     }
    // }
//for addition
const addtion=()=>{
    //i need to think change string to number
    
  //use parseInt for changing string to number
    const addition1= parseInt(input1) +  parseInt(input2)

    setResults(addition1)
    
}
const subtraction=()=>{
    
    const addition1= parseInt(input1) -  parseInt(input2)

    setResults(addition1)
}
const multiply=()=>{
   
    const addition1= parseInt(input1) *  parseInt(input2)

    setResults(addition1)
}
const divide=()=>{
  
    const addition1= parseInt(input1) / parseInt(input2)

    setResults(addition1)
}
  return (
    <div>
      <div className="input-section">
        <input type='number' value={input1} onChange={(e)=>setInput1(e.target.value)}/>
      </div>
      <div className="input2-section">
        <input type="number" value={input2} onChange={(e)=>setInput2(e.target.value)} />
      </div>
      <div className="results">
        {results}
      </div>
      <div className="buttons">
        <button onClick={addtion} className="addition">+</button>
        <button onClick={subtraction} className="addition">-</button>
        <button onClick={multiply} className="addition">*</button>
        <button onClick={divide} className="addition">/</button>
      </div>
    </div>
  )
}

export default Calculator
