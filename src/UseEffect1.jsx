import React, { useEffect, useState } from 'react'

function UseEffect1() {
    const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect ran');
  }, []); // Incorrect dependency

  console.log('Component rendered');

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default UseEffect1
