import socketMiddleware from './socket.middleware';
import * as usersActions from '../redux/users/users.actions';
import * as socketActions from '../redux/socket/socket.actions';

describe('Socket Middleware', () => {
  let fakeWebSocket;
  let fakeStore;
  let fakeNext;

  beforeEach(() => {
    fakeNext = jest.fn();

    fakeStore = {
      dispatch: jest.fn(),
    };

    fakeWebSocket = {
      onmessage: () => {},
      onopen: () => {}
    };

    window.WebSocket = jest.fn(url => fakeWebSocket);
  });

  it('does nothing', () => {
    socketMiddleware({})(fakeNext)({
      type: 'FOO',
    });

    expect(fakeNext).toBeCalledWith({
      type: 'FOO',
    });
  });

  it('connects', () => {
    socketMiddleware(fakeStore)(fakeNext)(socketActions.connect());

    fakeWebSocket.onopen();

    expect(fakeStore.dispatch).toBeCalledWith(socketActions.connected());
    expect(window.WebSocket).toBeCalledWith(process.env.REACT_APP_SOCKET_URL);
  });


  it('updates store on users message', () => {
    const expectedSocketResponse = {
      data: JSON.stringify({
        type: 'users',
        count: 10,
      }),
    };

    socketMiddleware(fakeStore)(fakeNext)(socketActions.connect());

    fakeWebSocket.onopen();
    fakeWebSocket.onmessage(expectedSocketResponse);

    expect(fakeStore.dispatch).toBeCalledWith(usersActions.setCount(10));
  });

  it('does not updates store on message other than users', () => {
    const expectedSocketResponse = {
      data: JSON.stringify({
        type: 'other-message',
        count: 10,
      }),
    };

    socketMiddleware(fakeStore)(fakeNext)(socketActions.connect());

    fakeWebSocket.onmessage(expectedSocketResponse);

    expect(fakeStore.dispatch).not.toBeCalled();
  });
});
