import axios from "axios";

const url = "http://localhost:7777/api/history";

export function fetchHistory(accountNumber, typeTrans) {
  if (!typeTrans || typeTrans === "undefined") typeTrans = 0;
  return axios.get(`${url}/${accountNumber}?type=${typeTrans}`);
}
