import axios from "axios";

const url = "/api/users";

//   startDate = new Date(Date.now()).setHours(0, 0, 0); // number (with hours: 0:0:0): 1606108877553
export function fetchUsers(startDate, endDate) {
  return axios.get(`${url}/?startDate=${startDate}`);
}

export function createUser(dataUser) {
  return axios.post(url, dataUser);
}
