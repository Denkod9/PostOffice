import {
    ADD_POSTMAN_SUCCESS,
    ADD_POSTMAN_FAIL,
    EDIT_POSTMAN_SUCCESS,
    EDIT_POSTMAN_FAIL,
    REMOVE_POSTMAN_SUCCESS,
    REMOVE_POSTMAN_FAIL,
} from '../../actions/Postman/types';

const initialState = {
    postman: null
};

export default function foo (state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case ADD_POSTMAN_SUCCESS:
        case EDIT_POSTMAN_SUCCESS:
        case REMOVE_POSTMAN_SUCCESS:
            return {
                ...state,
                postman: payload,
            }

        case ADD_POSTMAN_FAIL:
        case EDIT_POSTMAN_FAIL:
        case REMOVE_POSTMAN_FAIL:
            return {
                ...state,
                postman: null
            }
        default:
            return state
    }
};