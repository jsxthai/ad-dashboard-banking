import axios from "axios";

const url = "http://localhost:7777/api/history";

export function fetchHistory(accountNumber) {
  return axios.get(`${url}/${accountNumber}`);
}
