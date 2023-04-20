import React from 'react';
import '../styles/nav.css';

const Nav = ({ activeSection, setActiveSection }) => {
  const navigateTo = (section) => {
    setActiveSection(section);
  };

  return (
    <nav className="nav">
      <ul id="nav-list">
        <li className={activeSection === 'about' ? 'active' : ''} onClick={() => navigateTo('about')}>About Me</li>
        <li className={activeSection === 'portfolio' ? 'active' : ''} onClick={() => navigateTo('portfolio')}>Portfolio</li>
        <li className={activeSection === 'contact' ? 'active' : ''} onClick={() => navigateTo('contact')}>Contact</li>
        <li className={activeSection === 'resume' ? 'active' : ''} onClick={() => navigateTo('resume')}>Resume</li>
      </ul>
    </nav>
  );
};

export default Nav;
