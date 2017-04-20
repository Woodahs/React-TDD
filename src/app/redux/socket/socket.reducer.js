import * as socketActionTypes from './socket.action-types';
import * as statusTypes from './status-types.enum';

export const initialState = {
  status: statusTypes.NOT_CONNECTED
};

function socketReducer(state = initialState, action) {
  switch (action.type) {
    case socketActionTypes.CONNECT:
      return {
        status: statusTypes.CONNECTING
      };
    case socketActionTypes.CONNECTED:
      return {
        status: statusTypes.CONNECTED
      };
    default:
      return state;
  }
}

export default socketReducer;
