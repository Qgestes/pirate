export const GLOBAL_NEW_GAME = 'GLOBAL_NEW_GAME';
export const GAME_TURN_PLAYER = 'GAME_TURN_PLAYER';
export const GAME_MOVE_PLAYER = 'GAME_MOVE_PLAYER';
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

export const guiDashboardSetAction = (player, action) => ({
  type: GUI_DASHBOARD_SET_ACTION,
  payload: {
    player,
    action,
  },
});
