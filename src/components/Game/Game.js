import React from 'react';
import styled from 'styled-components';

import Dashboard from '../Dashboard';
import Board from '../Board';

const GameDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const Game = ({game}) => {
  return (
    <GameDiv>
      <Dashboard state={game.player1} actions={{}} />
      <Board state={game.board} />
      <Dashboard state={game.player2} actions={{}} />
    </GameDiv>
  );
};

export default Game;
