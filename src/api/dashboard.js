import axios from "axios";

export function getTotalUser() {
  return axios.get(`/api/total-user`);
}
