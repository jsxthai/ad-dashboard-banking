import { FETCH_TOTAL_USERS } from "../constants/actionTypes";

const initialState = {
  totalUsers: 0,
};

export default function accounts(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_TOTAL_USERS:
      return {
        totalUsers: payload.totalUsers,
      };
    default:
      return state;
  }
}
