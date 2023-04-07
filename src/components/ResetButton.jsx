import React from 'react';
import styled from 'styled-components';

const ResetBtn = styled.button `
	padding: 8px;
	color: #fff;
	font-size: 1rem;
	border-radius: 8px;
	border: transparent;
	background: #4b575c;

	&:hover {
		cursor: pointer;
		opacity: 0.8;
	}
`;

function ResetButton({ resetGame }) {

	const handleClick = () => resetGame();

	return (

		<ResetBtn onClick={resetGame}>Jugar de nuevo</ResetBtn>

	);
};


export default ResetButton;