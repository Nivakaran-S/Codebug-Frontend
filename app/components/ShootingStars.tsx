'use client';
import React, { useEffect } from 'react';
import './shooting.css';

const ShootingStars: React.FC = () => {
  useEffect(() => {
    const createStar = () => {
      const star = document.createElement('div');
      star.className = 'star';
      document.querySelector(`.${'container'}`)?.appendChild(star);

      const duration = Math.random() * 2000 + 1000; // 1-3s
      const delay = Math.random() * 5000; // 0-5s

      star.animate(
        [
          { transform: 'translate(0, 0) scale(0)', opacity: 0 },
          { transform: 'translate(-100vw, 100vh) scale(1)', opacity: 1 },
          { transform: 'translate(-100vw, 100vh) scale(0)', opacity: 0 },
        ],
        {
          duration,
          delay,
          iterations: 1,
          fill: 'forwards',
        }
      ).onfinish = () => star.remove();

      setTimeout(createStar, duration + delay);
    };

    // Create 10 initial stars
    for (let i = 0; i < 10; i++) {
      setTimeout(createStar, Math.random() * 5000);
    }
  }, []);

  return <div className={'container'}></div>;
};

export default ShootingStars;
