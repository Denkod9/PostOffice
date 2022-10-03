import axios from "axios";
import {
    PROFILE_LOADED_SUCCESS,
    PROFILE_LOADED_FAIL,
} from './types';


// export const profile = (subscriberId, first_name, last_name, date_of_birth, phone, address) => async dispatch => {
export const profile = (first_name, last_name, date_of_birth, phone, address) => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        // const body = JSON.stringify({ subscriberId, first_name, last_name, date_of_birth, phone, address});
        const body = JSON.stringify({ first_name, last_name, date_of_birth, phone, address});

        try {
            // const res = await axios.patch(`${process.env.REACT_APP_API_URL}/accounts/profile/${subscriberId}/`, body, config);
            const res = await axios.patch(`${process.env.REACT_APP_API_URL}/auth/users/me/`, body, config);

            dispatch({
                type: PROFILE_LOADED_SUCCESS,
                payload: res.data
            });

        } catch (err) {
            dispatch({
                type: PROFILE_LOADED_FAIL
            });
        }
    } else {
        dispatch({
            type: PROFILE_LOADED_FAIL
        });
    }
}


// export const profile = (first_name, last_name, email, phone, typeStreet, street, house, flat) => async dispatch => {
//     if (localStorage.getItem('access')) {
//         const config = {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `JWT ${localStorage.getItem('access')}`,
//                 'Accept': 'application/json'
//             }
//         };

//         // const body = JSON.stringify({ first_name, last_name, email});
//         const body = JSON.stringify({ first_name, last_name, email, phone, typeStreet, street, house, flat});
//         // const body = JSON.stringify({ first_name, last_name, email, phone, address});

//         try {
//             const res = await axios.put(`${process.env.REACT_APP_API_URL}/auth/users/me/`, body, config);

//             dispatch({
//                 type: PROFILE_LOADED_SUCCESS,
//                 payload: res.data
//             });

//         } catch (err) {
//             dispatch({
//                 type: PROFILE_LOADED_FAIL
//             });
//         }
//     } else {
//         dispatch({
//             type: PROFILE_LOADED_FAIL
//         });
//     }

// }



