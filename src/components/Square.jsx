import React from 'react';


function Square({ index, children, isSelected, updatedBoard }) {

	const className = `square ${isSelected ? 'is-selected' : ''}`;

	const handleClick = () => updatedBoard(index);

  return (
  
	  <div className={className} onClick={handleClick}>
	    { children }
	  </div>

  );
};


export default Square;