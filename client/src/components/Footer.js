import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <NavLink to="/signup" exact>Sign Up</NavLink>
      <NavLink to="/login" exact>Login</NavLink>
    </div>
  )
}
export default Footer;
