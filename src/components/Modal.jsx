import React from 'react';
import ResetButton from './ResetButton.jsx';
import styled from 'styled-components';


const GameModal = styled.section `
	width: 100%;
	height: 100vh;
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(24, 24, 24, .8);
`;

const ModalContent = styled.div `
	width: 250px;
	height: 250px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	border-radius: 10px;
	background: #181818;
`;

const ModalText= styled.h2 `
 	

	color: white;
`;


function Modal({ winner, resetGame }) {

	if(winner === null) return null;

	const modalText = winner ? `GANÓ ${winner}` : 'HUBO EMPATE';

	return (

		<GameModal>

      <ModalContent>
     	 	<ModalText>{modalText}</ModalText>

      	<ResetButton resetGame={resetGame}/>
      </ModalContent>

    </GameModal>

	);
};


export default Modal;