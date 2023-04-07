import React from 'react';


function Square({ index, children, isSelected, updatedBoard, squareClass }) {

	const className = `${squareClass} ${isSelected ? 'is-selected' : 'no-selected'}`;

	const handleClick = () => updatedBoard(index);

  return (
  
	  <div className={`square ${className}`} onClick={handleClick}>
	    { children }
	  </div>

  );
};


export default Square;