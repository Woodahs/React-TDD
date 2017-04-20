import * as socketActions from './socket.actions';
import * as statusTypes from './status-types.enum';
import socketReducer, {initialState} from './socket.reducer';

describe('Socket reducer', () => {

  let initialSocketReducerState;

  beforeEach(() => {
    initialSocketReducerState = {...initialState}
  });

  it('return default state', () => {
    const result = socketReducer(undefined, {type: 'INVALID_ACTION'});
    expect(result).toEqual(initialState);
  });

  it('returns connecting state', () => {
    const action = socketActions.connect();
    const result = socketReducer(undefined, action);
    expect(result).toEqual({status: statusTypes.CONNECTING});
  });

  it('returns connected state', () => {
    const action = socketActions.connected();
    const result = socketReducer(undefined, action);
    expect(result).toEqual({status: statusTypes.CONNECTED});
  });

  // it('updates counter', () => {
  //   const action = socketActions.setCount(100);
  //   const result = socketReducer(undefined, action);
  //   expect(result).toEqual({count: 100});
  // })
});
