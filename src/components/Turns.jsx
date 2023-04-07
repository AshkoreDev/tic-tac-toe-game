import React from 'react';
import Square from './Square.jsx';


function Turns({ turn, TURNS }) {

	// const className = `${squareClass} ${isSelected ? 'is-selected' : 'no-selected'}`;
	
	return (

		<section className="turn">
      <Square isSelected={turn === TURNS.X} squareClass="turn-square">{TURNS.X}</Square>
      <Square isSelected={turn === TURNS.O} squareClass="turn-square">{TURNS.O}</Square>
    </section>

	);
};


export default Turns;