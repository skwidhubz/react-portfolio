import React from 'react';
import '../styles/resume.css'; 
import c from '../images/Icons/c.png';
import css from '../images/Icons/css.png';
import html from '../images/Icons/html.png';
import js from '../images/Icons/js.png';
import mongodb from '../images/Icons/mongodb.png';
import mysql from '../images/Icons/mysql.png';
import nodejs from '../images/Icons/nodejs.png';
import react from '../images/Icons/react.png';
import vscode from '../images/Icons/vscode.png';



const Resume = () => {

  const tomParkerCV = 'https://docs.google.com/document/d/1llfEE2ormlAnpfy0dDURFtSItpwla3bnkVO3wiX3xlQ/edit?usp=sharing';

  return (
    <section className="resume">
      {/* <h2>Resume</h2> */}
      <a href={tomParkerCV} target="_blank" rel="noopener noreferrer"><h2>Download Resume</h2></a>
      {/* <h3>Proficiencies</h3> */}
      <ul>
        <li><img src={html}/></li>
        <li><img src={css}/></li>
        <li><img src={c}/></li>
        <li><img src={js}/></li>
        <li><img src={mongodb}/></li>
        <li><img src={nodejs}/></li>
        <li><img src={mysql}/></li>
        <li><img src={react}/></li>
        <li><img src={vscode}/></li>

        {/* Add more proficiencies as needed */}
      </ul>
    </section>
  );
};

export default Resume;
