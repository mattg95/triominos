import React from 'react';
import './Board.css';
import Triomino from '../triomino/Triomino.tsx';

const Board = () => {
  return (
    <div id='board' className='board' style={{ width: '100' }}>
      <Triomino />
    </div>
  );
};

export default Board;
