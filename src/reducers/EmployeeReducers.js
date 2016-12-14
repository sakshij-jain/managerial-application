const INITIAL_STATE = {
  employees: [],
  employee:{},
  processing: false,
  error: false
}

const EmployeeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'EMP_LIST_SUCCESS':
      return Object.assign({}, state, { employees: action.payload });
    case 'EMP_LIST_ERROR':
      return Object.assign({}, state, { processing: true, error: action.payload});
    case 'EMP_FOUND':
      return Object.assign({}, state, { employee: action.payload });
    case 'EMP_NOT_FOUND':
      return Object.assign({}, state, { processing: true, error: action.payload});
    default:
      return state;
  }
}

export default EmployeeReducer;
