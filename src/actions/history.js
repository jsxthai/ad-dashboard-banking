import * as api from "../api/history";

export const fetchHistory = (numberAccount, typeTrans) => async (dispatch) => {
  try {
    const response = await api.fetchHistory(numberAccount, typeTrans);
    // console.log("response", response.data);
    dispatch({ type: "ACCESS_TRANS", payload: response.data });
  } catch (error) {
    // console.log(error.response.data.msg);
    alert(error.response.data.msg);
    return;
  }
};
