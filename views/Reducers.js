import {combineReducers} from 'redux';

import Dashboard from './view/Dashboard/DashboardReducer';

export default combineReducers({
  dashboard: Dashboard
});
