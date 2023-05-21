import React, {useState} from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './App.css';
//needs adjustments here
const App= () =>{
  const [currentSection, setCurrentSection] = useState('About');
  const handleNavClick = (section) => {
    setCurrentSection(section);
  };
  return (
    <div className="app">
      <Header />
      <Navigation currentSection={currentSection} handleNavClick={handleNavClick} />
      <main>
        {currentSection === 'about' && <About />}
        {currentSection === 'portfolio' && <Portfolio />}
        {currentSection === 'contact' && <Contact />}
        {currentSection === 'resume' && <Resume />}
      </main>
      <footer>
        {/* Footer content coming soon */}
      </footer>
    </div>
  );
};

export default App;
