import axios from "axios";

const url = "/api/accounts";

export const queryAccount = (accountNumber) => {
  return axios.get(`${url}/${accountNumber}`);
};
