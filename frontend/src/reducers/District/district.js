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
} from '../../actions/District/types';

const initialState = {
    district: null,
    district_street: null,
};

export default function foo (state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case ADD_DISTRICT_SUCCESS:
        case EDIT_DISTRICT_SUCCESS:
        case DELETE_DISTRICT_SUCCESS:
            return {
                ...state,
                district: payload,
            }

        case ADD_DISTRICT_STREET_SUCCESS:
        case EDIT_DISTRICT_STREET_SUCCESS:
        case DELETE_DISTRICT_STREET_SUCCESS:
            return {
                ...state,
                district_street: payload,
            }

        case ADD_DISTRICT_FAIL:
        case EDIT_DISTRICT_FAIL:
        case DELETE_DISTRICT_FAIL:
            return {
                ...state,
                district: null
            }

        case ADD_DISTRICT_STREET_FAIL:
        case EDIT_DISTRICT_STREET_FAIL:
        case DELETE_DISTRICT_STREET_FAIL:
            return {
                ...state,
                district_street: null
            }
        default:
            return state
    }
};