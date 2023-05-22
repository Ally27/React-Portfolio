import React from 'react';
import homepage from '../assets/images/homepage.png';
import adventure from '../assets/images/adventure.png';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
        {/* Project 1 */}
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
      {/* Project 2 */}
      <div class="project">
        <div class="project-image">
          <img src={adventure} alt="Adventure Finder"></img>
          </div>
        <h3>Adventure Finder</h3>
        <span class="project-description">Adventure Finder<p>Adventure Finder includes a large area map and search bar which autocompletes a city result given a user searches for city. The application provides the most results in all three categories for larger metropolitan areas (i.e. Austin, TX or Seattle, WA). Smaller cities or townships may only provide brewery or hotel information, where "entertainment" businesses categorized by the Geoapify API may not be present!</p>
        <a class="project-links" href="https://jbungurait.github.io/Adventure_Finder/">View Project</a>
        <a class="project-links" href="https://github.com/Ally27/Adventure_Finder">GitHub Repository</a>
        </span>
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
