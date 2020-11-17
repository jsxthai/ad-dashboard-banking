import axios from 'axios';

// const url = 'https://jsx-banking-app.herokuapp.com/api/users';
const url = 'http://localhost:7777/api/users';


export function fetchUsers() {
    return axios.get(url)
}

export function createUser(dataUser) {
    return axios.post(url, dataUser)
}

export function payInUser(accountNumber, balance) {
    return axios.patch(`${url}/${accountNumber}`, balance)
}