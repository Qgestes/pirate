export const initialBoard = [
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
const initialResources = {
  life: 3,
  cannonball: 0,
  food: 2,
  pirate: 1,
  rhum: 20, //!!!!!
};

export const initialPlayer1 = {
  ...initialResources,
  player$: 1,
  posX: 2,
  posY: 0,
  direction: 'south',
};

export const initialPlayer2 = {
  ...initialResources,
  player$: 2,
  posX: 2,
  posY: 4,
  direction: 'north',
};

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

export function generateInitialBoard() {
  const genBoard = [...initialBoard];

  for (let i = 0; i < 4; i += 1) {
    const pos = generatePos(genBoard);
    genBoard[pos.y][pos.x].type = 'island';
    genBoard[pos.y][pos.x].resources = {food: 2};
  }
  for (let i = 0; i < 2; i += 1) {
    const pos = generatePos(genBoard);
    genBoard[pos.y][pos.x].type = 'fortress';
    genBoard[pos.y][pos.x].resources = {cannonball: 2};
  }
  for (let i = 0; i < 1; i += 1) {
    const pos = generatePos(genBoard);
    genBoard[pos.y][pos.x].type = 'merchant';
    genBoard[pos.y][pos.x].resources = {food: 1, cannonball: 1};
  }
  for (let i = 0; i < 2; i += 1) {
    const pos = generatePos(genBoard);
    genBoard[pos.y][pos.x].type = 'monster';
    genBoard[pos.y][pos.x].force = 2; //life points
    genBoard[pos.y][pos.x].resources = {food: 3};
  }

  return genBoard;
}

export const initialState = {
  player1: initialPlayer1,
  player2: initialPlayer2,
  board: generateInitialBoard(),
};
