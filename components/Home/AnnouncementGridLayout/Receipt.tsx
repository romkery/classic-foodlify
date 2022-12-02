import Icon from '@mdi/react';
import { mdiClockTimeThreeOutline } from '@mdi/js';
import React, { useEffect, useRef } from 'react';

const Receipt = () => {
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    element.current?.addEventListener('mousemove', (e: MouseEvent) => {
      const getRotateY = () => {
        const x = e.pageX,
          y = e.pageY;
        const half = element.current.clientHeight / 2;

        if (y - element.current.offsetTop > half) {
          console.log(
            'width > half: ' +
              ((x - element.current.offsetLeft - half) / half) * 5
          );
          return -((y - element.current.offsetTop - half) / half) * 5;
        } else {
          console.log(
            'width < half: ' +
              ((x - element.current.offsetLeft - half) / half) * 5
          );
          return -((y - element.current.offsetTop - half) / half) * 5;
        }
      };

      const getRotateX = () => {
        const half = element.current.clientWidth / 2;
        const x = e.pageX,
          y = e.pageY;

        if (x - element.current.offsetLeft > half) {
          console.log(
            'width > half: ' +
              ((x - element.current.offsetLeft - half) / half) * 5
          );
          return ((x - element.current.offsetLeft - half) / half) * 5;
        } else {
          console.log(
            'width < half: ' +
              ((x - element.current.offsetLeft - half) / half) * 5
          );
          return ((x - element.current.offsetLeft - half) / half) * 5;
        }
      };

      element.current.style.transform = `perspective(500px) rotateX(${getRotateY()}deg) rotateY(${getRotateX()}deg)`;
    });

    element.current.addEventListener('mouseleave', (event: MouseEvent) => {
      element.current.style.transform = `initial`;
    });
  }, []);

  const setPerspectiveTransform = () => {};

  return (
    <div className="announcement-grid-layout__receipt" ref={element}>
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
