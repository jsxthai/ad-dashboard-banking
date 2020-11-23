import axios from "axios";

// const url = "/api/history";
const url = `${process.env.REACT_APP_URL}/api/history`;

export function fetchHistory(accountNumber) {
  return axios.get(`${url}/${accountNumber}`);
}
