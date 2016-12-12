import { dispatch } from 'redux-thunk';
import axios from 'axios';

export const userAuthenticate = (prop) => {

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
      console.log(res.data);
    })
    .catch( err => {
      console.log(err);
      dispatch({
        type: 'EMP_LOGIN_ERROR',
        payload: 'Failed to search'
      });
    })

  }
}
