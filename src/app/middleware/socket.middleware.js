import * as socketActionTypes from '../redux/socket/socket.action-types';
import * as socketActions from '../redux/socket/socket.actions';
import * as usersActions from '../redux/users/users.actions';

const socketMiddleware = ({ dispatch }) => (next) => (action) => {
  if(action.type === socketActionTypes.CONNECT){
    const ws = new WebSocket(process.env.REACT_APP_SOCKET_URL);
    ws.onopen = () => {
      dispatch(socketActions.connected());
    }
    ws.onmessage = ({ data }) => {
      const parsedData = JSON.parse(data);
      if(parsedData.type === 'users'){
        dispatch(usersActions.setCount(parsedData.count))
      }
    }
  }
  next(action);
}

export default socketMiddleware;
