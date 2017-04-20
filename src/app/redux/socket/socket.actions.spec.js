import * as socketActions from './socket.actions';
import * as socketActionTypes from './socket.action-types';

describe('Socket actions', () => {
  it('creates connect action', () => {
    const result = socketActions.connect();
    expect(result).toEqual({
      type: socketActionTypes.CONNECT
    });
  });

  it('creates connected action', () => {
    const result = socketActions.connected();
    expect(result).toEqual({
      type: socketActionTypes.CONNECTED
    });
  })
});
