import React from 'react';
import './Board.css';
import Triomino from '../triomino/Triomino.tsx';
import { Position } from '../../types';

const testValues = [4, 5, 5];

const Board = () => {
  const triominos = document.querySelectorAll('.triomino');

  const checkForOverlaps = (position: Position, id: string) => {
    const otherTriominos = [...triominos].filter((triomino) => triomino.id !== id);

    otherTriominos.forEach((triomino) => {
      const rect = triomino.getBoundingClientRect();
      const pageX = rect.left + window.scrollX; // Page X position
      const pageY = rect.top + window.scrollY; // Page Y position
    });
  };

  return (
    <div id='board' className='board' style={{ width: '100' }}>
      <Triomino values={[0, 4, 5]} checkForOverlaps={checkForOverlaps} />
      <Triomino values={[1, 3, 3]} checkForOverlaps={checkForOverlaps} />
      <Triomino values={[2, 4, 3]} checkForOverlaps={checkForOverlaps} />
      <Triomino values={[5, 0, 1]} checkForOverlaps={checkForOverlaps} />
      <Triomino values={[4, 2, 4]} checkForOverlaps={checkForOverlaps} />
      <Triomino values={[4, 4, 2]} checkForOverlaps={checkForOverlaps} />
    </div>
  );
};

export default Board;
