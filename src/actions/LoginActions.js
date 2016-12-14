import { dispatch } from 'redux-thunk';
import { browserHistory } from 'react-router';
import axios from 'axios';

export const loginUser = (prop) => {

  const { email, password } = prop;

  return (dispatch) => {

    axios({
      method: 'get',
      url: 'http://localhost:3000/api/employees',
      params: {
        "filter": {
            "where": {
              "email" : email,
              "password": password
            }
        }
      },
    }).then( res => {
      if(res.data[0].ismanager === "Y"){
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: res.data
        });
        browserHistory.push('/emp');
      } else {
        dispatch({
          type: "LOGIN_ERROR",
          payload: "No record found."
        });
      }
    })
    .catch( err => {
      console.log(err);
      dispatch({
        type: 'LOGIN_ERROR',
        payload: 'Failed to search'
      });
    })

  }
}
