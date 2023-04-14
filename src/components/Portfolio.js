import React from 'react';
import '../styles/portfolio.css';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-items">
        {/* Repeat this block for each portfolio item */}
        <div className ="portfolio-item">
<img src="project1.jpg" alt="Project 1" />
<h3>Project 1</h3>
<a href="https://deployed-app.com" target="_blank" rel="noopener noreferrer">Deployed App</a>
<a href="https://github.com/developer/project1" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
</div>
</div>
</section>
);
};

export default Portfolio;
