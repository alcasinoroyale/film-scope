import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
  <div className="navMenu">
    <NavLink to="/" exact>Home</NavLink>
    <NavLink to="/films" exact>View Films</NavLink>
    <NavLink to="/favorites" exact>Favorites</NavLink>
  </div>
)
}

export default Navbar
