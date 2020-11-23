import axios from "axios";

// const url = 'https://jsx-banking-app.herokuapp.com/api/users';
const url = "/api/payins";

export function payInUser(accountNumber, money, detail, token) {
  return axios.put(
    `${url}`,
    {
      accountNumber,
      mount: money,
      detail,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}
