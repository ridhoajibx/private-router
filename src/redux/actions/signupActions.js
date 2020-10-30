import axios from 'axios';

export function userSignupRequest(userData) {
    return dispatch => {
        return axios.post('https://peaceful-gorge-77974.herokuapp.com/users/register', userData);
    }
}