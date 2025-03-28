import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; 

function Navigation() {
  // Hämtar aktuellt tema från Redux store
  const theme = useSelector((state) => state.theme.theme);

  return (
    <nav className={theme}> 
      <ul>
        <li><Link to="/" className="nav-link">About me</Link></li>
        <li><Link to="/projects" className="nav-link">Projects</Link></li>
        <li><Link to="/contact" className="nav-link">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;