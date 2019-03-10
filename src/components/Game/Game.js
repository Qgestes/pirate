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
    onTurn: player$ => dispatch(actions.turnPlayer(player$, 'north')),
    onMove: player$ => dispatch(actions.turnPlayer(player$, 'east')),
    onAttack: player$ => dispatch(actions.turnPlayer(player$, 'south')),
    onExplore: player$ => dispatch(actions.turnPlayer(player$, 'west')),
    onFish: player$ => dispatch(actions.movePlayer(player$, 'west')),
    onEnroll: player$ => dispatch(actions.movePlayer(player$, 'west')),
  };
};

export const GameBase = ({game, dispatch}) => {
  return (
    <GameDiv>
      <Dashboard state={game.player1} actions={generateActions(dispatch)} />
      <Board state={game.board} player1={game.player1} player2={game.player2} />
      <Dashboard state={game.player2} actions={generateActions(dispatch)} />
    </GameDiv>
  );
};

const mapStateToProps = state => {
  return {
    game: state.game,
  };
};

export default connect(mapStateToProps)(GameBase);
