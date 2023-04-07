import React, { useState, useEffect } from 'react';
import Square from './components/Square.jsx';


const TURNS = {
  X: 'X',
  O: 'O'  
};

const WINNER_COMBOS = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ];


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

    } else if(checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  // useEffect(() => {

  // }, []);

  return (
  
    <main>
      <section className="game">
        {
          board.map((a, index) => {

            return (
              
              <Square key={index} index={index} updatedBoard={updatedBoard}>
                { a }
              </Square>

            );
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      {
        winner !== null && (

          <section>

            <h2>
              {
                winner ? `Ganó ${winner}` : 'Empate' 
              }
            </h2>

          </section>
        )
      }

      <button onClick={resetGame}>Jugar de nuevo</button>
      
    </main>

  );
};


export default App;