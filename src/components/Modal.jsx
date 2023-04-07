import React from 'react';
import ResetButton from './ResetButton.jsx';


function Modal({ winner, resetGame }) {

	if(winner === null) return null;

	const modalText = winner ? `Ganó ${winner}` : 'Empate';

	return (

		<section className="modal">

      <h2>{modalText}</h2>

      <ResetButton resetGame={resetGame}/>

    </section>

	);
};


export default Modal;