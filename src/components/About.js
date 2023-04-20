import React from 'react';
import '../styles/about.css';
import profile_photo from '../images/tom_small.jpg';


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
            <img className="about-image" src={profile_photo} alt="Developer Avatar" />
          </div>
          <div className="about-content">
            <h2 className="about-title">Tom Parker: student.coding(full-stack)</h2>
            <p className="about-text">
            As a junior developer, I have a strong foundation in programming languages such as HTML, CSS, JavaScript, Node.js, and React. I am passionate about web development and are eager to learn new technologies and tools to build high-quality web applications.
            </p>
            <p className="about-text">
            I have experience working on both front-end and back-end projects and are comfortable with creating responsive designs and implementing functionality using JavaScript frameworks. I am a team player and enjoy collaborating with other developers to solve complex problems and deliver projects on time.

            I am always seeking to improve your skills and stay up-to-date with the latest industry trends and best practices in web development.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
