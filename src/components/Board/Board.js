import React from 'react';
import styled from 'styled-components';

import BoardCell from './BoardCell';

const BoardRowDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const BoardRow = ({row}) => {
  const columns = [];

  for (let j = 0; j < 5; j += 1) {
    const cellState = row[j];
    columns[j] = <BoardCell {...cellState} />;
  }

  return <BoardRowDiv>{columns}</BoardRowDiv>;
};

const Board = ({board}) => {
  const rows = [];

  for (let i = 0; i < 5; i += 1) {
    rows[i] = <BoardRow row={board[i]} />;
  }

  return <div>{rows}</div>;
};

export default Board;
