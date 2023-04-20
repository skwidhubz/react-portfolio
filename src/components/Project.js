import React from 'react';
import '../styles/project.css';


const Project = ({title, creator, url, image}) =>{
    return (
        <div className ="portfolio-item">
        <img src={image} alt="Project 1" />
        <h3>{title}</h3>
        <a href={url} target="_blank" rel="noopener noreferrer">Deployed Application</a>
        <a href={creator} target="_blank" rel="noopener noreferrer">{creator}</a>
        <a href="https://github.com/developer/project1" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </div>
    );
}

export default Project;


// For each project you feature in your portfolio, you should include the following:

// An image of the deployed application (either a GIF or a screenshot)

// The title of the project

// A link to the deployed application

// A link to the corresponding GitHub repository