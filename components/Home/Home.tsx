import React from 'react';
import Taste from '@components/Home/AnnouncementGridLayout/Taste';
import Receipt from '@components/Home/AnnouncementGridLayout/Receipt';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home">
        <div className="hero">
          <img src="/logo.svg" alt="logo" />
          <h1>
            foodlify <br />
            Cook <span>delicious</span> food
          </h1>
          <p>even when there is no time</p>
        </div>
        <div className="announcement-grid-layout-container">
          <div className="announcement-grid-layout">
            <Taste />
            <Receipt />
            <div className="announcement-grid-layout__wine">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              aspernatur atque cum eligendi eos eum, fugit magni modi neque
              numquam quas quasi quis quisquam, ratione reiciendis rem soluta
              tenetur. Expedita.
            </div>
            <div className="announcement-grid-layout__fact">fact</div>
            <div className="announcement-grid-layout__advice">advice</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
