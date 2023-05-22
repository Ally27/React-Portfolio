import React from 'react';
import ResumePdf from '../public/assets/resume.pdf';

const Resume = () => {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <a class="resume-download" href={ResumePdf} download>Download Resume</a>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        {/* Add more proficiencies as needed */}
      </ul>
    </section>
  );
};

export default Resume;
