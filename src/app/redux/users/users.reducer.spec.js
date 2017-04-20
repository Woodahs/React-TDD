import * as usersActions from './users.actions';
import usersReducer from './users.reducer';

describe('Users reducer', () => {

  let initialState;

  beforeEach(()=>{
    initialState = {
      count: 0
    };
  });

  it('return default state', () => {
    const result = usersReducer(undefined, { type: 'INVALID_ACTION' });
    expect(result).toEqual(initialState);
  })

  it('updates counter', () => {
    const action = usersActions.setCount(100);
    const result = usersReducer(undefined, action);
    expect(result).toEqual({ count: 100 });
  })

})
