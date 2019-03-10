import * as actions from '../actions';

const initialBoard = [
  [
    {type: 'empty', hidden: true},
    {type: 'empty', hidden: true},
    {type: 'empty', hidden: false},
    {type: 'empty', hidden: true},
    {type: 'empty', hidden: true},
  ],
  [
    {type: 'empty', hidden: true},
    {type: 'empty', hidden: true},
    {type: 'empty', hidden: true},
    {type: 'empty', hidden: true},
    {type: 'empty', hidden: true},
  ],
  [
    {type: 'empty', hidden: true},
    {type: 'empty', hidden: true},
    {type: 'empty', hidden: true},
    {type: 'empty', hidden: true},
    {type: 'empty', hidden: true},
  ],
  [
    {type: 'empty', hidden: true},
    {type: 'empty', hidden: true},
    {type: 'empty', hidden: true},
    {type: 'empty', hidden: true},
    {type: 'empty', hidden: true},
  ],
  [
    {type: 'empty', hidden: true},
    {type: 'empty', hidden: true},
    {type: 'empty', hidden: false},
    {type: 'empty', hidden: true},
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

function generateUpdateCell(state, posX, posY, modifications) {
  const board = [...state.board];
  board[posY] = [...board[posY]];
  const newCell = {...board[posY][posX], ...modifications};
  board[posY][posX] = newCell;
  return {
    board,
  };
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
  const newPlayer = generatePlayer(player$, {...player, ...modifications});
  const newBoard = generateUpdateCell(state, modifications.posX, modifications.posY, {hidden: false});
  return {
    ...newPlayer,
    ...newBoard,
  };
}

function generatePos(board) {
  let x;
  let y;
  let iter = 0;

  while (true) {
    iter += 1;
    x = Math.floor(Math.random() * 5);
    y = Math.floor(Math.random() * 5);
    const cell = board[x][y];
    if (x === 2 && (y === 0 || y === 4)) continue;
    if (cell.type === 'empty') break;
    if (iter > 100) throw new Error('Code stronger');
  }
  return {
    x,
    y,
  };
}

function generateInitialBoard() {
  const genBoard = [...initialBoard];

  for (let i = 0; i < 4; i += 1) {
    const pos = generatePos(genBoard);
    genBoard[pos.y][pos.x].type = 'island';
  }
  for (let i = 0; i < 2; i += 1) {
    const pos = generatePos(genBoard);
    genBoard[pos.y][pos.x].type = 'fortress';
  }
  for (let i = 0; i < 1; i += 1) {
    const pos = generatePos(genBoard);
    genBoard[pos.y][pos.x].type = 'merchant';
  }
  for (let i = 0; i < 2; i += 1) {
    const pos = generatePos(genBoard);
    genBoard[pos.y][pos.x].type = 'monster';
  }

  return genBoard;
}

const initialState = {
  player1,
  player2,
  board: generateInitialBoard(),
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actions.GLOBAL_NEW_GAME: {
      return {
        player1,
        player2,
        board: generateInitialBoard(),
      };
    }

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
