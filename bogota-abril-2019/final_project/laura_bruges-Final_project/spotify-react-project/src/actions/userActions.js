import { userActionTypes } from './actionTypes';
import axios from 'axios';
import { USER_INFO_URL } from '../utils/EndpointSettings';

export const fetchUser = (user) => {
    return {
        type: userActionTypes.fetchUserInfo,
        user
    }
}

export const setUserInfo = (accessToken) => {
    return (dispatch) => {
        axios.get(USER_INFO_URL, { headers: { Authorization: `Bearer ${accessToken}` } })
        .then((response) => {
            let userInfo = response.data;
            dispatch(fetchUser(userInfo));
        });
    }
}

