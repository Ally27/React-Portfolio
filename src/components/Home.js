import React from "react";

const Home = () => {
  return (
    <section id="home">
      <div className="home-header col-md-7">
        <h1 className="heading">
          Hello!
          <span className="wave">👋🏻</span>
        </h1>
        <h2 className="heading-name">
          I'm
          <strong className="main-name"> Allyson Gonzales </strong>
        </h2>
        <div id="container">
        <div className="typed-out"><p>  a Full stack Web developer</p></div>            
        </div>
      </div>
    </section>
  );
};

export default Home;
