import React from 'react';
import styled from 'styled-components';
import boatImg from '../Board/png/player_boat.png';

const ContainerDiv = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  //   border: 10px solid grey;
  box-sizing: border-box;
  width: 150px;
  height: 200px;
`;

const BoatDiv = styled.div`
  background-image: url(${boatImg});
  background-size: contain;
  position: absolute;
  display: flex;
  width: 100px;
  height: 100px;
  top: 35px;
  left: 25px;
`;

const AttackCellDiv = styled.div`
  //   background-color: black;
  position: absolute;
  display: flex;
  border: 10px solid black;
  border-radius: 5px;
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  cursor: pointer;

  &:hover {
    border-color: grey;
  }
`;

const AttackButtons = ({onAttack, player$}) => {
  return (
    <ContainerDiv>
      <BoatDiv />
      <AttackCellDiv onClick={() => onAttack(player$, 'L1')} top={'75px'} left={'30px'} />
      <AttackCellDiv onClick={() => onAttack(player$, 'R1')} top={'75px'} right={'30px'} />
      <AttackCellDiv onClick={() => onAttack(player$, 'L2')} top={'75px'} left={'5px'} />
      <AttackCellDiv onClick={() => onAttack(player$, 'R2')} top={'75px'} right={'5px'} />
      <AttackCellDiv onClick={() => onAttack(player$, 'LT')} top={'50px'} left={'30px'} />
      <AttackCellDiv onClick={() => onAttack(player$, 'RT')} top={'50px'} right={'30px'} />
      <AttackCellDiv onClick={() => onAttack(player$, 'LB')} top={'100px'} left={'30px'} />
      <AttackCellDiv onClick={() => onAttack(player$, 'RB')} top={'100px'} right={'30px'} />
    </ContainerDiv>
  );
};

export default AttackButtons;
