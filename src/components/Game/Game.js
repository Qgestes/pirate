import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';

import Dashboard from '../Dashboard';
import Board from '../Board';

const GameDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const generateActions = dispatch => {
  return {
    onTurn: (player$, direction) => dispatch(actions.turnPlayer(player$, direction)),
    onMove: (player$, direction) => dispatch(actions.movePlayer(player$, direction)),
    onAttack: (player$, attackDirection) => dispatch(actions.attack(player$, attackDirection)),
    onExplore: player$ => dispatch(actions.turnPlayer(player$, 'west')),
    onFish: player$ => dispatch(actions.fish(player$)),
    onEnroll: player$ => dispatch(actions.movePlayer(player$, 'west')),
    onAction: (player$, action) => dispatch(actions.guiDashboardSetAction(player$, action)),
  };
};

export const GameBase = ({game, gui, dispatch}) => {
  return (
    <GameDiv>
      <Dashboard state={game.player1} actions={generateActions(dispatch)} round={gui.player1} />
      <Board state={game.board} player1={game.player1} player2={game.player2} />
      <Dashboard state={game.player2} actions={generateActions(dispatch)} round={gui.player2} />
    </GameDiv>
  );
};

const mapStateToProps = state => {
  return {
    game: state.game,
    gui: state.gui,
  };
};

export default connect(mapStateToProps)(GameBase);
