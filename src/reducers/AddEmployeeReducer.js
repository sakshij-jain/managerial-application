const INITIAL_STATE = {
  username: '',
  email: '',
  password: '',
  gender:'',
  ismanager: 'N',
  country: 'India',
  processing: false,
  error: false
}

const AddEmployeeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'EMP_PROP_CHANGED':
      return Object.assign({}, state, {[action.payload.propName]: action.payload.prop});
    case 'EMP_CREATE':
      return Object.assign({}, state, { processing : true})
    case 'EMP_CREATE_SUCCESS':
      return Object.assign({}, state, INITIAL_STATE);
    case 'EMP_CREATE_ERROR':
      return Object.assign({}, state, { processing: true, error: action.payload});
    default:
      return state;
  }
}

export default AddEmployeeReducer;
