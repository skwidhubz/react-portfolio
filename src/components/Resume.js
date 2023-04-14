import React from 'react';
import '../styles/resume.css';

const Resume = () => {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <a href="resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        {/* Add more proficiencies as needed */}
      </ul>
    </section>
  );
};

export default Resume;
