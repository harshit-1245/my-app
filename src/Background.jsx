// Background.js
import React, { useState, useEffect, useCallback, useRef } from 'react';

const Background = () => {
  const [randomColor, setRandomColor] = useState('#000000'); // Initial color
  const colorInterval = useRef(null);

  const generateRandomColor = useCallback(() => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setRandomColor(randomColor);
  }, []);

  useEffect(() => {
    // Start generating random colors when the component mounts
    colorInterval.current = setInterval(generateRandomColor, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(colorInterval.current);
  }, [generateRandomColor]);

  return (
    <div>
      <p>Random Color:</p>
      <div style={{ backgroundColor: randomColor, width: '100px', height: '100px',display:'flex' ,justifyContent: 'center' }}>
        <p>{randomColor}</p>
      </div>
    </div>
  );
};

export default Background;
