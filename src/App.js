import React, {Component} from 'react';
import styled from 'styled-components';

import Game from './components/Game';

const AppDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const board = [
  [
    {type: 'island', hidden: false},
    {type: 'island', hidden: true},
    {type: 'empty', hidden: false},
    {type: 'merchant', hidden: true},
    {type: 'empty', hidden: false},
  ],
  [
    {type: 'fortress', hidden: true},
    {type: 'island', hidden: false},
    {type: 'empty', hidden: true},
    {type: 'empty', hidden: true},
    {type: 'empty', hidden: false},
  ],
  [
    {type: 'empty', hidden: true},
    {type: 'island', hidden: false},
    {type: 'empty', hidden: true},
    {type: 'merchant', hidden: false},
    {type: 'island', hidden: true},
  ],
  [
    {type: 'monster', hidden: true},
    {type: 'empty', hidden: false},
    {type: 'monster', hidden: false},
    {type: 'fortress', hidden: true},
    {type: 'empty', hidden: true},
  ],
  [
    {type: 'fortress', hidden: false},
    {type: 'island', hidden: true},
    {type: 'empty', hidden: false},
    {type: 'merchant', hidden: true},
    {type: 'empty', hidden: true},
  ],
];

const player1 = {player: 1, pirates: 3, coco: 2, rhum: 2, wood: 10, telescope: false, canon: true, sail: false};
const player2 = {player: 2, pirates: 4, coco: 2, rhum: 2, wood: 10, telescope: false, canon: true, sail: false};

const gameState = {player1, player2, board};

class App extends Component {
  render() {
    return (
      <AppDiv>
        <Game game={gameState} />
      </AppDiv>
    );
  }
}

export default App;
