import React from 'react';
import '../styles/about.css';

// const About = () => {
//   return (
//     <section className="about">
//       <h2>About Me</h2>
//       <img src="avatar.jpg" alt="Developer Avatar" />
//       <p>Short bio about the developer...</p>
//     </section>
//   );
// };

// export default About;

const About = () => {
    return (
      <section className="about-section">
        <div className="about-container">
          <div className="about-image-container">
            <img className="about-image" src="/vicky-hladynets-C8Ta0gwPbQg-unsplash.jpg" alt="Developer Avatar" />
          </div>
          <div className="about-content">
            <h2 className="about-title">About Me</h2>
            <p className="about-text">
              Hello! My name is John Doe, and I'm a passionate web developer with over 5 years of experience in building
              modern and responsive web applications. I specialize in front-end development using technologies such as
              HTML, CSS, JavaScript, and React.
            </p>
            <p className="about-text">
              I'm committed to writing clean, efficient, and maintainable code. I enjoy taking on new challenges and
              learning new technologies to stay up-to-date with industry trends. My goal is to create user-friendly and
              visually appealing web experiences that meet the needs of clients and users.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
