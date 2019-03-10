import * as actions from '../../actions';

import {getPlayerFromState, StateModifier, getOtherPlayerFromState} from './modifications';

const attackDirectionVector = {
  L1: {x: -1, y: 0},
  L2: {x: -2, y: 0},
  LT: {x: -1, y: -1},
  LB: {x: -1, y: 1},
  R1: {x: 1, y: 0},
  R2: {x: 2, y: 0},
  RT: {x: 1, y: -1},
  RB: {x: 1, y: 1},
};

const rotateAttackVector = (attackVector, direction) => {
  switch (direction) {
    case 'north':
      return attackVector;
    case 'south':
      return {x: -attackVector.x, y: -attackVector.y};
    case 'east':
      return {x: -attackVector.y, y: attackVector.x};
    case 'west':
      return {x: attackVector.y, y: -attackVector.x};
    default:
      throw new Error('WTF');
  }
};

export const getCellPosAttack = (player, attackDirection) => {
  const {posX, posY, direction} = player;
  const attackVector = attackDirectionVector[attackDirection];
  const attackVector2 = rotateAttackVector(attackVector, direction);

  return {posX: posX + attackVector2.x, posY: posY + attackVector2.y};
};

export default function applyAttack(state, player$, attackDirection) {
  const modifier = new StateModifier(state);

  const player = modifier.getPlayer(player$);
  const otherPlayer = modifier.getOtherPlayer(player$);

  modifier.updatePlayer(player$, {cannonball: player.cannonball - 1});
  modifier.updatePlayer(player$, {food: player.food - 1});

  const targetCellPos = getCellPosAttack(player, attackDirection);
  if (targetCellPos.posX === otherPlayer.posX && targetCellPos.posY === otherPlayer.posY) {
    modifier.updatePlayer(otherPlayer.player$, {life: otherPlayer.life - 1});
  }

  return modifier.state;
}
