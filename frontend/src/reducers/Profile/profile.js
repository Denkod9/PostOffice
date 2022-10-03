import {
    PROFILE_LOADED_SUCCESS,
    PROFILE_LOADED_FAIL,
} from '../../actions/Profile/types';

const initialState = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    edition: null
};

export default function foo (state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case PROFILE_LOADED_SUCCESS:

            return {
                ...state,
                user: payload,
            }

        case PROFILE_LOADED_FAIL:
            return {
                ...state,
                user: null
            }
        default:
            return state
    }
};