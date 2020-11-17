import * as api from '../api/login';
import { LOGIN } from '../constants/actionTypes';

export const login = (dataUser) => async (dispatch) => {
    try {
        const response = await api.login(dataUser);
        // console.log("response", response);
        dispatch({ type: LOGIN, payload: response.data })
    } catch (error) {
        console.log(error)
    }
}