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

export const initialPlayer1 = {
  player$: 1,
  life: 3,
  canonball: 3,
  posX: 2,
  posY: 0,
  direction: 'south',
};

export const initialPlayer2 = {
  player$: 2,
  life: 3,
  canonball: 3,
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

export const initialState = {
  player1: initialPlayer1,
  player2: initialPlayer2,
  board: generateInitialBoard(),
};
