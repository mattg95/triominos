import React from 'react';
import './Board.css';
import Triomino from '../triomino/Triomino.tsx';

const testValues = [4, 5, 5];

const Board = () => {
  return (
    <div id='board' className='board' style={{ width: '100' }}>
      <Triomino values={testValues} />
    </div>
  );
};

export default Board;
