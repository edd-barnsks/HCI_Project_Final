import React, { useState } from 'react';
import { Link,  NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from "../assets/Logo.png";

function Navbar() {

  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
  <img src={logo} alt="Logo" className="logo-img" />
  <span style={{ marginLeft: '8px', color: 'black', fontWeight: 'bold' }}>Study Buddy AI</span>
</Link>

      <ul className="nav-links">

        <li>
          <button
            className="search-toggle"
            onClick={() => setShowSearch(prev => !prev)}>
             <img src={require('../assets/search-icon.png')} alt="Search" className="search-icon" />
          </button>
        </li>
        <li className={`search-bar ${showSearch ? 'expanded' : ''}`}>
          <input type="text" placeholder="Search..." />
        </li>
        
        <li><Link to="/">Home</Link></li>
        <li><Link to="/subjects">Subjects</Link></li>
        <li><Link to="/calendar">Calendar</Link></li>
        <li><Link to="/quiz">Quiz</Link></li>
        <li> <NavLink to="/progression" className="hover:text-blue-400"> Progression </NavLink> </li>
      </ul>
    </nav>
  );
}

export default Navbar;