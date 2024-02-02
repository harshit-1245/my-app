import React, { useState, useEffect, useRef, useCallback } from 'react';

function RandomPasswordGenerator() {
  const [password, setPassword] = useState('');
  const intervalId = useRef(null);


 const generatePassword=useCallback(()=>{
    let characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]|:;<>,.?~';
    let newPassword='';
    let passwordLength=8;

    for(let i=0;i<passwordLength;i++){
        let randomIndex= Math.floor(Math.random()*characters.length);
        newPassword +=characters[randomIndex];

    }
    setPassword(newPassword)
 },[])

  useEffect(() => {
    generatePassword();
    intervalId.current = setInterval(generatePassword, 5000);

    return () => {
      clearInterval(intervalId.current);
    };
  }, [generatePassword]);
  

  

  return (
    <div>
      <h1>Random Password Generator</h1>
      <p>Generated Password: {password}</p>
      <button onClick={generatePassword}>generate</button>
      
    </div>
  );
}

export default RandomPasswordGenerator;
