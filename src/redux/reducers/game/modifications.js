export function getPlayerFromState(state, player$) {
  if (player$ === 1) return state.player1;
  if (player$ === 2) return state.player2;
  throw new Error('WTF');
}

export function getOtherPlayerFromState(state, player$) {
  if (player$ === 1) return state.player2;
  if (player$ === 2) return state.player1;
  throw new Error('WTF');
}

export function generatePlayerForState(player$, player) {
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

export function applyBoardCellUpdate(state, posX, posY, modifications) {
  const board = [...state.board];
  board[posY] = [...board[posY]];
  const newCell = {...board[posY][posX], ...modifications};
  board[posY][posX] = newCell;
  return {
    ...state,
    board,
  };
}

export function applyPlayerUpdate(state, player$, modifications) {
  const player = getPlayerFromState(state, player$);
  const newPlayerState = generatePlayerForState(player$, {...player, ...modifications});
  return {
    ...state,
    ...newPlayerState,
  };
}

export class StateModifier {
  constructor(state) {
    this.state = state;
  }

  updatePlayer(player$, modifications) {
    this.state = applyPlayerUpdate(this.state, player$, modifications);
    return this;
  }

  updateBoard(posX, posY, modifications) {
    this.state = applyBoardCellUpdate(this.state, posX, posY, modifications);
    return this;
  }
}
