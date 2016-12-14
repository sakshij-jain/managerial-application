import { dispatch } from 'redux-thunk';
import axios from 'axios';

export const getEmployees = () => {

  return (dispatch) => {

    axios({
      method: 'get',
      url: 'http://localhost:3000/api/employees'
    }).then( res => {
      if(res.data.length){
        dispatch({
          type: 'EMP_LIST_SUCCESS',
          payload: res.data
        });
      } else {
        dispatch({
          type: 'EMP_LIST_ERROR',
          payload: "No employees found."
        });
      }
    })
    .catch( err => {
      console.log(err);
      dispatch({
        type: 'EMP_LIST_ERROR',
        payload: 'Failed to load employees list'
      });
    })

  }
}

export const getEmployeeByID = (id) => {

  return (dispatch) => {

    axios({
      method: 'get',
      url: 'http://localhost:3000/api/employees/' + id
    }).then( res => {
      dispatch({
        type: 'EMP_FOUND',
        payload: res.data
      });
    })
    .catch( err => {
      console.log(err);
      dispatch({
        type: 'EMP_NOT_FOUND',
        payload: 'Failed to found the employee'
      });
    })

  }
}
