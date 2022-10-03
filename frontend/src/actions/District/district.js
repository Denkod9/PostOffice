import axios from "axios";
import {
    ADD_DISTRICT_SUCCESS,
    ADD_DISTRICT_FAIL,
    ADD_DISTRICT_STREET_SUCCESS,
    ADD_DISTRICT_STREET_FAIL,
    EDIT_DISTRICT_SUCCESS,
    EDIT_DISTRICT_FAIL,
    EDIT_DISTRICT_STREET_SUCCESS,
    EDIT_DISTRICT_STREET_FAIL,
    DELETE_DISTRICT_SUCCESS,
    DELETE_DISTRICT_FAIL,
    DELETE_DISTRICT_STREET_SUCCESS,
    DELETE_DISTRICT_STREET_FAIL,
} from './types';


export const delete_district_street = (districtStreetId) => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        const body = JSON.stringify({ districtStreetId });

        try {
            const res = await axios.delete(`${process.env.REACT_APP_API_URL}/districts/district_street/${districtStreetId}/`, body, config);

            dispatch({
                type: DELETE_DISTRICT_STREET_SUCCESS,
                payload: res.data,
            });

        } catch (err) {
            dispatch({
                type: DELETE_DISTRICT_STREET_FAIL
            });
        }
    } else {
        dispatch({
            type: DELETE_DISTRICT_STREET_FAIL
        });
    }
}


export const delete_district = (districtId) => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        const body = JSON.stringify({ districtId });

        try {
            const res = await axios.delete(`${process.env.REACT_APP_API_URL}/districts/${districtId}/`, body, config);

            dispatch({
                type: DELETE_DISTRICT_SUCCESS,
                payload: res.data,
            });

        } catch (err) {
            dispatch({
                type: DELETE_DISTRICT_FAIL
            });
        }
    } else {
        dispatch({
            type: DELETE_DISTRICT_FAIL
        });
    }
}


export const edit_district_street = (districtStreetId, postman, street) => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        const body = JSON.stringify({ districtStreetId, postman, street });

        try {
            const res = await axios.put(`${process.env.REACT_APP_API_URL}/districts/district_street/${districtStreetId}/`, body, config);

            dispatch({
                type: EDIT_DISTRICT_STREET_SUCCESS,
                payload: res.data,
            });

        } catch (err) {
            dispatch({
                type: EDIT_DISTRICT_STREET_FAIL
            });
        }
    } else {
        dispatch({
            type: EDIT_DISTRICT_STREET_FAIL
        });
    }
}


export const edit_district = (districtId, number, title, district_street) => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        const body = JSON.stringify({ districtId, number, title, district_street });

        try {
            const res = await axios.put(`${process.env.REACT_APP_API_URL}/districts/${districtId}/`, body, config);

            dispatch({
                type: EDIT_DISTRICT_SUCCESS,
                payload: res.data,
            });

        } catch (err) {
            dispatch({
                type: EDIT_DISTRICT_FAIL
            });
        }
    } else {
        dispatch({
            type: EDIT_DISTRICT_FAIL
        });
    }
}


export const add_district_street = (postman, street) => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        const body = JSON.stringify({ postman, street });

        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/districts/district_street/`, body, config);

            dispatch({
                type: ADD_DISTRICT_STREET_SUCCESS,
                payload: res.data,
            });

        } catch (err) {
            dispatch({
                type: ADD_DISTRICT_STREET_FAIL
            });
        }
    } else {
        dispatch({
            type: ADD_DISTRICT_STREET_FAIL
        });
    }
}


export const add_district = (number, title, district_street) => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        const body = JSON.stringify({ number, title, district_street });

        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/districts/`, body, config);

            dispatch({
                type: ADD_DISTRICT_SUCCESS,
                payload: res.data,
            });

        } catch (err) {
            dispatch({
                type: ADD_DISTRICT_FAIL
            });
        }
    } else {
        dispatch({
            type: ADD_DISTRICT_FAIL
        });
    }
}