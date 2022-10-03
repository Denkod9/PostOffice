import {
    ADD_DELIVERY_SUCCESS,
    ADD_DELIVERY_FAIL,
    EDIT_DELIVERY_SUCCESS,
    EDIT_DELIVERY_FAIL,
    DELETE_DELIVERY_SUCCESS,
    DELETE_DELIVERY_FAIL,
} from '../../actions/Delivery/types';

const initialState = {
    delivery: null
};

export default function foo (state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case ADD_DELIVERY_SUCCESS:
        case EDIT_DELIVERY_SUCCESS:
        case DELETE_DELIVERY_SUCCESS:
            return {
                ...state,
                delivery: payload,
            }

        case ADD_DELIVERY_FAIL:
        case EDIT_DELIVERY_FAIL:
        case DELETE_DELIVERY_FAIL:
            return {
                ...state,
                delivery: null
            }
        default:
            return state
    }
};