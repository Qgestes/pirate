import React from 'react';
import styled from 'styled-components';

const DashboardDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 10px solid grey;
  box-sizing: border-box;
  padding: 10px;
  width: 150px;
`;

const DashboardButtonDiv = styled.div`
  display: flex;
  border: 1px solid grey;
  border-radius: 5px;
  margin-top: 10px;
  box-sizing: border-box;
  padding: 10px;
  width: 110px;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: lightgrey;
  }
`;

const DashboardSpacerDiv = styled.div`
  flex-grow: 1;
`;

const Dashboard = ({state, actions}) => {
  const {player, pirates, coco, rhum, wood, telescope, canon, sail} = state;
  const {onTurn, onMove, onAttack, onExplore, onFish, onEnroll} = actions;

  return (
    <DashboardDiv>
      <div>{`player: ${player}`}</div>
      <div>{`pirates: ${pirates}`}</div>
      <div>{`coco: ${coco}`}</div>
      <div>{`rhum: ${rhum}`}</div>
      <div>{`wood: ${wood}`}</div>
      <div>{`telescope: ${telescope}`}</div>
      <div>{`canon: ${canon}`}</div>
      <div>{`sail: ${sail}`}</div>
      <DashboardSpacerDiv />
      <DashboardButtonDiv onClick={onTurn}>Turn</DashboardButtonDiv>
      <DashboardButtonDiv onClick={onMove}>Move</DashboardButtonDiv>
      <DashboardButtonDiv onClick={onAttack}>Attack</DashboardButtonDiv>
      <DashboardButtonDiv onClick={onExplore}>Explore</DashboardButtonDiv>
      <DashboardButtonDiv onClick={onFish}>Fish</DashboardButtonDiv>
      <DashboardButtonDiv onClick={onEnroll}>Enroll</DashboardButtonDiv>
    </DashboardDiv>
  );
};

export default Dashboard;
