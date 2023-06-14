import React from 'react';
import homepage from '../assets/images/homepage.png';
import adventure from '../assets/images/adventure.png';
import weather from '../assets/images/Weather.png';
import notevault from '../assets/images/NoteVault.png';
import quiz from '../assets/images/quiz.png';
import generator from '../assets/images/generator.png';
import blog from '../assets/images/blog.png';
import verse from '../assets/images/StreamVerseApp.png';

const projects = [
  
  {
    title: 'StreamVerse',
    image: verse,
    description: 'A user-centric video sharing platform allowing seamless registration, uploading, viewing, interaction, and sharing of videos. Inspired by YouTube, it offers a polished, user-friendly interface. Secure user login and access control are ensured with JWT-based authentication.',
    liveLink: 'https://streamverse23.herokuapp.com',
    repoLink: 'https://github.com/kylearmour1/StreamVerse'
  },
  {
    title: 'Music to My Ears',
    image: homepage,
    description: 'Music to My Ears is a full stack web application that allows users to share their Spotify playlists to a user-friendly, interactive site',
    liveLink: 'https://music-to-my-ears1.herokuapp.com/login',
    repoLink: 'https://github.com/Ally27/Music-to-My-Ears'
  },
  {
    title: 'Adventure Finder',
    image: adventure,
    description: 'Adventure Finder includes a large area map and search bar which autocompletes a city result given a user searches for city. The application provides the most results in all three categories',
    liveLink: 'https://jbungurait.github.io/Adventure_Finder/',
    repoLink: 'https://github.com/Ally27/Adventure_Finder'
  },
  {
    title: 'Developer Blog',
    image: blog,
    description: 'The Weather App is a simple and user-friendly application that provides weather forecasts for any location. It allows users to quickly and easily obtain information on temperature ranges and weather conditions, making it ideal for everyday use.',
    liveLink: 'https://developerblog1.herokuapp.com/',
    repoLink: 'https://github.com/Ally27/Developer-Blog'
  },
  {
    title: 'The Weather-App',
    image: weather,
    description: 'The Weather App is a simple and user-friendly application that provides weather forecasts for any location. It allows users to quickly and easily obtain information on temperature ranges and weather conditions, making it ideal for everyday use.',
    liveLink: 'https://ally27.github.io/The-Weather-App/',
    repoLink: 'https://github.com/Ally27/The-Weather-App'
  },
  {
    title: 'NoteVault',
    image: notevault,
    description: 'A professional note taker application designed to secure your goals',
    liveLink: 'https://note-vault.herokuapp.com/',
    repoLink: 'https://github.com/Ally27/NoteVault'
  },
  {
    title: 'Master-JavaScript-Quiz',
    image: quiz,
    description: 'This web application is designed to be an interactive quiz game while asking JavaScript related questions. Through the process of building this game I have learned different useful programming techniques. Although it was quiet a challenge and still has many errors, Im excited to return with more knowledge and correct these issues.',
    liveLink: 'https://ally27.github.io/Master-JavaScript-Quiz/',
    repoLink: 'https://github.com/Ally27/Master-JavaScript-Quiz'
  },
  {
    title: 'Password Generator',
    image: generator,
    description: 'An application, which its main function is to generate random passwords with one click.',
    liveLink: 'https://ally27.github.io/Password-Generator/',
    repoLink: 'https://github.com/Ally27/Password-Generator'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="project-wrapper">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-details">
              <h3>{project.title}</h3>
              <span className="project-description">{project.description}</span>
              <a className="project-links" href={project.liveLink}>View Project</a>
              <a className="project-links" href={project.repoLink}>GitHub Repository</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
