import axios from "axios";

export function getTotalUser() {
  return axios.get(`${process.env.REACT_APP_URL}/api/total-user`);
}
