import axios from 'axios';
// import setAuthorizationToken from '../../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import Swal from 'sweetalert2';

export function setCurrentUser(user) {
    return {
        type: 'SET_CURRENT_USER',
        user
    };
}

export function logout() {
    return dispatch => {
        localStorage.removeItem('jwtToken');
        // setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
    }
}

export function loginRequest(data) {

    return dispatch => {
        return axios.post('https://peaceful-gorge-77974.herokuapp.com/users/login', data)
            .then(res => {
                const token = res.data.access_token;
                const login = res.data;
                if (login.status === "Success") {
                    Swal.fire({
                        icon: 'success',
                        title: 'You are login',
                        text: login.msg
                    })
                    localStorage.setItem('jwtToken', token);
                    // setAuthorizationToken(token);
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

export const showLoader = () => dispatch => {
    dispatch({
        type: 'SHOW_LOADER'
    })
}

export const hideLoader = () => dispatch => {
    dispatch({
        type: 'HIDE_LOADER'
    })
}
