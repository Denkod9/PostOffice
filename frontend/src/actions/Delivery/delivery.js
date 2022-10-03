import axios from "axios";
import {
    ADD_DELIVERY_SUCCESS,
    ADD_DELIVERY_FAIL,
    EDIT_DELIVERY_SUCCESS,
    EDIT_DELIVERY_FAIL,
    DELETE_DELIVERY_SUCCESS,
    DELETE_DELIVERY_FAIL,
} from './types';


export const delete_delivery = (deliveryId) => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        const body = JSON.stringify({ deliveryId });

        try {
            const res = await axios.delete(`${process.env.REACT_APP_API_URL}/delivery/${deliveryId}/`, body, config);

            dispatch({
                type: DELETE_DELIVERY_SUCCESS,
                payload: res.data,
            });

        } catch (err) {
            dispatch({
                type: DELETE_DELIVERY_FAIL
            });
        }
    } else {
        dispatch({
            type: DELETE_DELIVERY_FAIL
        });
    }
}


export const edit_delivery = (deliveryId, subscriber, edition, expected) => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        const body = JSON.stringify({ deliveryId, subscriber, edition, expected });

        try {
            const res = await axios.put(`${process.env.REACT_APP_API_URL}/delivery/${deliveryId}/`, body, config);

            dispatch({
                type: EDIT_DELIVERY_SUCCESS,
                payload: res.data,
            });

        } catch (err) {
            dispatch({
                type: EDIT_DELIVERY_FAIL
            });
        }
    } else {
        dispatch({
            type: EDIT_DELIVERY_FAIL
        });
    }
}


export const add_delivery = (subscriber, edition, expected) => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        const body = JSON.stringify({ subscriber, edition, expected });

        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/delivery/`, body, config);

            dispatch({
                type: ADD_DELIVERY_SUCCESS,
                payload: res.data,
            });

        } catch (err) {
            dispatch({
                type: ADD_DELIVERY_FAIL
            });
        }
    } else {
        dispatch({
            type: ADD_DELIVERY_FAIL
        });
    }
}