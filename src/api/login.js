import axios from 'axios';

const url = 'https://jsx-banking-app.herokuapp.com/api/login';

export function login(dataUser) {
    return axios.post(url, dataUser)
}