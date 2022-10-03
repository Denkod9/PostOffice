import axios from "axios";
import {
    ADD_POSTMAN_SUCCESS,
    ADD_POSTMAN_FAIL,
    EDIT_POSTMAN_SUCCESS,
    EDIT_POSTMAN_FAIL,
    REMOVE_POSTMAN_SUCCESS,
    REMOVE_POSTMAN_FAIL,
} from './types';


export const add_postman = (postmanId, employment_date, topicality) => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        const body = JSON.stringify({ postmanId, employment_date, topicality });

        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/postman/add_postman/${postmanId}/${employment_date}/${topicality}/`, body, config);

            dispatch({
                type: ADD_POSTMAN_SUCCESS,
                payload: res.data,
            });

        } catch (err) {
            dispatch({
                type: ADD_POSTMAN_FAIL
            });
        }
    } else {
        dispatch({
            type: ADD_POSTMAN_FAIL
        });
    }
}


export const edit_postman = (postmanId, user, employment_date, topicality) => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        const body = JSON.stringify({ postmanId, user, employment_date, topicality });

        try {
            const res = await axios.put(`${process.env.REACT_APP_API_URL}/postman/${postmanId}/`, body, config);

            dispatch({
                type: EDIT_POSTMAN_SUCCESS,
                payload: res.data,
            });

        } catch (err) {
            dispatch({
                type: EDIT_POSTMAN_FAIL
            });
        }
    } else {
        dispatch({
            type: EDIT_POSTMAN_FAIL
        });
    }
}


export const remove_postman = (postmanId) => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        const body = JSON.stringify({ postmanId });

        try {
            const res = await axios.delete(`${process.env.REACT_APP_API_URL}/postman/${postmanId}/`, body, config);

            dispatch({
                type: REMOVE_POSTMAN_SUCCESS,
                payload: res.data,
            });

        } catch (err) {
            dispatch({
                type: REMOVE_POSTMAN_FAIL
            });
        }
    } else {
        dispatch({
            type: REMOVE_POSTMAN_FAIL
        });
    }
}