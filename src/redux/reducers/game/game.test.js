import gameReducer from './game';
import * as actions from '../../actions';
import {initialBoard} from './initialState';
import {applyPlayerUpdate, applyBoardCellUpdate} from './modifications';

const genP1InitialState = (posX, posY, direction) => {
  const initialState = {
    player1: {
      posX,
      posY,
      direction,
    },
    board: initialBoard,
  };
  return initialState;
};

describe('game', () => {
  describe('turn', () => {
    it('should turn a player', () => {
      const initialState = {
        player1: {
          direction: 'north',
        },
      };
      const result = gameReducer(initialState, actions.turnPlayer(1, 'east'));
      expect(result).toEqual({...initialState, player1: {...initialState.player1, direction: 'east'}});
    });
  });

  describe('move', () => {
    it('should move a player and update the direction', () => {
      const initialState = genP1InitialState(0, 0, 'north');
      const result = gameReducer(initialState, actions.movePlayer(1, 'east'));
      const expected = applyPlayerUpdate(initialState, 1, {posX: 1, direction: 'east'});
      const expected2 = applyBoardCellUpdate(expected, 1, 0, {hidden: false});
      expect(result).toEqual(expected2);
    });
    it('should NOT move north on limit', () => {
      const initialState = genP1InitialState(0, 0, 'east');
      const result = gameReducer(initialState, actions.movePlayer(1, 'north'));
      expect(result).toEqual({...initialState});
    });
    it('should NOT move east on limit', () => {
      const initialState = genP1InitialState(4, 4, 'north');
      const result = gameReducer(initialState, actions.movePlayer(1, 'east'));
      expect(result).toEqual({...initialState});
    });

    it('should NOT move south on limit', () => {
      const initialState = genP1InitialState(4, 4, 'north');
      const result = gameReducer(initialState, actions.movePlayer(1, 'south'));
      expect(result).toEqual({...initialState});
    });
    it('should NOT move west on limit', () => {
      const initialState = genP1InitialState(0, 0, 'north');
      const result = gameReducer(initialState, actions.movePlayer(1, 'west'));
      expect(result).toEqual({...initialState});
    });
  });

  describe('fish', () => {
    it('should fish anywhere', () => {});
    it('should cost a coco or a fish to enroll pirates', () => {});
  });

  describe('port', () => {
    it('should enroll pirates in port', () => {});
    it('should cost a coco or a fish to enroll pirates', () => {});
  });

  describe('monster', () => {
    it('should fight against monster', () => {});
  });

  describe('merchant', () => {
    it('should explore merchant boat', () => {});
    it('should gain resources when exploring merchant boat', () => {});
  });

  describe('island', () => {
    it('should explore an island', () => {});
    it('should gain resources when exploring an island', () => {});
  });

  describe('fortress', () => {
    it('should attack an island', () => {});
    it('should explore an island when successfully attacked', () => {});
    it('should gain resources when explored', () => {});
    it('should enroll pirates when attacked', () => {});
  });

  describe('player', () => {
    it('should attack a player', () => {});
    it('should cost a coco or a fish when attacking', () => {});
  });
});
