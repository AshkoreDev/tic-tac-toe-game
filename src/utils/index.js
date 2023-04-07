import { WINNER_COMBOS } from './../constants/index.js';


export const checkWinner = (boardTocheck) => {

  for (const combo of WINNER_COMBOS) {

    const [a,b,c] = combo;

    if(boardTocheck[a] && boardTocheck[a] === boardTocheck[b] && boardTocheck[a] === boardTocheck[c]) {

      return boardTocheck[a];
    }
  }

  return null;
};


export const checkEndGame = (newBoard) => newBoard.every((square) => square !== null);