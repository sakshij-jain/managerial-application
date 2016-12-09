import { dispatch } from 'redux-thunk';
import axios from 'axios';

export const handlePropChange = (prop) => {
  return {
    type: 'EMP_PROP_CHANGED',
    payload: prop
  }
}


export const addNewEmployee = (prop) => {

  const { name, email, password, gender, country } = prop;

  return (dispatch) => {

    dispatch({
      type: 'EMP_CREATE'
    })

    axios({
      method: 'post',
      url: 'http://localhost:3000/api/employees',
      data:{
        name,
        email,
        password,
        gender,
        country
      }
    }).then( res => {
      dispatch({
        type: 'EMP_CREATE_SUCCESS',
        payload: response.data
      });
    })
    .catch( err => {
      dispatch({
        type: 'EMP_CREATE_ERROR',
        payload: 'Failed to save employee'
      });
    })

  }
}
