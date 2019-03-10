import React, {Component} from 'react';
import styled from 'styled-components';

import GameController from './GameController';
import Game from './components/Game';

const AppDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const gameController = new GameController();

class App extends Component {
  render() {
    return (
      <AppDiv>
        <Game game={gameController} />
      </AppDiv>
    );
  }
}

export default App;
