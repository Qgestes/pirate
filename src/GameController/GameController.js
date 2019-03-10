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

export default class GameController {
  constructor() {
    this.player1 = player1;
    this.player2 = player2;
    this.board = board;
  }
}
