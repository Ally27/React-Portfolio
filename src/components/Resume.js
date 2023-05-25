import React from 'react';
import ResumeImg1 from '../assets/images/resume-1.png';
import ResumeImg2 from '../assets/images/resume-2.png';

const Resume = () => {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <a className="resume-download" href="public/resume.pdf" download>Download Resume</a>
      <div className="resumeImg">
        <img src={ResumeImg1} alt="resume1" className="resume-image"></img>
        <img src={ResumeImg2} alt="resume2" className="resume-image"></img>        
      </div>
    </section>
  );
};

export default Resume;
