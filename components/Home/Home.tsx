import React from 'react';
import Taste from '@components/Home/AnnouncementGridLayout/Taste';
import Receipt from '@components/Home/AnnouncementGridLayout/Receipt';
import Wine from '@components/Home/AnnouncementGridLayout/Wine';
import FoodFact from '@components/Home/AnnouncementGridLayout/FoodFact';
import Advice from '@components/Home/AnnouncementGridLayout/Advice';

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
            <Wine />
            <FoodFact />
            <Advice />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
