import gameReducer, {initialState} from './game';
import * as actions from '../actions';

describe('game', () => {
  it('should turn player 1 east', () => {
    const result = gameReducer(initialState, actions.turnPlayer(1, 'east'));
    expect(result).toEqual({...initialState, player1: {...initialState.player1, direction: 'east'}});
  });
  it('should turn player 2 west', () => {
    const result = gameReducer(initialState, actions.turnPlayer(2, 'west'));
    expect(result).toEqual({...initialState, player2: {...initialState.player2, direction: 'west'}});
  });
});
