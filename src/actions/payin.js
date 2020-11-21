import * as api from '../api/payin';
import {  PAY_IN } from '../constants/actionTypes';

export const payInUser = (accountNumber, money) => async (dispatch) => {
    try {
        const token = localStorage.getItem('xx-token')
        const response = await api.payInUser(accountNumber, money, token);
        console.log('res: ',response)
        if (response.status === 200) {
            alert('Pay in successed')
        }
        dispatch({ type: PAY_IN, payload: response.data })
    } catch (error) {
        console.log('err: ',error)
        alert('Thông tin không đúng\n Giao dịch thất bại')
    }
}
