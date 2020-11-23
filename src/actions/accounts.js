import * as api from "../api/account";

export const queryAccount = (accountNumber) => async (dispatch) => {
  try {
    const response = await api.queryAccount(accountNumber);
    dispatch({ type: "QUERY_ACCOUNT", payload: response });
  } catch (error) {
    // console.log(error)
    dispatch({ type: "CLEAR_QUERY_ACCOUNT" });
    alert("Account number: " + accountNumber + " not found");
  }
};
