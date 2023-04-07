import React from 'react';
import Square from './Square.jsx';


function Board({ board, updatedBoard }) {

	return (

		<section className="game">
      {
        board.map((a, index) => {

          return (
            
            <Square key={index} index={index} updatedBoard={updatedBoard} squareClass="board-square">
              { a }
            </Square>

          );
        })
      }
    </section>

	);
};


export default Board;