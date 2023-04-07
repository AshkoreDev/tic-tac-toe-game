import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import Square from './components/Square.jsx';
import Board from './components/Board.jsx';
import Turns from './components/Turns.jsx';
import ResetButton from './components/ResetButton.jsx';
import Modal from './components/Modal.jsx';

import { TURNS, WINNER_COMBOS } from './constants/index.js';


function App() {

  const initialBoard = Array(9).fill(null);

  const [board, setBoard] = useState(initialBoard);
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);

  const checkWinner = (boardTocheck) => {

    for (const combo of WINNER_COMBOS) {

      const [a,b,c] = combo;

      if(boardTocheck[a] && boardTocheck[a] === boardTocheck[b] && boardTocheck[a] === boardTocheck[c]) {

        return boardTocheck[a];
      }
    }

    return null;
  };

  const resetGame = () => {

    setBoard(initialBoard);
    setTurn(TURNS.X);
    setWinner(null);
  };

  const checkEndGame = (newBoard) => newBoard.every((square) => square !== null);

  const updatedBoard = (index) => {

    if(board[index] || winner) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

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

  return (
  
    <main>

      <h1>TIC TAC TOE</h1>

      <Board board={board} updatedBoard={updatedBoard}/>

      <Turns turn={turn} TURNS={TURNS}/>

      <Modal winner={winner} resetGame={resetGame}/>

      <ResetButton resetGame={resetGame}/>
      
    </main>

  );
};


export default App;