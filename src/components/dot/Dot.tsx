import React from 'react';

interface Props {
  index: number;
}

export const Dot: React.FC<Props> = ({ index }) => {
  const getColour = () => {
    switch (index) {
      case 0:
        return 'transparent';
      case 1:
        return 'black';
      case 2: {
        return 'blue';
      }
      case 3: {
        return 'green';
      }
      case 4: {
        return 'yellow';
      }
      case 5: {
        return 'red';
      }
      default:
        throw new Error('Max number of 5 dots');
    }
  };
  const getXY = () => {
    switch (index) {
      case 0:
        return { x: '50%', y: '50%' };
      case 1:
        return { x: '10%', y: '10%' };
      case 2:
        return { x: '90%', y: '90%' };
        case 3:
        return { x: '90%', y: '90%' };

      case 2: {
        return 'blue';
      }
      case 3: {
        return 'green';
      }
      case 4: {
        return 'yellow';
      }
      case 5: {
        return 'red';
      }
      default:
        throw new Error('Max number of 5 dots');
    }
  };
  const colour = getColour();
  return <circle cx='50%' cy='50%' r='5' fill={colour} />;
};
