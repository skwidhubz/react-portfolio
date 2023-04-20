import React from 'react';
import Nav from './Nav';
import '../styles/header.css';
import logo_image from '../images/tmp_code_logo.png';

const Header = ({ activeSection, setActiveSection }) => {
  return (
    <header className="header">
      <img src={logo_image} width='20%' alt='black and white logo reading TMP Code'/>
      <Nav activeSection={activeSection} setActiveSection={setActiveSection} />
    </header>
  );
};

export default Header;
