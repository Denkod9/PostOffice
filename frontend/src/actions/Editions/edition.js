import axios from "axios";
import {
    EDITIONS_LOADED_SUCCESS,
    EDITIONS_LOADED_FAIL,
    SUBSCRIBE_EDITION_LOADED_SUCCESS,
    SUBSCRIBE_EDITION_LOADED_FAIL,
    UN_SUBSCRIBE_EDITION_LOADED_SUCCESS,
    UN_SUBSCRIBE_EDITION_LOADED_FAIL,
    EDITION_TYPES_LOADED_SUCCESS,
    EDITION_TYPES_LOADED_FAIL,

    ADD_EDITION_SUCCESS,
    ADD_EDITION_FAIL,
    ADD_EDITION_TYPE_SUCCESS,
    ADD_EDITION_TYPE_FAIL,
    ADD_SUBSCRIPTION_SUCCESS,
    ADD_SUBSCRIPTION_FAIL,

    EDIT_EDITION_SUCCESS,
    EDIT_EDITION_FAIL,
    EDIT_EDITION_TYPE_SUCCESS,
    EDIT_EDITION_TYPE_FAIL,
    EDIT_SUBSCRIPTION_SUCCESS,
    EDIT_SUBSCRIPTION_FAIL,

    REMOVE_EDITION_SUCCESS,
    REMOVE_EDITION_FAIL,
    REMOVE_EDITION_TYPE_SUCCESS,
    REMOVE_EDITION_TYPE_FAIL,
    REMOVE_SUBSCRIPTION_SUCCESS,
    REMOVE_SUBSCRIPTION_FAIL,
} from './types';


export const delete_subscription = (subscriptionId) => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        const body = JSON.stringify({ subscriptionId });

        try {
            const res = await axios.delete(`${process.env.REACT_APP_API_URL}/editions/edition_subscription/${subscriptionId}/`, body, config);

            dispatch({
                type: REMOVE_SUBSCRIPTION_SUCCESS,
                payload: res.data,
            });

        } catch (err) {
            dispatch({
                type: REMOVE_SUBSCRIPTION_FAIL
            });
        }
    } else {
        dispatch({
            type: REMOVE_SUBSCRIPTION_FAIL
        });
    }
}


export const edit_subscription = (subscriptionId, subscriber, edition, date_of_subscription, duration, is_subscription) => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        const body = JSON.stringify({ subscriptionId, subscriber, edition, date_of_subscription, duration, is_subscription });

        try {
            const res = await axios.put(`${process.env.REACT_APP_API_URL}/editions/edition_subscription/${subscriptionId}/`, body, config);

            dispatch({
                type: EDIT_SUBSCRIPTION_SUCCESS,
                payload: res.data,
            });

        } catch (err) {
            dispatch({
                type: EDIT_SUBSCRIPTION_FAIL
            });
        }
    } else {
        dispatch({
            type: EDIT_SUBSCRIPTION_FAIL
        });
    }
}


export const add_subscription = (subscriber, edition, date_of_subscription, duration, is_subscription) => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        const body = JSON.stringify({ subscriber, edition, date_of_subscription, duration, is_subscription });

        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/editions/edition_subscription/`, body, config);

            dispatch({
                type: ADD_SUBSCRIPTION_SUCCESS,
                payload: res.data,
            });

        } catch (err) {
            dispatch({
                type: ADD_SUBSCRIPTION_FAIL
            });
        }
    } else {
        dispatch({
            type: ADD_SUBSCRIPTION_FAIL
        });
    }
}


export const save_edition_type = (type_name) => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        const body = JSON.stringify({ type_name });

        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/editions/edition_types/`, body, config);

            dispatch({
                type: ADD_EDITION_TYPE_SUCCESS,
                payload: res.data,
            });

        } catch (err) {
            dispatch({
                type: ADD_EDITION_TYPE_FAIL
            });
        }
    } else {
        dispatch({
            type: ADD_EDITION_TYPE_FAIL
        });
    }
}


export const edit_edition_type = (id, type_name) => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        const body = JSON.stringify({ id, type_name });

        try {
            const res = await axios.put(`${process.env.REACT_APP_API_URL}/editions/edition_types/${id}`, body, config);

            dispatch({
                type: EDIT_EDITION_TYPE_SUCCESS,
                payload: res.data,
            });

        } catch (err) {
            dispatch({
                type: EDIT_EDITION_TYPE_FAIL
            });
        }
    } else {
        dispatch({
            type: EDIT_EDITION_TYPE_FAIL
        });
    }
}

