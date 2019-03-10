export const GAME_TURN_PLAYER = 'GAME_TURN_PLAYER';
export const GAME_MOVE_PLAYER = 'GAME_MOVE_PLAYER';

export const turnPlayer = (player, direction) => ({
  type: GAME_TURN_PLAYER,
  payload: {
    player,
    direction,
  },
});

export const movePlayer = (player, direction) => ({
  type: GAME_MOVE_PLAYER,
  payload: {
    player,
    direction,
  },
});
