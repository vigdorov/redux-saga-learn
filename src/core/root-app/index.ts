import {Store} from '../../store/config';
import RootApp from './RootApp';
import {connect} from 'react-redux';

const mapStateToProps = (store: Store) => ({
    count: store.count
});

export default connect(mapStateToProps)(RootApp);
