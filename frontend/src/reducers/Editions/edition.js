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
} from '../../actions/Editions/types';

const initialState = {
    edition: null,
    // editions: null
};

export default function foo (state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case EDITIONS_LOADED_SUCCESS:
        case SUBSCRIBE_EDITION_LOADED_SUCCESS:
        case UN_SUBSCRIBE_EDITION_LOADED_SUCCESS:
        case EDITION_TYPES_LOADED_SUCCESS:
        case ADD_EDITION_SUCCESS:
        case REMOVE_EDITION_SUCCESS:
        case ADD_EDITION_TYPE_SUCCESS:
        case ADD_SUBSCRIPTION_SUCCESS:
        case EDIT_EDITION_SUCCESS:
        case EDIT_EDITION_TYPE_SUCCESS:
        case EDIT_SUBSCRIPTION_SUCCESS:
        case REMOVE_EDITION_TYPE_SUCCESS:
        case REMOVE_SUBSCRIPTION_SUCCESS:
            return {
                ...state,
                editions: payload,
            }
        case EDITIONS_LOADED_FAIL:
        case EDITION_TYPES_LOADED_FAIL:
            return {
                ...state,
                editions: null
            }
        case SUBSCRIBE_EDITION_LOADED_FAIL:
        case UN_SUBSCRIBE_EDITION_LOADED_FAIL:
        case ADD_EDITION_FAIL:
        case REMOVE_EDITION_FAIL:
        case ADD_EDITION_TYPE_FAIL:
        case ADD_SUBSCRIPTION_FAIL:
        case EDIT_EDITION_FAIL:
        case EDIT_EDITION_TYPE_FAIL:
        case EDIT_SUBSCRIPTION_FAIL:
        case REMOVE_EDITION_TYPE_FAIL:
        case REMOVE_SUBSCRIPTION_FAIL:
            return {
                ...state,
            }
        default:
            return state
    }
};