const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  gender:'',
  country: '',
  processing: false,
  error: false
}


const AddEmployeeReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case 'EMP_PROP_CHANGED': {
      var prop = action.payload;
      return Object.assign({}, state, { prop : action.payload});
    }
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
