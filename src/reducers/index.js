import { combineReducers } from 'redux';
import AddEmployeeReducer from './AddEmployeeReducer'

export default combineReducers({
  addEmployee: AddEmployeeReducer
});
