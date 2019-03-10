import * as actions from '../actions';

import {generatePlayerUpdate} from './game';

export const initialState = {
  player1: {},
  player2: {},
  board: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actions.GUI_DASHBOARD_SET_ACTION: {
      const {player, action: playerAction} = action.payload;
      const result = generatePlayerUpdate(state, player, {action: playerAction});
      return {
        ...state,
        ...result,
      };
    }

    default:
      return state;
  }
}