export const delete_edition_type = (id) => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        const body = JSON.stringify({ id });

        try {
            const res = await axios.delete(`${process.env.REACT_APP_API_URL}/editions/edition_types/delete/${id}/`, body, config);

            dispatch({
                type: REMOVE_EDITION_TYPE_SUCCESS,
                payload: res.data,
            });

        } catch (err) {
            dispatch({
                type: REMOVE_EDITION_TYPE_FAIL
            });
        }
    } else {
        dispatch({
            type: REMOVE_EDITION_TYPE_FAIL
        });
    }
} 

export const delete_edition = (editionId) => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        const body = JSON.stringify({ editionId });

        try {
            const res = await axios.delete(`${process.env.REACT_APP_API_URL}/editions/edition/${editionId}/`, body, config);

            dispatch({
                type: REMOVE_EDITION_SUCCESS,
                payload: res.data,
            });

        } catch (err) {
            dispatch({
                type: REMOVE_EDITION_FAIL
            });
        }
    } else {
        dispatch({
            type: REMOVE_EDITION_FAIL
        });
    }
}

export const edit_edition = (id, image, index, title, price, edition_type, description) => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        const body = JSON.stringify({ id, image, index, title, price, edition_type, description });

        try {
            const res = await axios.put(`${process.env.REACT_APP_API_URL}/editions/edition/${id}/`, body, config);

            dispatch({
                type: EDIT_EDITION_SUCCESS,
                payload: res.data,
            });

        } catch (err) {
            dispatch({
                type: EDIT_EDITION_FAIL
            });
        }
    } else {
        dispatch({
            type: EDIT_EDITION_FAIL
        });
    }
}

export const save_edition = (image, index, title, price, edition_type, description) => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        const body = JSON.stringify({ image, index, title, price, edition_type, description });

        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/editions/`, body, config);

            dispatch({
                type: ADD_EDITION_SUCCESS,
                payload: res.data,
            });

        } catch (err) {
            dispatch({
                type: ADD_EDITION_FAIL
            });
        }
    } else {
        dispatch({
            type: ADD_EDITION_FAIL
        });
    }
}

export const edition_types = () => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/editions/edition_types/`, config);

            dispatch({
                type: EDITION_TYPES_LOADED_SUCCESS,
                payload: res.data,
            });

        } catch (err) {
            dispatch({
                type: EDITION_TYPES_LOADED_FAIL
            });
        }
    } else {
        dispatch({
            type: EDITION_TYPES_LOADED_FAIL
        });
    }
}

export const un_subscribe_person = (id) => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                // 'Access-Control-Request-Method': 'PUT',
                // 'Authorization': `JWT ${localStorage.getItem('access')}`,
                // 'Accept': 'application/json'
            }
        };

        const body = JSON.stringify({ id });

        try {
            const res = await axios.delete(`${process.env.REACT_APP_API_URL}/editions/un_subscription/${id}/`, body, config);

            dispatch({
                type: UN_SUBSCRIBE_EDITION_LOADED_SUCCESS,
                payload: res.data
            });

        } catch (err) {
            dispatch({
                type: UN_SUBSCRIBE_EDITION_LOADED_FAIL
            });
        }
    } else {
        dispatch({
            type: UN_SUBSCRIBE_EDITION_LOADED_FAIL
        });
    }
}

export const subscribe_person = (subscriberId, editionId) => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                // 'Access-Control-Request-Method': 'PUT',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        const body = ({ subscriberId, editionId });

        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/editions/subscription/${subscriberId}/${editionId}/`, body, config);

            dispatch({
                type: SUBSCRIBE_EDITION_LOADED_SUCCESS,
                payload: res.data
            });

        } catch (err) {
            dispatch({
                type: SUBSCRIBE_EDITION_LOADED_FAIL
            });
        }
    } else {
        dispatch({
            type: SUBSCRIBE_EDITION_LOADED_FAIL
        });
    }
}

export const edition = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            // "Access-Control-Allow-Origin": "GET",
            // 'Authorization': `JWT ${localStorage.getItem('access')}`,
            // 'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/editions/`, config);
        dispatch({
            type: EDITIONS_LOADED_SUCCESS,
            payload: res.data
        });
        // console.log(res.data)
    } catch (err) {
        dispatch({
            type: EDITIONS_LOADED_FAIL
        });
    }
}