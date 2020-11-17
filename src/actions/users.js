import * as api from '../api/users';
import { FETCH } from '../constants/actionTypes';

export const fetchUsers = () => async (dispatch) => {
    try {
        const response = await api.fetchUsers();
        // console.log("response", response);
        dispatch({ type: FETCH, payload: response.data })
    } catch (error) {
        console.log(error)
    }
}