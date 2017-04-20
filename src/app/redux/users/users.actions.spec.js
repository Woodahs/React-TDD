import * as usersActions from './users.actions';
import * as usersActionTypes from './users.action-types';

describe('Users actions', () => {

  it('creates update action', () => {
    const result = usersActions.setCount(100);
    expect(result).toEqual({
      type: usersActionTypes.SET_COUNT,
      payload: { count: 100 }
    });
  })

})
