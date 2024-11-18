import React from 'react';
import './Dots.css';
import { Dot } from '../dot/Dot.tsx';
import { theme } from '../../theme.ts';

interface Props {
  value: number;
  index: number;
}

const Dots: React.FC<Props> = ({ value, index }) => {
  const getPosition = () => {
    switch (index) {
      case 0:
        return 'translate(495,60)';
      case 1:
        return 'translate(660,660)';
      case 2:
        return 'translate(320,640)';
    }
  };
  const getSkew = () => {
    switch (index) {
      case 0:
        return 'skewX(7)';
      case 1:
        return 'skewX(30)';
      case 2:
        return 'skewY(20)';
    }
  };

  const getRotation = () => {
    switch (index) {
      case 0:
        return 'rotate(50)';
      case 1:
        return 'rotate(0)';
      case 2:
        return 'rotate(90)';
    }
  };
  const getColour = () => {
    switch (value) {
      case 0:
        return '';
      case 1:
        return theme.colours.black;
      case 2:
        return theme.colours.blue;
      case 3:
        return theme.colours.green;
      case 4:
        return theme.colours.yellow;
      case 5:
        return theme.colours.red;
    }
  };

  const position = getPosition();
  const skew = getSkew();
  const rotation = getRotation();
  const colour = getColour();

  return (
    <g transform={`scale(0.2), ${position}, ${rotation}, ${skew}`}>
      <g className='dots'>
        {value > 1 ? <circle cx='20%' cy='20%' r='20' fill={colour} /> : null}
        {value > 3 ? <circle cx='80%' cy='20%' r='20' fill={colour} /> : null}
        {value === 1 || value === 3 || value > 4 ? <circle cx='50%' cy='50%' r='20' fill={colour} /> : null}
        {value > 3 ? <circle cx='20%' cy='80%' r='20' fill={colour} /> : null}
        {value > 1 ? <circle cx='80%' cy='80%' r='20' fill={colour} /> : null}
      </g>
    </g>
  );
};
export default Dots;
