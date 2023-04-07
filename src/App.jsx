import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import styled from 'styled-components';

import Board from './components/Board.jsx';
import Turns from './components/Turns.jsx';
import Modal from './components/Modal.jsx';
import Square from './components/Square.jsx';
import ResetButton from './components/ResetButton.jsx';

import { TURNS } from './constants/index.js';
import { checkWinner, checkEndGame } from './utils/index.js';


const GameMain = styled.main `
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;


function App() {

  const [board, setBoard] = useState(() => {

    const boardFromStorage = window.localStorage.getItem('board');
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null);
  });

  console.log(board)

  const [turn, setTurn] = useState(() => {

     const turnFromStorage = window.localStorage.getItem('turn');
     return turnFromStorage ?? TURNS.X;
  });

  const [winner, setWinner] = useState(null);

  const updatedBoard = (index) => {

    if(board[index] || winner) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    window.localStorage.setItem('board', JSON.stringify(newBoard));
    window.localStorage.setItem('turn', newTurn);

    const newWinner = checkWinner(newBoard);
    if(newWinner) {

      setWinner(newWinner);
      confetti({
        particleCount: 500,
        spread: 80,
        origin: { y: 0.8 }
      });

    } else if(checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  const resetGame = () => {

    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    window.localStorage.removeItem('board');
    window.localStorage.removeItem('turn');
  };

  return (
  
    <GameMain>

      <h1>TIC TAC TOE</h1>

      <Board board={board} updatedBoard={updatedBoard}/>

      <Turns turn={turn} TURNS={TURNS}/>

      <Modal winner={winner} resetGame={resetGame}/>

      <ResetButton resetGame={resetGame}/>
      
    </GameMain>

  );
};


export default App;