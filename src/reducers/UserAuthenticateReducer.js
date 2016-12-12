const INITIAL_STATE = {
  email: '',
  password: '',
  processing: false,
  error: false
}

const UserAuthenticateReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case 'EMP_PROP_CHANGED':
      return Object.assign({}, state, {[action.payload.propName]: action.payload.prop});
    case 'EMP_LOGIN_SUCCESS':
      return Object.assign({}, state, INITIAL_STATE);
    case 'EMP_LOGIN_ERROR':
      return Object.assign({}, state, { processing: true, error: action.payload});
    default:
      return state;
  }
}

export default UserAuthenticateReducer;
