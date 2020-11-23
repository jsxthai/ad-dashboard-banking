import * as api from "../api/users";
import { FETCH_USERS, CREATE_USER } from "../constants/actionTypes";

export const fetchUsers = (startDate, endDate) => async (dispatch) => {
  try {
    const response = await api.fetchUsers(startDate, endDate);
    // console.log("response", response);
    dispatch({ type: FETCH_USERS, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const createUser = (dataUser) => async (dispatch) => {
  try {
    const response = await api.createUser(dataUser);
    // console.log("response", response.user);
    dispatch({ type: CREATE_USER, payload: response.data.user });
    alert("Create user success");
  } catch (error) {
    console.log(error);
  }
};
