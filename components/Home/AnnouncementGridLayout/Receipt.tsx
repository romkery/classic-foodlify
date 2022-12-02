import Icon from '@mdi/react';
import { mdiClockTimeThreeOutline } from '@mdi/js';
import React, { useRef } from 'react';
import useReceiptCardAnimation from '@utils/use/useReceiptCardAnimation';

const Receipt = () => {
  const container = useRef<HTMLDivElement>(null);
  const receipt = useRef<HTMLDivElement>(null);
  useReceiptCardAnimation(container, receipt);

  return (
    <div className="announcement-grid-layout__receipt" ref={receipt}>
      <div className="container" ref={container}>
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
