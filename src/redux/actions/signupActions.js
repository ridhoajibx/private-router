import axios from 'axios';
import setAuthorizationToken from '../../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';

export function setCurrentUser(user) {
    return {
      type: 'SET_CURRENT_USER',
      user
    };
  }

export function userSignupRequest(userData) {
    return dispatch => {
        return axios.post('https://peaceful-gorge-77974.herokuapp.com/users/register', userData).then(res => {
            const token = res.userData.access_token;
            localStorage.setItem('jwtToken', token);
            setAuthorizationToken(token);
            dispatch(setCurrentUser(jwt.decode(token)));
          });
    }
}