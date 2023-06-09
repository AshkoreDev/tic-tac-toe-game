import styled from 'styled-components';
import Square from './Square.jsx';


const GameBoard = styled.section `
  width: 300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  justify-items: center;
  gap: 20px;
  background: #181818;
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