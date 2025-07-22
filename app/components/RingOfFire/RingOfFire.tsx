// components/RingOfFire.tsx
import React from 'react';
import './style.css'; // Use CSS modules

const RingOfFire: React.FC = () => {
  return (
    <div className="container  flex items-center justify-center">
      <div className="circle w-[100vh] h-[100vh] "></div>
      <svg>
        <filter id="wavy">
          <feTurbulence
            x="0"
            y="0"
            baseFrequency="0.009"
            numOctaves="3"
            seed="2"
          >
            <animate
              attributeName="baseFrequency"
              dur="60s"
              values="0.02;0.006;0.02"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="30" />
        </filter>
      </svg>
    </div>
  );
};

export default RingOfFire;