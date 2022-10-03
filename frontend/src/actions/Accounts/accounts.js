import axios from "axios";
import {
    ADD_SUBSCRIBER_SUCCESS,
    ADD_SUBSCRIBER_FAIL,
    EDIT_SUBSCRIBER_SUCCESS,
    EDIT_SUBSCRIBER_FAIL,
    DELETE_SUBSCRIBER_SUCCESS,
    DELETE_SUBSCRIBER_FAIL,
} from './types';


export const delete_subscriber = (subscriberId) => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        const body = JSON.stringify({ subscriberId });

        try {
            const res = await axios.delete(`${process.env.REACT_APP_API_URL}/accounts/delete/${subscriberId}/`, body, config);

            dispatch({
                type: DELETE_SUBSCRIBER_SUCCESS,
                payload: res.data,
            });

        } catch (err) {
            dispatch({
                type: DELETE_SUBSCRIBER_FAIL
            });
        }
    } else {
        dispatch({
            type: DELETE_SUBSCRIBER_FAIL
        });
    }
}


export const edit_subscriber = (
    userId,
    email,
    first_name,
    last_name,
    date_of_birth,
    role,
    phone,
    address,
    is_active,
    is_staff,
    password
) => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        const body = JSON.stringify({
            userId,
            email,
            first_name,
            last_name,
            date_of_birth,
            role,
            phone,
            address,
            is_active,
            is_staff,
            password
        });

        try {
            const res = await axios.put(`${process.env.REACT_APP_API_URL}/accounts/delete/${userId}/`, body, config);

            dispatch({
                type: EDIT_SUBSCRIBER_SUCCESS,
                payload: res.data,
            });

        } catch (err) {
            dispatch({
                type: EDIT_SUBSCRIBER_FAIL
            });
        }
    } else {
        dispatch({
            type: EDIT_SUBSCRIBER_FAIL
        });
    }
}


export const add_subscriber = (
    email,
    first_name,
    last_name,
    date_of_birth,
    role,
    phone,
    address,
    is_active,
    is_staff,
    password
) => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        const body = JSON.stringify({
            email,
            first_name,
            last_name,
            date_of_birth,
            role,
            phone,
            address,
            is_active,
            is_staff,
            password
        });

        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/accounts/create/`, body, config);

            dispatch({
                type: ADD_SUBSCRIBER_SUCCESS,
                payload: res.data,
            });

        } catch (err) {
            dispatch({
                type: ADD_SUBSCRIBER_FAIL
            });
        }
    } else {
        dispatch({
            type: ADD_SUBSCRIBER_FAIL
        });
    }
}