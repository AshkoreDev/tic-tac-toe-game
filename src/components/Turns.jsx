import React from 'react';
import Square from './Square.jsx';
import styled from 'styled-components';


const GameTurn = styled.section `
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
`;


function Turns({ turn, TURNS }) {
	
	return (

		<GameTurn>
      <Square isSelected={turn === TURNS.X} squareClass="turn-square">{TURNS.X}</Square>
      <Square isSelected={turn === TURNS.O} squareClass="turn-square">{TURNS.O}</Square>
    </GameTurn>

	);
};


export default Turns;