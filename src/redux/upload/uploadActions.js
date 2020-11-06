import axios from 'axios';
import {
    UPDATE_AVATAR_REQUEST,
    UPDATE_AVATAR_SUCCESS,
    UPDATE_AVATAR_FAILURE,
} from './userTypes';

export const updateAvatarRequest = () => {
    return {
        type: UPDATE_AVATAR_REQUEST
    }
}
const updateAvatarSuccess = (avatar) => {
    return {
        type: UPDATE_AVATAR_SUCCESS,
        payload: avatar
    }
}
const updateAvatarFailure = (error) => {
    return {
        type: UPDATE_AVATAR_FAILURE,
        payload: error
    }
}

export const updateAvatar = (action) => {
    console.log(action, "cek action");
    return (dispatch) => {
        dispatch(updateAvatarRequest)
        axios.put('https://peaceful-gorge-77974.herokuapp.com/users/editphoto',
            {
                "photo": action.photo
            },
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'access_token': localStorage.getItem("jwtToken")
                }
            })
            .then(response => {
                const users = response.data;
                if (users.msg === "Profile Updated!") {
                    dispatch(updateAvatarSuccess(
                        {
                            "photo": action.photo
                        }
                    ))
                    dispatch(fetchUsers())
                }
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(updateAvatarFailure(errorMsg))
            })
    }
}