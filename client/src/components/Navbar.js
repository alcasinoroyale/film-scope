import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () =>
  <div className="navMenu">
    <a><NavLink to="/" exact>Home</NavLink></a>
    <a><NavLink to="/films" exact>View Films</NavLink></a>
    <a><NavLink to="/favorites" exact>Favorites</NavLink></a>
  </div>

export default Navbar
