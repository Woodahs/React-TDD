import { combineReducers } from 'redux';
import usersReducer from './redux/users/users.reducer';
import socketReducer from './redux/socket/socket.reducer';

const appReducer = combineReducers({
  users: usersReducer,
  socket: socketReducer
});

export default (state, action) => appReducer(state, action);
