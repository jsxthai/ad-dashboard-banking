import axios from "axios";

// const url = 'https://jsx-banking-app.herokuapp.com/api/users';
const url = "http://localhost:7777/api/users";

//   startDate = new Date(Date.now()).setHours(0, 0, 0); // number (with hours: 0:0:0): 1606108877553
export function fetchUsers(startDate, endDate) {
  return axios.get(`${url}/?startDate=${startDate}`);
}

export function createUser(dataUser) {
  return axios.post(url, dataUser);
}

export function getTotalUser(url) {
  return axios.get(`http://localhost:7777/api/total-user`);
}
