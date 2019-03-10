import * as actions from '../actions';

const board = [
  [
    {type: 'island', hidden: false},
    {type: 'island', hidden: true},
    {type: 'empty', hidden: false},
    {type: 'merchant', hidden: true},
    {type: 'empty', hidden: false},
  ],
  [
    {type: 'fortress', hidden: true},
    {type: 'island', hidden: false},
    {type: 'empty', hidden: true},
    {type: 'empty', hidden: true},
    {type: 'empty', hidden: false},
  ],
  [
    {type: 'empty', hidden: true},
    {type: 'island', hidden: false},
    {type: 'empty', hidden: true},
    {type: 'merchant', hidden: false},
    {type: 'island', hidden: true},
  ],
  [
    {type: 'monster', hidden: true},
    {type: 'empty', hidden: false},
    {type: 'monster', hidden: false},
    {type: 'fortress', hidden: true},
    {type: 'empty', hidden: true},
  ],
  [
    {type: 'fortress', hidden: false},
    {type: 'island', hidden: true},
    {type: 'empty', hidden: false},
    {type: 'merchant', hidden: true},
    {type: 'empty', hidden: true},
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

function applyPlayer(player$, player) {
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

function updatePlayer(state, player$, modifications) {
  const player = getPlayer(state, player$);
  return applyPlayer(player$, {...player, ...modifications});
}

function applyTurn(state, player$, direction) {
  return updatePlayer(state, player$, {direction});
}

function applyMove(state, player$, direction) {
  return updatePlayer(state, player$, {direction});
}

export default function(state = initialState, action) {
  switch (action.type) {
    case actions.GAME_TURN_PLAYER: {
      const {player, direction} = action.payload;
      const result = applyTurn(state, player, direction);
      return {
        ...state,
        ...result,
      };
    }

    case actions.GAME_MOVE_PLAYER: {
      const {player, direction} = action.payload;
      const result = applyMove(state, player, direction);
      return {
        ...state,
        ...result,
      };
    }

    default:
      return state;
  }
}
