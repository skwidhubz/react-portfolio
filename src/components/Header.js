import React from 'react';
import Nav from './Nav';
import '../styles/header.css';

const Header = ({ activeSection, setActiveSection }) => {
  return (
    <header className="header">
      <h1>Developer Name</h1>
      <Nav activeSection={activeSection} setActiveSection={setActiveSection} />
    </header>
  );
};

export default Header;
