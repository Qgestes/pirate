import * as actions from '../actions';

const board = [
  [
    {type: 'island', hidden: false},
    {type: 'island', hidden: false},
    {type: 'empty', hidden: false},
    {type: 'merchant', hidden: false},
    {type: 'empty', hidden: false},
  ],
  [
    {type: 'fortress', hidden: false},
    {type: 'island', hidden: false},
    {type: 'empty', hidden: false},
    {type: 'empty', hidden: false},
    {type: 'empty', hidden: false},
  ],
  [
    {type: 'empty', hidden: false},
    {type: 'island', hidden: false},
    {type: 'empty', hidden: false},
    {type: 'merchant', hidden: false},
    {type: 'island', hidden: false},
  ],
  [
    {type: 'monster', hidden: false},
    {type: 'empty', hidden: false},
    {type: 'monster', hidden: false},
    {type: 'fortress', hidden: false},
    {type: 'empty', hidden: false},
  ],
  [
    {type: 'fortress', hidden: false},
    {type: 'island', hidden: false},
    {type: 'empty', hidden: false},
    {type: 'merchant', hidden: false},
    {type: 'empty', hidden: false},
  ],
];

const player1 = {
  player: 1,
  pirates: 3,
  coco: 2,
  rhum: 2,
  wood: 10,
  telescope: false,
  canon: true,
  sail: false,
  posX: 2,
  posY: 0,
  direction: 'south',
};
const player2 = {
  player: 2,
  pirates: 4,
  coco: 2,
  rhum: 2,
  wood: 10,
  telescope: false,
  canon: true,
  sail: false,
  posX: 2,
  posY: 4,
  direction: 'north',
};

export const initialState = {
  player1,
  player2,
  board,
};

function getPlayer(state, player$) {
  if (player$ === 1) return state.player1;
  if (player$ === 2) return state.player2;
  return null;
}

function generatePlayer(player$, player) {
  if (player$ === 1) {
    return {
      player1: player,
    };
  }
  if (player$ === 2) {
    return {
      player2: player,
    };
  }
  throw new Error('Invalid player');
}

export function generatePlayerUpdate(state, player$, modifications) {
  const player = getPlayer(state, player$);
  return generatePlayer(player$, {...player, ...modifications});
}

function generateTurn(state, player$, direction) {
  return generatePlayerUpdate(state, player$, {direction});
}

function generateMove(state, player$, direction) {
  const player = getPlayer(state, player$);
  const modifications = {};
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
  return generatePlayer(player$, {...player, ...modifications});
}

export default function(state = initialState, action) {
  switch (action.type) {
    case actions.GAME_TURN_PLAYER: {
      const {player, direction} = action.payload;
      const result = generateTurn(state, player, direction);
      return {
        ...state,
        ...result,
      };
    }

    case actions.GAME_MOVE_PLAYER: {
      const {player, direction} = action.payload;
      const result = generateMove(state, player, direction);
      return {
        ...state,
        ...result,
      };
    }

    default:
      return state;
  }
}
