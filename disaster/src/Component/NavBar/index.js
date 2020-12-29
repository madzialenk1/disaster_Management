import React from 'react';
import './Style.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
  return(
    <header className="header">
        <nav className="headerMenu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Survavial_kits">Survavial kits</NavLink>
        <NavLink to="/Supliers">Supliers</NavLink>
        <NavLink to="/Help">Help</NavLink>
        </nav>
    </header>
   )

 }

export default Header;