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
} from '../../actions/Address/types';

const initialState = {
    street: null,
    address: null,
    post_office_info: null,
};

export default function foo(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case ADD_STREET_SUCCESS:
        case EDIT_STREET_SUCCESS:
        case DELETE_STREET_SUCCESS:
            return {
                ...state,
                street: payload,
            }

        case ADD_ADDRESS_SUCCESS:
        case EDIT_ADDRESS_SUCCESS:
        case DELETE_ADDRESS_SUCCESS:
            return {
                ...state,
                address: payload,
            }

        case ADD_POI_SUCCESS:
        case EDIT_POI_SUCCESS:
        case DELETE_POI_SUCCESS:
            return {
                ...state,
                post_office_info: payload,
            }

        case ADD_STREET_FAIL:
        case EDIT_STREET_FAIL:
        case DELETE_STREET_FAIL:
            return {
                ...state,
                street: null
            }

        case ADD_ADDRESS_FAIL:
        case EDIT_ADDRESS_FAIL:
        case DELETE_ADDRESS_FAIL:
            return {
                ...state,
                address: null
            }

        case ADD_POI_FAIL:
        case EDIT_POI_FAIL:
        case DELETE_POI_FAIL:
            return {
                ...state,
                post_office_info: null
            }
        default:
            return state
    }
};