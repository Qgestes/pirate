export const GLOBAL_NEW_GAME = 'GLOBAL_NEW_GAME';
export const GAME_TURN_PLAYER = 'GAME_TURN_PLAYER';
export const GAME_MOVE_PLAYER = 'GAME_MOVE_PLAYER';
export const GAME_ATTACK = 'GAME_ATTACK';
export const GAME_FISH = 'GAME_FISH';
export const GAME_EXPLORE = 'GAME_EXPLORE';
export const GAME_ENROLL = 'GAME_ENROLL';
export const GUI_DASHBOARD_SET_ACTION = 'GUI_DASHBOARD_SET_ACTION';

export const newGame = () => ({
  type: GLOBAL_NEW_GAME,
  payload: {},
});

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

export const attack = (player, direction) => ({
  type: GAME_ATTACK,
  payload: {
    player,
    direction,
  },
});

export const fish = player => ({
  type: GAME_FISH,
  payload: {
    player,
  },
});

export const enroll = player => ({
  type: GAME_ENROLL,
  payload: {
    player,
  },
});

export const explore = player => ({
  type: GAME_EXPLORE,
  payload: {
    player,
  },
});

export const guiDashboardSetAction = (player, action) => ({
  type: GUI_DASHBOARD_SET_ACTION,
  payload: {
    player,
    action,
  },
});
