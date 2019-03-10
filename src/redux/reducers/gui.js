import * as actions from '../actions';

import {applyPlayerUpdate} from './game/modifications';

export const initialState = {
  player1: {},
  player2: {},
  board: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actions.GUI_DASHBOARD_SET_ACTION: {
      const {player, action: playerAction} = action.payload;
      return applyPlayerUpdate(state, player, {action: playerAction});
    }

    default:
      return state;
  }
}
