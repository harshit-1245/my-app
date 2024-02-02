import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'

function Header() {
    const theme=useContext(ThemeContext);
  return (
    <div>
      <header>
        <h1>My App</h1>
        <p>Current theme : {theme}</p>
      </header>
    </div>
  );
}

export default Header
