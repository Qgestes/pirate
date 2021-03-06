import React from 'react';
import styled from 'styled-components';
import AttackButtons from './AttackButtons';

const DashboardDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 10px solid grey;
  box-sizing: border-box;
  padding: 10px;
  width: 190px;
  padding-bottom: 30px;
`;

const DashboardButtonDiv = styled.div`
  display: flex;
  align-self: center;
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

const Dashboard = ({state, actions, round}) => {
  const {player$, pirate, life, cannonball, food} = state;
  const {onTurn, onMove, onAttack, onExplore, onFish, onEnroll, onAction} = actions;

  let actionElements;

  switch (round.action) {
    case 'turn': {
      actionElements = (
        <React.Fragment>
          <DashboardButtonDiv onClick={() => onTurn(player$, 'north')}>Turn North</DashboardButtonDiv>
          <DashboardButtonDiv onClick={() => onTurn(player$, 'west')}>Turn West</DashboardButtonDiv>
          <DashboardButtonDiv onClick={() => onTurn(player$, 'south')}>Turn South</DashboardButtonDiv>
          <DashboardButtonDiv onClick={() => onTurn(player$, 'east')}>Turn East</DashboardButtonDiv>
          <DashboardButtonDiv onClick={() => onAction(player$, null)}>Back</DashboardButtonDiv>
        </React.Fragment>
      );
      break;
    }
    case 'move': {
      actionElements = (
        <React.Fragment>
          <DashboardButtonDiv onClick={() => onMove(player$, 'north')}>Move North</DashboardButtonDiv>
          <DashboardButtonDiv onClick={() => onMove(player$, 'west')}>Move West</DashboardButtonDiv>
          <DashboardButtonDiv onClick={() => onMove(player$, 'south')}>Move South</DashboardButtonDiv>
          <DashboardButtonDiv onClick={() => onMove(player$, 'east')}>Move East</DashboardButtonDiv>
          <DashboardButtonDiv onClick={() => onAction(player$, null)}>Back</DashboardButtonDiv>
        </React.Fragment>
      );
      break;
    }
    case 'attack': {
      actionElements = (
        <React.Fragment>
          <AttackButtons onAttack={onAttack} player$={player$} />
          <DashboardButtonDiv onClick={() => onAction(player$, null)}>Back</DashboardButtonDiv>
        </React.Fragment>
      );
      break;
    }
    default: {
      actionElements = (
        <React.Fragment>
          <DashboardButtonDiv onClick={() => onAction(player$, 'turn')}>Turn</DashboardButtonDiv>
          <DashboardButtonDiv onClick={() => onAction(player$, 'move')}>Move</DashboardButtonDiv>
          <DashboardButtonDiv onClick={() => onAction(player$, 'attack')}>Attack</DashboardButtonDiv>
          <DashboardButtonDiv onClick={() => onExplore(player$)}>Explore</DashboardButtonDiv>
          <DashboardButtonDiv onClick={() => onFish(player$)}>Fish</DashboardButtonDiv>
          <DashboardButtonDiv onClick={() => onEnroll(player$)}>Enroll</DashboardButtonDiv>
        </React.Fragment>
      );
      break;
    }
  }

  return (
    <DashboardDiv>
      <div>{`player: ${player$}`}</div>
      <div>{`life: ${life}`}</div>
      <div>{`pirate: ${pirate}`}</div>
      <div>{`cannonball: ${cannonball}`}</div>
      <div>{`food: ${food}`}</div>

      <DashboardSpacerDiv />
      {actionElements}
    </DashboardDiv>
  );
};

export default Dashboard;
