'use client';

import React from 'react';

// Generates a random number within a given range
const random = (min: number, max: number) => Math.random() * (max - min) + min;

// Represents a single square
const Square = ({ id }: { id: number }) => {
  const size = React.useMemo(() => (Math.random() > 0.3 ? random(32, 80) : random(8, 24)), []);
  const animationDelay = React.useMemo(() => `${random(0, 60)}s`, []);
  const animationDuration = React.useMemo(() => `${random(30, 60)}s`, []);

  // Use useMemo to calculate these only once per component instance
  const style = React.useMemo(() => ({
    left: `${random(0, 100)}vw`,
    top: `${random(0, 100)}vh`,
    width: `${size}px`,
    height: `${size}px`,
    transform: `rotate(${random(-3, 3)}deg)`,
    animationDelay,
    animationDuration,
  }), [size, animationDelay, animationDuration]);

  return <span className="square" style={style} />;
};

export function BackgroundFX() {
  const SQUARES_COUNT = 10;

  return (
    <div className="background-fx-container" aria-hidden="true">
      <div className="stars" />
      <div className="stars2" />
      <div className="stars3" />
      <div className="squares-container">
        {Array.from({ length: SQUARES_COUNT }).map((_, i) => (
          <Square key={i} id={i} />
        ))}
      </div>
       <div className="shooting-stars">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="shooting-star" />
        ))}
      </div>
    </div>
  );
}
