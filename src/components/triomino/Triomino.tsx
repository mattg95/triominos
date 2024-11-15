import React, { useEffect, useRef, useState } from 'react';
import walnut from '../../images/walnut.png';
import Draggable from 'react-draggable';
import Dots from '../dots/Dots.tsx';
import { Position } from '../../types';
import { v4 as uuid } from 'uuid';
import useStore from '../../hooks/useStore.ts';

interface Props {
  id: string;
  values: [number, number, number];
}

const Triomino: React.FC<Props> = ({ id, values }) => {
  const defaultPosition = { x: 0, y: 0 };
  const { state, setKeyValue } = useStore();
  const [position, setPosition] = useState(defaultPosition);

  const ref = useRef(null);

  useEffect(() => {
    const { x, y } = ref.current?.getBoundingClientRect();
    setKeyValue(id, { x, y });
  }, [position]);

  const size = 200;
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState(0);
  const rotationState = (rotation % 360) / 60;

  // Calculate points for equilateral triangle
  const height = (size * Math.sqrt(3)) / 2;
  const points = `${size / 2},0 ${size},${height} 0,${height}`;

  const handleMouseDown = (e) => {
    setIsDragging(true);

    const { x, y } = e.target.getBoundingClientRect();
    setPosition({ x, y });
  };
  console.log(state);

  const handleMouseUp = (e) => {
    setIsDragging(false);
    // Rotate when releasing the click if we haven't dragged
    const { x, y } = ref.current.getBoundingClientRect();
    setPosition({ x, y });

    if (position?.x === x && position?.y === y) {
      setRotation((prevRotation) => prevRotation + 60);
    }

    Object.entries(state)?.forEach(([key, val]) => {
      if (key !== id) {
        console.log(y, val.y);
        if (roundTo10(x) === roundTo10(val.x)) {
          console.log('x matches');
        }
        if (roundTo10(y) === roundTo10(val.y)) {
          console.log('y matches');
        }
      }
    });
  };

  const roundTo10 = (n) => Math.ceil(n / 10) * 10;

  const centerX = size / 2;
  const centerY = height / 2;

  function getTanDeg(deg) {
    const rad = (deg * Math.PI) / 180;
    return Math.tan(rad);
  }

  const triangleCenter = (size * getTanDeg(30)) / 2;

  return (
    <Draggable defaultPosition={defaultPosition} onMouseDown={handleMouseDown} onStop={handleMouseUp}>
      <div style={{ border: '1px solid black' }} className='triomino' id={id} ref={ref}>
        <svg
          width={size}
          height={height}
          className={`triangle-container ${isDragging ? 'triangle-dragging' : 'triangle-draggable'}`}
          style={{
            transform: `rotate(${rotation}deg) translateY(${-1 * triangleCenter * 0.5}px)`,
            transformOrigin: `${centerX}px ${centerY}px`,
            transition: isDragging ? 'none' : 'transform 0.3s ease',
            zIndex: -1,
          }}>
          <defs style={{ zIndex: -1 }}>
            <pattern id={`pattern-${id}`} width='100%' height='100%' patternContentUnits='objectBoundingBox'>
              <image href={walnut} preserveAspectRatio='xMidYMid slice' width='1' height='1' />
            </pattern>
            <pattern id={`dot-pattern-${id}`} width='10' height='10' patternUnits='userSpaceOnUse'>
              <circle cx='5' cy='5' r='2' fill='red' />
            </pattern>
          </defs>
          <polygon points={points} fill={`url(#pattern-${id})`} className='triangle triangle-stroke' />
          <Dots value={values[0]} index={0} />
          <Dots value={values[1]} index={1} />
          <Dots value={values[2]} index={2} />
        </svg>
      </div>
    </Draggable>
  );
};

export default Triomino;
