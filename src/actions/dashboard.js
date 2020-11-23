import * as api from "../api/dashboard";
import { FETCH_TOTAL_USERS } from "../constants/actionTypes";

export const fetchTotalUsers = () => async (dispatch) => {
  try {
    const response = await api.getTotalUser();
    dispatch({ type: FETCH_TOTAL_USERS, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};
