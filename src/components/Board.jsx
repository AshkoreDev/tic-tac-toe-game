import React from 'react';
import Square from './Square.jsx';
import styled from 'styled-components';


const GameBoard = styled.section `
  width: 300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  justify-items: center;
  gap: 20px 10px;
`;


function Board({ board, updatedBoard }) {

	return (

		<GameBoard>
      {
        board.map((a, index) => {

          return (
            
            <Square key={index} index={index} updatedBoard={updatedBoard} squareClass="board-square">
              { a }
            </Square>

          );
        })
      }
    </GameBoard>

	);
};


export default Board;