import styled from 'styled-components';


const ResetBtn = styled.button `
	padding: 10px;
	color: #181818;
	font-size: 1rem;
	font-weight: bold;
	border-radius: 8px;
	border: 1px solid #181818;
	background: #F66B0E;

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