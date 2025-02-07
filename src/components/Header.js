
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../features/themeSlice'; 

function Header() {
  const theme = useSelector((state) => state.theme); 
  const dispatch = useDispatch(); 

  return (
    <header className={theme}>
      <h1>Mohammed Yasin</h1>
      <button onClick={() => dispatch(toggleTheme())}> 
        Switch to {theme === 'light' ? 'Dark' : 'Dark'} Mode
      </button>
    </header>
  );
}

export default Header;