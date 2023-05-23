import React from 'react';
import BottomImage from '../assets/images/Bottom.jpg';

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <img id="bottom"src={BottomImage} className="my-2" style={{ width: '15%' }} alt="bottomImage" />
      <p id="about-paragraph">Hello! The name is Allyson. I am a professional full stack web developer from Seattle, WA with an understanding of the technologies required to develop stunning applications. This part is testing to see how far this goes before it line breaks on mobile and  desktop view</p>
    </section>
  );
};

export default About;
