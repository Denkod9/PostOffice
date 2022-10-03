import {
    ADD_SUBSCRIBER_SUCCESS,
    ADD_SUBSCRIBER_FAIL,
    EDIT_SUBSCRIBER_SUCCESS,
    EDIT_SUBSCRIBER_FAIL,
    DELETE_SUBSCRIBER_SUCCESS,
    DELETE_SUBSCRIBER_FAIL,
} from '../../actions/Accounts/types';

const initialState = {
    subscriber: null
};

export default function foo (state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case ADD_SUBSCRIBER_SUCCESS:
        case EDIT_SUBSCRIBER_SUCCESS:
        case DELETE_SUBSCRIBER_SUCCESS:
            return {
                ...state,
                subscriber: payload,
            }

        case ADD_SUBSCRIBER_FAIL:
        case EDIT_SUBSCRIBER_FAIL:
        case DELETE_SUBSCRIBER_FAIL:
            return {
                ...state,
                subscriber: null
            }
        default:
            return state
    }
};