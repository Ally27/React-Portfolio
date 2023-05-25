import React from 'react';

const Navigation = ({ currentSection, handleNavClick }) => {
  return (
    <nav>
      <ul>
      <li className={currentSection === 'home' ? 'active' : ''}>
          <a href="#home" onClick={() => handleNavClick('home')}>
            Home
          </a>
        </li>
        <li className={currentSection === 'about' ? 'active' : ''}>
          <a href="#about" onClick={() => handleNavClick('about')}>
            About Me
          </a>
        </li>
        <li className={currentSection === 'portfolio' ? 'active' : ''}>
          <a href="#portfolio" onClick={() => handleNavClick('portfolio')}>
            Portfolio
          </a>
        </li>
        <li className={currentSection === 'contact' ? 'active' : ''}>
          <a href="#contact" onClick={() => handleNavClick('contact')}>
            Contact
          </a>
        </li>
        <li className={currentSection === 'resume' ? 'active' : ''}>
          <a href="#resume" onClick={() => handleNavClick('resume')}>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;