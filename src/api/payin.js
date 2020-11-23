import axios from "axios";

// const url = "/api/payins";
const url = `${process.env.REACT_APP_URL}/api/payins`;

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
