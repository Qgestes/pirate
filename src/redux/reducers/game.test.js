import gameReducer from './game';
import * as actions from '../actions';

describe('game', () => {
  it('should turn player 1 east', () => {
    const initialState = {
      player1: {
        direction: 'north',
      },
    };
    const result = gameReducer(initialState, actions.turnPlayer(1, 'east'));
    expect(result).toEqual({...initialState, player1: {...initialState.player1, direction: 'east'}});
  });
  it('should turn player 2 west', () => {
    const initialState = {
      player2: {
        direction: 'north',
      },
    };
    const result = gameReducer(initialState, actions.turnPlayer(2, 'west'));
    expect(result).toEqual({...initialState, player2: {...initialState.player2, direction: 'west'}});
  });

  it('should NOT move player 1 west', () => {
    const initialState = {
      player1: {
        posX: 0,
        posY: 0,
        direction: 'north',
      },
    };
    const result = gameReducer(initialState, actions.movePlayer(1, 'west'));
    expect(result).toEqual({...initialState});
  });

  it('should move player 1 east', () => {
    const initialState = {
      player1: {
        posX: 0,
        posY: 0,
        direction: 'north',
      },
    };
    const result = gameReducer(initialState, actions.movePlayer(1, 'east'));
    expect(result).toEqual({...initialState, player1: {...initialState.player1, posX: 1, direction: 'east'}});
  });
});
