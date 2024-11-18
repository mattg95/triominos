import React, { useEffect } from 'react';
import './Board.css';
import Triomino from '../triomino/Triomino.tsx';
import { Position } from '../../types';
import useStore from '../../hooks/useStore.ts';

const testValues = [4, 5, 5];

const Board = () => {
  const triominos = document.querySelectorAll('.triomino');

  const { state } = useStore();

  return (
    <div id='board' className='board' style={{ width: '100' }}>
      <Triomino values={[0, 4, 5]} id={'1'} />
      <Triomino values={[3, 3, 3]} id={'2'} />
      {/*<Triomino values={[2, 4, 3]}  />
      <Triomino values={[5, 0, 1]}  />
      <Triomino values={[4, 2, 4]}  />
      <Triomino values={[4, 4, 2]}  /> */}
    </div>
  );
};

export default Board;
