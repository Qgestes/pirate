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

const App = () => (
  <AppDiv>
    <Game />
  </AppDiv>
);

export default App;
