import React from 'react';
import '../styles/footer.css';
import gitHubIcon from '../images/github.png';
import linkedInIcon from '../images/linkedin.png';
import emailIcon from '../images/email.png';

const Footer = () => {
  return (
    <footer className="footer">
      <ul>
      <li><a href="https://github.com/developer" target="_blank" rel="noopener noreferrer"><img src={gitHubIcon} alt='github icon'/></a></li>
      <li><a href="https://www.linkedin.com/in/developer" target="_blank" rel="noopener noreferrer"><img src={linkedInIcon} alt='linkedIn icon'/></a></li>
      <li><a href="mailto:tommaxwellparker@gmail.com" target="_blank" rel="noopener noreferrer"><img src={emailIcon} alt='email icon'/></a></li>
      </ul>
    </footer>
  );
};

export default Footer;
