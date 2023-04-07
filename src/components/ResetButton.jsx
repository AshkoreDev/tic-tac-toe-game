import React from 'react';


function ResetButton({ resetGame }) {

	const handleClick = () => resetGame();

	return (

		<button className="resetBtn" onClick={resetGame}>Jugar de nuevo</button>

	);
};


export default ResetButton;