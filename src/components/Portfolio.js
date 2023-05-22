import React from 'react';
import homepage from '../assets/images/homepage.png';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div class="project">
        <div class="project-image">
          <img src={homepage} alt="Music to My Ears"></img>
        </div>

        <div class="project-details">
          <h3>Music to My Ears</h3>
          <span class="project-description">Music to My Ears<p>is a full stack web application that allows users to share their Spotify playlists to a user-friendly, interactive site. You can create your own account, post your own playlists, like or comment on other people's playlists, and more! You can see what the community is posting or interacting with, making it easy to engage with other users. When you view a post on the site, it gets information about the playlist to display its tracks right on the page. With Music to My Ears, finding music has never been easier!</p>
          <a class="project-links" href="https://music-to-my-ears1.herokuapp.com/login">View Project</a>
          <a class="project-links" href="https://github.com/Ally27/Music-to-My-Ears1">GitHub Repository</a>
          </span>
      </div>
      </div>

      <div class="project">
        {/* Project 1 content */}
      </div>

      <div class="project">
        {/* Project 1 content */}
      </div>

      <div class="project">
        {/* Project 1 content */}
      </div>


      {/* Repeat the above structure for other projects */}
    </section>
  );
};

export default Portfolio;
