import axios from "axios";

const url = "/api/history";

export function fetchHistory(accountNumber) {
  return axios.get(`${url}/${accountNumber}`);
}
