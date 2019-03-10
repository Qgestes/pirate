import React from 'react';
import styled from 'styled-components';

import BoardCell from './BoardCell';

const BoardRowDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const isPlayerOnCell = (x, y, player) => {
  if (x !== player.posX) {
    return false;
  }
  if (y !== player.posY) {
    return false;
  }

  return true;
};

const calcPlayer = (x, y, player1, player2) => {
  if (isPlayerOnCell(x, y, player1)) return {player: 1, direction: player1.direction};
  if (isPlayerOnCell(x, y, player2)) return {player: 2, direction: player2.direction};

  return {};
};

const BoardRow = ({y, row, player1, player2}) => {
  const columns = [];

  for (let x = 0; x < 5; x += 1) {
    const cellState = row[x];
    const playerState = calcPlayer(x, y, player1, player2);

    columns[x] = <BoardCell {...cellState} {...playerState} />;
  }

  return <BoardRowDiv>{columns}</BoardRowDiv>;
};

const Board = ({state, player1, player2}) => {
  const rows = [];

  for (let y = 0; y < 5; y += 1) {
    rows[y] = <BoardRow y={y} row={state[y]} player1={player1} player2={player2} />;
  }

  return <div>{rows}</div>;
};

export default Board;
