import React from 'react';
import banner from '../images/banner.jpg';

const Header = () => {
  return (
    <div className="header">
      <h1>Film Scope</h1>
      <img src={banner} width="600" alt="Banner" />
    </div>
  )
}
export default Header;
