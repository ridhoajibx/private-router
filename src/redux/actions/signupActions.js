import axios from 'axios';
import setAuthorizationToken from '../../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import Swal from 'sweetalert2';

export function setCurrentUser(user) {
    return {
      type: 'SET_CURRENT_USER',
      user
    };
  }

export function userSignupRequest(userData) {
    return dispatch => {
        return axios.post('https://peaceful-gorge-77974.herokuapp.com/users/register', userData).then(res => {
            const token = res.data.access_token;
            const signup = res.data;
            if (signup.status === "Success") {
                Swal.fire({
                    icon: 'success',
                    title: 'Register success',
                    text: signup.msg
                })
                localStorage.setItem('jwtToken', token);
                setAuthorizationToken(token);
                dispatch(setCurrentUser(jwt.decode(token)));
            }
          })
          .catch(error => {
            const errorMsg = error.response.data.msg
            Swal.fire({
                icon: 'error',
                title: 'opps..',
                text: errorMsg
            })
        })
    }
}