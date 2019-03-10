import gameReducer from './game';
import * as actions from '../../actions';
import {initialBoard, initialPlayer1, initialPlayer2} from './initialState';
import {StateModifier} from './modifications';
import applyAttack from './applyAttack';

const genInitialState = () => {
  const initialState = {
    player1: initialPlayer1,
    player2: initialPlayer2,
    board: initialBoard,
  };

  const modifier = new StateModifier(initialState);

  return modifier;
};

describe('game', () => {
  describe('applyAttack', () => {
    it('should use a canonball', () => {
      const modifier = genInitialState();

      const result = applyAttack(modifier.state, 1, 'L1');

      const expected = genInitialState().updatePlayer(1, {canonball: 2});
      expect(result).toEqual(expected.state);
    });
    it('should use attack on L1', () => {
      const modifier = genInitialState()
        .updatePlayer(1, {posX: 2, posY: 2, direction: 'north'})
        .updatePlayer(2, {posX: 1, posY: 2});

      const result = applyAttack(modifier.state, 1, 'L1');

      const expected = modifier.updatePlayer(1, {canonball: 2}).updatePlayer(2, {life: 2});

      expect(result).toEqual(expected.state);
    });
  });
});
