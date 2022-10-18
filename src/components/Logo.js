import React from 'react';
import logo from '../images/logo.svg';
import '../style/Logo.css';

const Logo = () => (
  <div className='react-logo-container'>
    <img src={logo} className="react-logo" alt="Logo React" />
    <h1 className='react-title'>React Interactive Calculator</h1>
  </div>
);

export default Logo;