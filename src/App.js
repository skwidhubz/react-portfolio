import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './styles/header.css';
import './styles/about.css';
import './styles/portfolio.css';
import './styles/contact.css';
import './styles/resume.css';
import './styles/footer.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="App">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      {activeSection === 'about' && <About />}
      {activeSection === 'portfolio' && <Portfolio />}
      {activeSection === 'contact' && <Contact />}
      {activeSection === 'resume' && <Resume />}
      <Footer />
    </div>
  );
};

export default App;
