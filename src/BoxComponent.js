import React, { useState, useEffect } from 'react';
import './FighterPicker.css';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function FighterPicker() {
  const [selectedFighter, setSelectedFighter] = useState(0);

  useEffect(() => {
    document.body.style.backgroundColor = getRandomColor();
  }, [selectedFighter]);

  const handleKeyPress = (event) => {
    if (event.key === 'ArrowRight') {
      setSelectedFighter((selectedFighter + 1) % 9);
    } else if (event.key === 'ArrowLeft') {
      setSelectedFighter((selectedFighter - 1 + 9) % 9);
    } else if (event.key === 'ArrowDown') {
      setSelectedFighter((selectedFighter + 3) % 9);
    } else if (event.key === 'ArrowUp') {
      setSelectedFighter((selectedFighter - 3 + 9) % 9);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [selectedFighter]);

  return (
    <div className="fighter-picker-container">
      <div className="fighter-picker">
        {[...Array(9)].map((_, index) => (
          <div
            key={index}
            className={`fighter-box ${selectedFighter === index ? 'selected' : ''}`}
            style={{ backgroundColor: getRandomColor() }}
            onClick={() => setSelectedFighter(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default FighterPicker;
