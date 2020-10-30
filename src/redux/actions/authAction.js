import axios from 'axios';
import setAuthorizationToken from '../../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';

export function setCurrentUser(user) {
  return {
    type: 'SET_CURRENT_USER',
    user
  };
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
}

export function loginRequest(data) {
    return dispatch => {
      return axios.post('https://peaceful-gorge-77974.herokuapp.com/users/login', data).then(res => {
        const token = res.data.access_token;
        localStorage.setItem('jwtToken', token);
        setAuthorizationToken(token);
        dispatch(setCurrentUser(jwt.decode(token)));
      });
    }
  }
  