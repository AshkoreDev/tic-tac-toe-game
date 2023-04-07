import React from 'react';
import styled from 'styled-components';


const SquareItem = styled.div `
	font-size: 18px;
	font-weight: bold;
	text-align: center;
`;


function Square({ index, children, isSelected, updatedBoard, squareClass }) {

	const className = `${squareClass} ${isSelected ? 'is-selected' : 'no-selected'}`;

	const handleClick = () => updatedBoard(index);

  return (
  
	  <SquareItem className={className} onClick={handleClick}>
	    { children }
	  </SquareItem>

  );
};


export default Square;