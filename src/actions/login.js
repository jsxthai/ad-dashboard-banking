import * as api from "../api/login";
import { LOGIN, LOGIN_FAIL } from "../constants/actionTypes";

export const postLogin = (loginData) => async (dispatch) => {
  try {
    const response = await api.login(loginData);
    // console.log("response", response.data);
    if (response.data.token) {
      localStorage.setItem("xx-token", response.data.token);
      localStorage.setItem("name", response.data.userData);
    }
    dispatch({ type: LOGIN, payload: response.data });
  } catch (error) {
    // console.log(error.response.data)
    alert("Incorrect username or password");
    dispatch({ type: LOGIN_FAIL, payload: false });
  }
};
