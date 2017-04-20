import {connect} from 'react-redux';
import StatusComponent from './status.component';

const mapStateToProps = (state) => ({
  status: state.socket.status
});

export default connect(mapStateToProps)(StatusComponent);
