import React from "react";
import styled from "styled-components";

const BoardCellDiv = styled.div`
  padding: 40px;
  border: 1px solid black;
`;

const BoardCell = ({ i, j }) => {
  return (
    <BoardCellDiv>
      {`(${i} , ${j})`}
    </BoardCellDiv>
  );
};

const BoardRowDiv = styled.div`
  display: flex;
  flex-direction: columns;
`;

const BoardRow = ({ i }) => {
  const columns = [];

  for (let j = 0; j < 5; j = j + 1) {
    columns[j] = <BoardCell i={i} j={j} />;
  }

  return <BoardRowDiv>{columns}</BoardRowDiv>;
};

const Board = props => {
  const rows = [];

  for (let i = 0; i < 5; i = i + 1) {
    rows[i] = <BoardRow i={i} />;
  }

  return <div>{rows}</div>;
};

export default Board;
