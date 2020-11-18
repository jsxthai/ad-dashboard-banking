import axios from 'axios';

const url = 'http://localhost:7777/api/accounts';

export const queryAccount = (accountNumber) => {
    return axios.get(`${url}/${accountNumber}`)
}