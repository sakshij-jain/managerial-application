import { combineReducers } from 'redux';
import AddEmployeeReducer from './AddEmployeeReducer'
import UserAuthenticateReducer from './UserAuthenticateReducer'

export default combineReducers({
  addEmployee: AddEmployeeReducer,
  userAuthenticate: UserAuthenticateReducer
});
