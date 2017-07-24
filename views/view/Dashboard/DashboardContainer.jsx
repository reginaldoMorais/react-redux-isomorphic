import React from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import {alerts} from './DashboardActions';
import Dashboard from './Dashboard';

const mapStateToProps = state => ({
  message: state.dashboard.message
});
const mapDispatchToProps = dispatch => bindActionCreators({alerts}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
