import React, { useState } from 'react';
import walnut from '../../images/walnut.png';
import Draggable from 'react-draggable';
import './Triomino.css';

const Triomino = ({ id = 1, imageUrl }) => {
  const size = 200;
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState(0);
  const rotationState = (rotation / 60) % 6;

  // console.log(position);

  // Calculate points for equilateral triangle
  const height = (size * Math.sqrt(3)) / 2;
  const points = `${size / 2},0 ${size},${height} 0,${height}`;

  const handleMouseDown = (e) => {
    console.log('down');
    setIsDragging(true);

    const { x, y } = e.target.getBoundingClientRect();
    setPosition({ x, y });
  };

  const handleMouseUp = (e) => {
    console.log('mouse up');
    setIsDragging(false);
    // Rotate when releasing the click if we haven't dragged
    const { x, y } = e.target.getBoundingClientRect();
    if (position?.x === x && position?.y === y) {
      setRotation((prevRotation) => prevRotation + 60);
    }
  };

  const centerX = size / 2;
  const centerY = height / 2;

  return (
    <Draggable>
      <div
        className='triangle'
        style={{
          transform: `rotate(${rotation}deg)`,
          transformOrigin: 'center center',
          transition: isDragging ? 'none' : 'transform 0.3s ease',
        }}
      />
      {/* <svg
          width={size}
          height={height}
          className={`triangle-container ${isDragging ? 'triangle-dragging' : 'triangle-draggable'}`}
          style={{
            transform: `rotate(${rotation}deg)`,
            transformOrigin: 'center center',
            transition: isDragging ? 'none' : 'transform 0.3s ease',
          }}>
          <defs>
            <pattern id={`pattern-${id}`} width='100%' height='100%' patternContentUnits='objectBoundingBox'>
              <image href={walnut} preserveAspectRatio='xMidYMid slice' width='1' height='1' />
            </pattern>
          </defs>
          <polygon points={points} fill={`url(#pattern-${id})`} className='triangle triangle-stroke' />
        </svg> */}
    </Draggable>
  );
};

export default Triomino;
