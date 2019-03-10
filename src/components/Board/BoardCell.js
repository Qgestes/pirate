import React from 'react';
import styled from 'styled-components';
import emptyCellImg from './png/board_unit.png';
import monsterCellImg from './png/monster.png';
import merchantBoatCellImg from './png/merchant_boat.png';
import islandCellImg from './png/island.png';
import fortressCellImg from './png/fortress.png';
import playerBoatCellImg from './png/player_boat.png';

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
  background-image: url(${props => props.img});
  background-size: contain;
  width: 120px;
  height: 120px;
`;

const BoardCellHiddenDiv = styled.div`
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

const BoardCell = ({type, hidden, player, direction}) => {
  let element;
  let playerElement;

  if (player) {
    playerElement = (
      <BoardPlayerDiv direction={direction} img={playerBoatCellImg}>
        {player}
      </BoardPlayerDiv>
    );
  }

  if (hidden) {
    element = <BoardCellHiddenDiv />;
  } else {
    element = <BoardCellDiv img={typeImg[type]}>{playerElement}</BoardCellDiv>;
  }

  return <BoardCellDiv img={emptyCellImg}>{element}</BoardCellDiv>;
};

export default BoardCell;
