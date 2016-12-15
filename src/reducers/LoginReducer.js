const INITIAL_STATE = {
  email: '',
  password: '',
  processing: false,
  error: false
}

const LoginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'EMP_PROP_CHANGED':
      return Object.assign({}, state, {[action.payload.propName]: action.payload.prop});
    case 'LOGIN_SUCCESS':
      return Object.assign({}, state, INITIAL_STATE);
    case 'LOGIN_ERROR':
      return Object.assign({}, state, { processing: true, error: action.payload});
    default:
      return state;
  }
}

export default LoginReducer;
