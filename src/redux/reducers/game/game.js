import * as actions from '../../actions';

import {StateModifier, applyPlayerUpdate} from './modifications';
import {initialState, generateInitialBoard} from './initialState';
import applyAttack from './applyAttack';

export function applyTurn(state, player$, direction) {
  return applyPlayerUpdate(state, player$, {direction});
}

export function applyMonster(state, player$) {
  const modifier = new StateModifier(state);
  const player = modifier.getPlayer(player$);

  const cell = modifier.getCell(player.posX, player.posY);
  if (cell.type !== 'monster') return modifier.state;

  if (cell.force > player.pirate) {
    // pirate loose
    modifier.updatePlayer(player$, {pirate: 0, life: player.life - 1});
    return modifier.state;
  }

  if (cell.force === player.pirate) {
    modifier.updatePlayer(player$, {pirate: player.pirate - 1});
  }
  modifier.updatePlayerResources(player$, cell.resources);

  return modifier.state;
}

export function applyMove(state, player$, direction) {
  const modifier = new StateModifier(state);
  const player = modifier.getPlayer(player$);

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

  if (modifications.direction) {
    modifier.updatePlayer(player$, {...modifications});
    modifier.updateBoard(modifications.posX, modifications.posY, {
      hidden: false,
    });
  }
  return applyMonster(modifier.state, player$);
}

export function applyFish(state, player$) {
  const modifier = new StateModifier(state);
  const player = modifier.getPlayer(player$);

  modifier.updatePlayer(player$, {food: player.food + 1});
  return modifier.state;
}

export function applyEnroll(state, player$) {
  const modifier = new StateModifier(state);
  const player = modifier.getPlayer(player$);
  // TODO: only where appropriate
  modifier.updatePlayer(player$, {pirate: player.pirate + 1});
  return modifier.state;
}

export function applyExplore(state, player$) {
  const modifier = new StateModifier(state);
  const player = modifier.getPlayer(player$);
  const cell = modifier.getCell(player.posX, player.posY);

  let resources = {};
  switch (cell.type) {
    case 'island':
    case 'fortress':
    case 'merchant':
      resources = cell.resources;
      break;
    default:
      break;
  }

  modifier.updatePlayerResources(player$, resources);
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

    case actions.GAME_FISH: {
      const {player} = action.payload;
      return applyFish(state, player);
    }

    case actions.GAME_EXPLORE: {
      const {player} = action.payload;
      return applyExplore(state, player);
    }

    case actions.GAME_ENROLL: {
      const {player} = action.payload;
      return applyEnroll(state, player);
    }

    default:
      return state;
  }
}
