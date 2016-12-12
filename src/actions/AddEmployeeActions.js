import { dispatch } from 'redux-thunk';
import axios from 'axios';

export const handlePropChange = (prop, propName) => {
  return {
    type: 'EMP_PROP_CHANGED',
    payload: {
      prop,
      propName
    }
  }
}


export const addNewEmployee = (prop) => {

  const { username, email, password, gender, country } = prop;

  return (dispatch) => {

    dispatch({
      type: 'EMP_CREATE'
    })

    axios({
      method: 'post',
      url: 'http://localhost:3000/api/employees',
      data:{
        username, email, password, gender, country
      }
    }).then( res => {
      dispatch({
        type: 'EMP_CREATE_SUCCESS',
        payload: res.data
      });
    })
    .catch( err => {
      console.log(err);
      dispatch({
        type: 'EMP_CREATE_ERROR',
        payload: 'Failed to save employee'
      });
    })

  }
}
