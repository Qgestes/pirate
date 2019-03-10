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

  const player = getPlayerFromState(state, player$);
  modifier.updatePlayer(player$, {canonball: player.canonball - 1});

  const otherplayer = getOtherPlayerFromState(state, player$);
  const targetCellPos = getCellPosAttack(player, attackDirection);

  if (targetCellPos.posX === otherplayer.posX && targetCellPos.posY === otherplayer.posY) {
    modifier.updatePlayer(otherplayer.player$, {life: otherplayer.life - 1});
  }

  return modifier.state;
}
