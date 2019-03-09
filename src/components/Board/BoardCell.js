import React from 'react';
import styled from 'styled-components';
import emptyCellImg from '../../../images/png/board_unit.png';
import monsterCellImg from '../../../images/png/monster.png';
import merchantBoatCellImg from '../../../images/png/merchant_boat.png';
import islandCellImg from '../../../images/png/island.png';
import fortressCellImg from '../../../images/png/fortress.png';

const typeImg = {
  empty: emptyCellImg,
  island: islandCellImg,
  monster: monsterCellImg,
  merchant: merchantBoatCellImg,
  fortress: fortressCellImg,
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

const BoardCell = ({type, hidden}) => {
  let element;

  if (hidden) {
    element = <BoardCellHiddenDiv />;
  } else {
    element = <BoardCellDiv img={typeImg[type]} />;
  }

  return <BoardCellDiv img={emptyCellImg}>{element}</BoardCellDiv>;
};

export default BoardCell;
