import axios from "axios";

// const url = 'https://jsx-banking-app.herokuapp.com/api/login';
// const url = "/api/login";
const url = `${process.env.REACT_APP_URL}/api/login`;

export function login(loginData) {
  return axios.post(url, loginData);
}
