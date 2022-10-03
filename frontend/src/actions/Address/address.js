import axios from "axios";
import {
    ADD_STREET_SUCCESS,
    ADD_STREET_FAIL,
    ADD_ADDRESS_SUCCESS,
    ADD_ADDRESS_FAIL,
    ADD_POI_SUCCESS,
    ADD_POI_FAIL,
    EDIT_STREET_SUCCESS,
    EDIT_STREET_FAIL,
    EDIT_ADDRESS_SUCCESS,
    EDIT_ADDRESS_FAIL,
    EDIT_POI_SUCCESS,
    EDIT_POI_FAIL,
    DELETE_STREET_SUCCESS,
    DELETE_STREET_FAIL,
    DELETE_ADDRESS_SUCCESS,
    DELETE_ADDRESS_FAIL,
    DELETE_POI_SUCCESS,
    DELETE_POI_FAIL,
} from './types';


export const add_post_office_info = (title, address, manager_info) => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        const body = JSON.stringify({ title, address, manager_info });

        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/address/post_office_info/`, body, config);

            dispatch({
                type: ADD_POI_SUCCESS,
                payload: res.data,
            });

        } catch (err) {
            dispatch({
                type: ADD_POI_FAIL
            });
        }
    } else {
        dispatch({
            type: ADD_POI_FAIL
        });
    }
}


export const delete_post_office_info = (poiId) => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        const body = JSON.stringify({ poiId });

        try {
            const res = await axios.delete(`${process.env.REACT_APP_API_URL}/address/post_office_info/${poiId}/`, body, config);

            dispatch({
                type: DELETE_POI_SUCCESS,
                payload: res.data,
            });

        } catch (err) {
            dispatch({
                type: DELETE_POI_FAIL
            });
        }
    } else {
        dispatch({
            type: DELETE_POI_FAIL
        });
    }
}


export const edit_post_office_info = (poiId, title, address, manager_info) => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        const body = JSON.stringify({ poiId, title, address, manager_info });

        try {
            const res = await axios.put(`${process.env.REACT_APP_API_URL}/address/post_office_info/${poiId}/`, body, config);

            dispatch({
                type: EDIT_POI_SUCCESS,
                payload: res.data,
            });

        } catch (err) {
            dispatch({
                type: EDIT_POI_FAIL
            });
        }
    } else {
        dispatch({
            type: EDIT_POI_FAIL
        });
    }
}


export const delete_street = (streetId) => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        const body = JSON.stringify({ streetId });

        try {
            const res = await axios.delete(`${process.env.REACT_APP_API_URL}/address/street/${streetId}/`, body, config);

            dispatch({
                type: DELETE_STREET_SUCCESS,
                payload: res.data,
            });

        } catch (err) {
            dispatch({
                type: DELETE_STREET_FAIL
            });
        }
    } else {
        dispatch({
            type: DELETE_STREET_FAIL
        });
    }
}


export const edit_street = (streetId, type_street, street) => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        const body = JSON.stringify({ streetId, type_street, street });

        try {
            const res = await axios.put(`${process.env.REACT_APP_API_URL}/address/street/${streetId}/`, body, config);

            dispatch({
                type: EDIT_STREET_SUCCESS,
                payload: res.data,
            });

        } catch (err) {
            dispatch({
                type: EDIT_STREET_FAIL
            });
        }
    } else {
        dispatch({
            type: EDIT_STREET_FAIL
        });
    }
}


export const add_street = (type_street, street) => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        const body = JSON.stringify({ type_street, street });

        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/address/street/`, body, config);

            dispatch({
                type: ADD_STREET_SUCCESS,
                payload: res.data,
            });

        } catch (err) {
            dispatch({
                type: ADD_STREET_FAIL
            });
        }
    } else {
        dispatch({
            type: ADD_STREET_FAIL
        });
    }
}


export const delete_address = (addressId) => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        const body = JSON.stringify({ addressId });

        try {
            const res = await axios.delete(`${process.env.REACT_APP_API_URL}/address/${addressId}/`, body, config);

            dispatch({
                type: DELETE_ADDRESS_SUCCESS,
                payload: res.data,
            });

        } catch (err) {
            dispatch({
                type: DELETE_ADDRESS_FAIL
            });
        }
    } else {
        dispatch({
            type: DELETE_ADDRESS_FAIL
        });
    }
}


export const edit_address = (addressId, street, house, flat) => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        const body = JSON.stringify({ addressId, street, house, flat });

        try {
            const res = await axios.put(`${process.env.REACT_APP_API_URL}/address/${addressId}/`, body, config);

            dispatch({
                type: EDIT_ADDRESS_SUCCESS,
                payload: res.data,
            });

        } catch (err) {
            dispatch({
                type: EDIT_ADDRESS_FAIL
            });
        }
    } else {
        dispatch({
            type: EDIT_ADDRESS_FAIL
        });
    }
}


export const add_address = (street, house, flat) => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        const body = JSON.stringify({ street, house, flat });

        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/address/`, body, config);

            dispatch({
                type: ADD_ADDRESS_SUCCESS,
                payload: res.data,
            });

        } catch (err) {
            dispatch({
                type: ADD_ADDRESS_FAIL
            });
        }
    } else {
        dispatch({
            type: ADD_ADDRESS_FAIL
        });
    }
}