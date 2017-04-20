import {connect} from 'react-redux';
import ConnectButtonComponent from './connect-button.component';
import * as statusTypes from '../redux/socket/status-types.enum';
import * as socketActions from '../redux/socket/socket.actions';

const mapStateToProps = (state) => ({
  isVisible: state.socket.status === statusTypes.NOT_CONNECTED
});

const mapDispatchToProps = (dispatch) => ({
  connect: () => {
    dispatch(socketActions.connect())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectButtonComponent);
