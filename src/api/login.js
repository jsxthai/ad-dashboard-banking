import axios from 'axios';

const url = 'https://jsx-banking-app.herokuapp.com/api/users';

export function fetchUsers() {
    return axios.get(url)
}