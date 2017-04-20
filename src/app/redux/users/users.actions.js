import * as usersActionTypes from './users.action-types';

export function setCount(count){
  return {
    type: usersActionTypes.SET_COUNT,
    payload: { count }
  }
}
