import * as usersActionTypes from './users.action-types';

const initialState = {
  count: 0
};

function usersReducer(state = initialState, action){
  switch (action.type){
    case usersActionTypes.SET_COUNT:
      return {
        count: action.payload.count
      }
    default:
      return state;
  }
}

export default usersReducer;
