import axios from 'axios';
import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    UPDATE_USERS_REQUEST,
    UPDATE_USERS_SUCCESS,
    UPDATE_USERS_FAILURE,
    UPDATE_AVATAR_REQUEST,
} from './userTypes';

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest)
        axios.get('https://peaceful-gorge-77974.herokuapp.com/users/profile', {
            headers: {
                'access_token': localStorage.getItem("jwtToken")
            }
        })
            .then(response => {
                const users = response.data;
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchUsersFailure(errorMsg))
            })
    }
}

export const updateUsersRequest = () => {
    return {
        type: UPDATE_USERS_REQUEST
    }
}

const updateUsersSuccess = (users) => {
    return {
        type: UPDATE_USERS_SUCCESS,
        payload: users
    }
}

const updateUsersFailure = (error) => {
    return {
        type: UPDATE_USERS_FAILURE,
        payload: error
    }
}

export const updateUsers = (action) => {
    console.log(action, "cek action");
    return (dispatch) => {
        dispatch(updateUsersRequest)
        axios.put('https://peaceful-gorge-77974.herokuapp.com/users/editprofile',
            {
                "name": action.name,
                "dateOfBirth": action.dateOfBirth
            },
            {
                headers: {
                    'access_token': localStorage.getItem("jwtToken")
                }
            })
            .then(response => {
                const users = response.data;
                if (users.msg === "Profile Updated!") {
                    dispatch(updateUsersSuccess({
                        "name": action.name,
                        "dateOfBirth": action.dateOfBirth
                    }))
                    dispatch(fetchUsers(users))
                }
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(updateUsersFailure(errorMsg))
            })
    }
}

export const updateAvatarRequest = (avatar) => {
    return {
        type: UPDATE_AVATAR_REQUEST,
        payload: avatar
    }
}

export const updateAvatar = (action) => {
    console.log(action, "cek action");
    return (dispatch) => {
        axios.put('https://peaceful-gorge-77974.herokuapp.com/users/editphoto',
            {
                "photo": action.photo
            },
            {
                headers: {
                    'access_token': localStorage.getItem("jwtToken"),
                }
            })
            .then(response => {
                const users = response.data;
                if (users.msg === "Profile Updated!") {
                    dispatch(updateAvatarRequest(
                        {
                            "photo": action.photo
                        }
                    ))
                    dispatch(fetchUsers())
                }
                console.log(users, 'cek log users');
            })
            .catch(error => {
                const errorMsg = error.message
                console.log(errorMsg);
            })
    }
}