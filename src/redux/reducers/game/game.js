import * as actions from '../../actions';

import {StateModifier, applyPlayerUpdate, getPlayerFromState} from './modifications';
import {initialState, generateInitialBoard} from './initialState';
import applyAttack from './applyAttack';

export function applyTurn(state, player$, direction) {
  return applyPlayerUpdate(state, player$, {direction});
}

export function applyMove(state, player$, direction) {
  const player = getPlayerFromState(state, player$);
  const modifications = {posX: player.posX, posY: player.posY};
  switch (direction) {
    case 'north':
      if (player.posY > 0) {
        modifications.posY = player.posY - 1;
        modifications.direction = direction;
      }
      break;
    case 'south':
      if (player.posY < 4) {
        modifications.posY = player.posY + 1;
        modifications.direction = direction;
      }
      break;
    case 'west':
      if (player.posX > 0) {
        modifications.posX = player.posX - 1;
        modifications.direction = direction;
      }
      break;
    case 'east':
      if (player.posX < 4) {
        modifications.posX = player.posX + 1;
        modifications.direction = direction;
      }
      break;
    default:
      break;
  }

  const modifier = new StateModifier(state);

  if (modifications.direction) {
    modifier.updatePlayer(player$, {...modifications});
    modifier.updateBoard(modifications.posX, modifications.posY, {
      hidden: false,
    });
  }
  return modifier.state;
}

export default function(state = initialState, action) {
  switch (action.type) {
    case actions.GLOBAL_NEW_GAME: {
      return {
        player1: initialState.player1,
        player2: initialState.player2,
        board: generateInitialBoard(),
      };
    }

    case actions.GAME_TURN_PLAYER: {
      const {player, direction} = action.payload;
      return applyTurn(state, player, direction);
    }

    case actions.GAME_MOVE_PLAYER: {
      const {player, direction} = action.payload;
      return applyMove(state, player, direction);
    }

    case actions.GAME_ATTACK: {
      const {player, direction} = action.payload;
      return applyAttack(state, player, direction);
    }

    default:
      return state;
  }
}
