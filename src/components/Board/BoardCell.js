import React from 'react';
import styled from 'styled-components';
import emptyCellImg from './png/board_unit.png';
import monsterCellImg from './png/monster.png';
import merchantBoatCellImg from './png/merchant_boat.png';
import islandCellImg from './png/island.png';
import fortressCellImg from './png/fortress.png';
import playerBoatCellImg from './png/player_boat.png';
import {isAbsolute} from 'path';

const typeImg = {
  empty: emptyCellImg,
  island: islandCellImg,
  monster: monsterCellImg,
  merchant: merchantBoatCellImg,
  fortress: fortressCellImg,
};

const transformDirection = ({direction}) => {
  switch (direction) {
    case 'north':
      return 'rotate(0deg)';
    case 'south':
      return 'rotate(180deg)';
    case 'east':
      return 'rotate(90deg)';
    case 'west':
      return 'rotate(270deg)';
    default:
      return '';
  }
};

const BoardCellDiv = styled.div`
  display: flex;
  position: absolute;
  background-image: url(${props => props.img});
  background-size: contain;
  width: 120px;
  height: 120px;
`;

const BoardCellParentDiv = styled(BoardCellDiv)`
  position: relative;
`;

const BoardCellHiddenDiv = styled.div`
  position: absolute;
  margin: 10px;
  border-radius: 10px;
  background-color: brown;
  width: 100px;
  height: 100px;
`;

const BoardPlayerDiv = styled(BoardCellDiv)`
  color: white;
  font-size: x-large;
  transform: ${transformDirection};
  justify-content: center;
  align-items: center;
`;

const BoardCell = ({type, hidden, player1, player2}) => {
  let hiddenElement;
  let player1Element;
  let player2Element;

  if (player1) {
    player1Element = (
      <BoardPlayerDiv direction={player1} img={playerBoatCellImg}>
        {1}
      </BoardPlayerDiv>
    );
  }

  if (player2) {
    player2Element = (
      <BoardPlayerDiv direction={player2} img={playerBoatCellImg}>
        {2}
      </BoardPlayerDiv>
    );
  }

  if (hidden) {
    hiddenElement = <BoardCellHiddenDiv />;
  }

  return (
    <BoardCellParentDiv img={emptyCellImg}>
      <BoardCellDiv img={typeImg[type]} />
      {hiddenElement}
      {player1Element}
      {player2Element}
    </BoardCellParentDiv>
  );
};

export default BoardCell;
