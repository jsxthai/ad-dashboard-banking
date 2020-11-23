import { LOGIN } from "../constants/actionTypes";

const initialState = {
  isLogin: false,
  userData: localStorage.getItem("name"),
  token: localStorage.getItem("xx-token"),
};
// chưa check
if (initialState.token) {
  initialState.isLogin = true;
}

export default function employee(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      //   console.log("pay load", action.payload);
      return {
        ...state,
        isLogin: true,
        token: action.payload.token ? action.payload.token : state.token,
        userData: action.payload.userData,
      };
    case "CHECK_LOGIN":
      if (state.token) {
        return {
          ...state,
          isLogin: true,
        };
      }
      return state;
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isLogin: false,
        token: null,
        userData: "",
      };
    default:
      return state;
  }
}
