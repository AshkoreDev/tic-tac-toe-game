import React from 'react';
import styled from 'styled-components';


const GameTurn = styled.section `
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
`;

const TurnSquare = styled.p `
	width: 50px;
	height: 50px;
	padding: 12px 0;
	color: #181818;
	font-size: 18px;
	font-weight: bold;
	text-align: center;
	border-radius: 8px;
	border: 1px solid #181818;
	background: transparent;

		&.is-selected {
			color: #181818;
			background:  #F66B0E;
			border: transparent;
		}
`;


function Turns({ turn, TURNS }) {

	return (

		<GameTurn>
			<h2>Turno</h2>
      <TurnSquare className={turn === TURNS.X ? 'is-selected' : ''}>{TURNS.X}</TurnSquare>
      <TurnSquare className={turn === TURNS.O ? 'is-selected' : ''}>{TURNS.O}</TurnSquare>
    </GameTurn>

	);
};


export default Turns;