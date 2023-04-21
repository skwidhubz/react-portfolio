import React from 'react';
import '../styles/portfolio.css';
import Project from './Project';
import projImg_1 from '../images/tile-pow.png';
import projImg_2 from '../images/tile-pwa.png';
import projImg_3 from '../images/tile-weather-dashboard.png';
import projImg_4 from '../images/tile-travelbug.png';
import projImg_5 from '../images/tile-code-quiz.png';
import projImg_6 from '../images/tile-synth.png';

const Portfolio = () => {

  const projectArray = [
    {
      title: 'powNFT',
      creator: 'skwidhubz',
      url: 'https://www.powNFT.com',
      image: projImg_1,
      repo: 'https://github.com/AnAllergyToAnalogy/POWNFT-miner',
    },
    {
      title: 'Text-Editor',
      creator: 'skwidhubz',
      url: 'https://tmp-text-edit-pwa.herokuapp.com/',
      image: projImg_2,
      repo: 'https://github.com/skwidhubz/pwa-text-editor',
    },
    {
      title: 'Weather Dashboard',
      creator: 'skwidhubz',
      url: 'https://skwidhubz.github.io/weather-dashboard/',
      image: projImg_3,
      repo: 'https://github.com/skwidhubz/weather-dashboard',
    },
    {
      title: 'travelBug',
      creator: 'skwidhubz',
      url: 'https://skwidhubz.github.io/travelbug-app/',
      image: projImg_4,
      repo: 'https://github.com/skwidhubz/travelbug-app',
    },
    {
      title: 'Coding Quiz',
      creator: 'skwidhubz',
      url: 'https://skwidhubz.github.io/coding-quiz-tmp/',
      image: projImg_5,
      repo: 'https://github.com/skwidhubz/coding-quiz-tmp',
    },
    {
      title: 'AudioContext Synthesizer',
      creator: 'skwidhubz',
      url: 'https://skwidhubz.github.io/ac-library/',
      image: projImg_6,
      repo: 'https://github.com/skwidhubz/ac-library'
    },
  ]

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-items">
        {/* Repeat this block for each portfolio item */}
      {/* // render project */}
      {
        projectArray.map((projectData) => {
          return <Project 
            title = {projectData.title}
            creator = {projectData.creator}
            url = {projectData.url}
            image = {projectData.image}
            repo = {projectData.repo}
            />
        })
      }
      
</div>
</section>
);
};

export default Portfolio;
