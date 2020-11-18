import * as api from '../api/users';
import { FETCH_USERS, CREATE_USER, PAY_IN } from '../constants/actionTypes';

export const fetchUsers = () => async (dispatch) => {
    try {
        const response = await api.fetchUsers();
        // console.log("response", response);
        dispatch({ type: FETCH_USERS, payload: response.data })
    } catch (error) {
        console.log(error)
    }
}

export const createUser = (dataUser) => async (dispatch) => {
    try {
        const response = await api.createUser(dataUser);
        // console.log("response", response.user);
        dispatch({ type: CREATE_USER, payload: response.data.user })
    } catch (error) {
        console.log(error)
    }
}

export const payInUser = (accountNumber, money) => async (dispatch) => {
    try {
        const response = await api.payInUser(accountNumber, money);
        // console.log(response)
        if (response.status === 200) {
            alert('Pay in successed')
        }
        dispatch({ type: PAY_IN, payload: response.data })
    } catch (error) {
        // console.log(error)
        alert('Thông tin không đúng\n Giao dịch thất bại')
    }
}
