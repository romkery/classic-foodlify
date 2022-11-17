import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home">
        <div className="home__hero">
          <img src="/logo.svg" alt="logo" />
          <h1>
            foodlify <br />
            Cook <span>delicious</span> food
          </h1>
          <p>even when there is no time</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
