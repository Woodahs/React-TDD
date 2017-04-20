import { connect } from 'react-redux';
import CounterComponent from './counter.component';

const mapStateToProps = (state) => ({
  count: state.users.count
});

export default connect(mapStateToProps)(CounterComponent);
