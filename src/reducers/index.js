import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import AddEmployeeReducer from './AddEmployeeReducer';
import LoginReducer from './LoginReducer';
import EmployeeReducers from './EmployeeReducers';

export default combineReducers({
  addEmployee: AddEmployeeReducer,
  login: LoginReducer,
  employeeReducer: EmployeeReducers,
  routing: routerReducer
});
