import * as socketActionTypes from './socket.action-types';

export function connect() {
  return {
    type: socketActionTypes.CONNECT
  }
}

export function connected() {
  return {
    type: socketActionTypes.CONNECTED
  }
}
