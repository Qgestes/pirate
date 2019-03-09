import React from 'react';
import { string } from 'postcss-selector-parser';

const Board = (props) => { 

	const rows = [];
	
	for (let i=0; i<5; i++){
		const columns = [];
		for (let j=0; j<5; j++){
			columns [j] = <div> {`(${i} , ${j})`} </div>;
		}
		rows[i] = <div> {columns} </div>;
	}

	return (
		<div>
			{rows}
		</div>
	)	

}

export default Board;