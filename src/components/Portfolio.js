import React from 'react';
import '../styles/portfolio.css';
import Project from './Project';
import projImg_1 from '../images/tile-pow.png';
import projImg_2 from '../images/tile-bandcamp.png';
import projImg_3 from '../images/tile-podcast.png';

const Portfolio = () => {

  const projectArray = [
    {
      title: 'powNFT',
      creator: 'skwidhubz',
      url: 'https://www.powNFT.com',
      image: projImg_1,
    },
    {
      title: 'Skwid Music',
      creator: 'skwidhubz',
      url: 'https://skwidmusic.bandcamp.com/',
      image: projImg_2,
    },
    {
      title: 'Tuna Fat Podcast',
      creator: 'skwidhubz',
      url: 'https://tunafat.podbean.com/',
      image: projImg_3,
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
            />
        })
      }
      
</div>
</section>
);
};

export default Portfolio;
