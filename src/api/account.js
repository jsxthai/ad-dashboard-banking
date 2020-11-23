import axios from "axios";

// const url = "/api/accounts";
const url = `${process.env.REACT_APP_URL}/api/accounts`;

export const queryAccount = (accountNumber) => {
  return axios.get(`${url}/${accountNumber}`);
};
