import React from 'react';
import BottomImage from '../assets/images/Bottom.jpg';

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <img id="bottom"src={BottomImage} className="my-2" style={{ width: '15%' }} alt="bottomImage" />
      <p id="about-paragraph">Hey there! I'm Allyson, a full-stack web developer from Seattle, WA. I specialize in creating awesome applications. I'm passionate about coding and always eager to learn new things. From front-end (HTML, CSS, JavaScript) to back-end (Node.js,MySQL, MongoDB), I've got you covered. I also enjoy exploring design and making sure everything looks great. When I'm not coding, you can find me enjoying nature in the Pacific Northwest or immersing myself in Seattle's arts scene. I love what I do and strive to create impactful digital experiences. </p>
    </section>
  );
};

export default About;
