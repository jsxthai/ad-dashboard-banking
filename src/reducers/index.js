import { combineReducers } from "redux";
import users from "./users";
import login from "./login";
import payin from "./payin";
import accounts from "./accounts";
import history from "./history";
import dashboard from "./dashboard";

export default combineReducers({
  users,
  login,
  payin,
  accounts,
  history,
  dashboard,
});
