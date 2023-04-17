import styled from 'styled-components';


const SquareItem = styled.div `
	width: 86px;
	height: 86px;
	padding: 8px 0;	
	color: #ec0000;
	font-size: 3rem;
	font-weight: bold;
	text-align: center;
	background: #fff;

		&.turnColor {
			color: #1002ed;
		}
		&:hover {
			cursor: pointer;
		}
`;


function Square({ index, children, updatedBoard }) {

	const className = (children === '❌') ? 'turnColor' : '';

	const handleClick = () => updatedBoard(index);

  return (
  
	  <SquareItem onClick={handleClick} className={className}>
	    { children }
	  </SquareItem>

  );
};

export default Square;