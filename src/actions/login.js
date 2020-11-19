import * as api from '../api/login';
import { LOGIN, LOGIN_FAIL } from '../constants/actionTypes';

export const postLogin = (loginData) => async (dispatch) => {
    try {
        const response = await api.login(loginData);
        // console.log("response", response.data);
        console.log("token", response.data);
        if (response.data.token) {
            localStorage.setItem('xx-token', response.data.token)
        }
        dispatch({ type: LOGIN, payload: response.data })
    } catch (error) {
        // console.log(error.response.data)
        // alert(error.response.data.mgs)
        dispatch({ type: LOGIN_FAIL, payload: false })

    }
}