import Icon from '@mdi/react';
import { mdiClockTimeThreeOutline } from '@mdi/js';
import React from 'react';

const Receipt = () => {
  return (
    <div className="announcement-grid-layout__receipt">
      <div className="container">
        <img
          src="https://www.thespruceeats.com/thmb/-K8SNGQtKc1lW16qQnV-g6ImJYk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/russian-ukrainian-solyanka-soup-recipe-1135533-step-08-ec6bbff70af142aeb12335e196ab32e2.jpg"
          alt="solyanka soup"
        />
        <div className="receipt-info">
          <p>Solyanka soup</p>
          <div className="receipt-info__time">
            <Icon path={mdiClockTimeThreeOutline} />
            <span>45 min</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
