import React, { useState } from 'react'

function JustForFun() {
    const [age,setAge]=useState('');
    const [isEligible,setIsEligible] =useState(false);

    const handleChange=(e)=>{
        setAge(e.target.value);
    }
   const guessing=()=>{
    for(let i=0;i<100;i++){
        setAge(Math.floor(Math.random()*100));
        
        
        if(age>=18){
            setIsEligible(true);
        }else{
            setIsEligible(false);
        }
    }
   }
    

  return (
    <div>
        <h1>guess:{}</h1>
        <input type="text" value={age} onChange={handleChange}/>
      <button onClick={guessing}>Guess</button>
      <p>{isEligible?"You are correct":"You are good"}</p>
    </div>
  )
}

export default JustForFun
